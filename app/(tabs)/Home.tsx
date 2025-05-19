import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import speciesdata from "../../assets/data/animalsData.json";
import SpeciesCard, { Species } from '../../components/speciesCard.tsx';

export default function app(){
    const[SpeciesList,setSpeciesList]=useState<Species[]>([]);

    useEffect(()=>{
        setSpeciesList(speciesdata);
    },[]
    )
    return (
        <View style={styles.container}>
      <Text style={styles.header}>Endangered Species Near You</Text>
      <FlatList
        data={SpeciesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SpeciesCard species={item} />}
      />
      <StatusBar />
    </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: '#f4f4f4',
      }, header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
})
