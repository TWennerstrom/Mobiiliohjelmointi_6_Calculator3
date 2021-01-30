import React, { useState, useRef }from 'react';
import{ StyleSheet,  Text,  View, Button, TextInput, FlatList}  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Historia from './components/history';

const Stack = createStackNavigator();

function Laskin({navigation}) {

const [tulos, setTulos] = useState('');
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [lista, lisaa] = useState([]);

const initialFocus = useRef(null);

const laske = operator => {
  console.log(num1, num2, operator);
  const [numero1, numero2] = [Number(num1), Number(num2)];

  if (isNaN(numero1) || isNaN(numero2)) {
    setTulos(0);
  } else {
    let tulos = 0;
    switch (operator) {
      case '+':
        tulos = numero1 + numero2;
        break;
      case '-':
        tulos = numero1 - numero2;
        break;
    }
    setTulos(tulos);

    const text = `${numero1} ${operator} ${numero2} = ${tulos}`;
    lisaa([...lista, { key: text }]);
  }

  setNum1('');
  setNum2('');
  initialFocus.current.focus();
}

return( 
  <View style={styles.container}>
    <View style={styles.contText}>
      <Text style={styles.tulos} >Tulos: {tulos}</Text></View>
    <View style={styles.contInput}>
    <TextInput
      style={styles.input}
      ref={initialFocus}
      keyboardType={'numeric'}
      placeholder='Ensimmäinen numero'
      onChangeText={text => setNum1(text)}
      value={num1}
    />
    <TextInput
      style={styles.input}
      keyboardType={'numeric'}
      placeholder='Toinen numero'
      onChangeText={text => setNum2(text)}
      value={num2}
    /></View>
    <View style={styles.contButton}>
      <Button onPress={() => laske('+')} title=" + " />
      <Button onPress={() => laske('-')} title=" - " />
      <Button onPress={() => navigation.navigate('Historia', {lista})} title="Historia"/>
    </View>
  </View >
);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Laskin" component={Laskin} />
        <Stack.Screen name="Historia" component={Historia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  contText:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  tulos:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  contInput:{
    alignItems: 'center',
  },
  input:{
    height: 40,
    width: '50%',
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 8,
    margin: 5,
  },
  contButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '30%',
    marginRight: '30%',
  }
});