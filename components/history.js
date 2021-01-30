import React from 'react';
import{ StyleSheet, Text, View, FlatList}  from 'react-native';


export default function Historia({route}) {
    const {lista} = route.params;
    return (
      <View style={styles.container}>
            <Text style={styles.tulos}>Historia:</Text>
          <FlatList 
          data={lista}
          renderItem={({item}) =>
            <Text>{item.key}</Text>}
          />
      </View>
      );
  }

    const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff',
    },
    tulos:{
        fontWeight: 'bold',
        fontSize: 20,
    }
})