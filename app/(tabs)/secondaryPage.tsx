import React, { useEffect, useState } from 'react';

interface Species {
  id: number;
  name: string;
  recordCount: number;
}

function App() {
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSpecies = async () => {
      try {
        const res = await fetch('/species.json');
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: Species[] = await res.json();
        setSpeciesList(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadSpecies();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Species Data</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {speciesList.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong> — Records: {s.recordCount.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
