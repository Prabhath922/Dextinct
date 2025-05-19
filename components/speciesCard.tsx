import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export type Species={
    id: number;
    name: string;
    image: string;
    description: string;
    extinctionDate: string;
}
type Props={
    species:Species;
}

const speciesCard:React.FC<Props>=({species})=>{
    return(
        <View style={styles.card}>
        <Image source={{ uri: species.image }} style={styles.image} />
        <Text style={styles.name}>{species.name}</Text>
        <Text style={styles.description}>{species.description}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 15,
      borderRadius: 10,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    description: {
      marginTop: 5,
      fontSize: 14,
      color: '#555',
    },
  });
  
  export default speciesCard;

