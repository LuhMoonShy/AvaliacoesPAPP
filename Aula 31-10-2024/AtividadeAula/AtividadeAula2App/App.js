import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, Button, StyleSheet} from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

function App() {
  const [input, setInput] = useState ('')
  const [name, setName] = useState ('')

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    await AsyncStorage.getItem('@name').then((value) => [
      setName(value)
    ])
  }
  async function addName() {
    await AsyncStorage.setItem('@name', input)
      setName(input)
      setInput('')
  }

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.innerContainer}>
        <TextInput 
          style = {styles.input}
          placeholder='Type Your Name'
          onChangeText={(value) => setInput(value)}
        />
        <Button 
        title = '+' 
        onPress={() => addName()} 
        />
      </View>
      <Text style={styles.TextName}>{name}</Text>
    </SafeAreaView>
  )
}  

export default App

styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    innerContainer: {
      flexDirection: 'row',
      alignContent: '',
    },
    input: {
      borderWidth: 1,
      width: 350,
      padding: 10,
      borderRadius: 50,
    },
    TextName: {
      marginTop: 20,
      fontSize: 30,
    },
  })


