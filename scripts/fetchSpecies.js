const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); 

async function fetchSpeciesData() {
  const searchQuery = ''; 
  const speciesList = [];

  try {
    const res = await fetch(`https://api.gbif.org/v1/species/search?q=${searchQuery}`);
    const data = await res.json();

    for (const s of data.results) {
      const countRes = await fetch(`https://api.gbif.org/v1/occurrence/search?taxonKey=${s.key}`);
      const countData = await countRes.json();

      speciesList.push({
        id: s.key,
        name: s.scientificName,
        recordCount: countData.count || 0,
      });
    }
    const outputDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const outputPath = path.join(outputDir, 'species.json');
    fs.writeFileSync(outputPath, JSON.stringify(speciesList, null, 2));
    console.log('✅ Data saved to public/species.json');
  } catch (err) {
    console.error('❌ Error fetching species data:', err);
  }
}

fetchSpeciesData();
