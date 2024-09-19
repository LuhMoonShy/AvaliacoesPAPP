import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import fortunesData from './assets/fortunes.json';

const App = () => {
  const [fortune, setFortune] = useState(null);
  const [image, setImage] = useState(require('./assets/cookie_closed.png'));
  const [fortunes] = useState(fortunesData); // Usar os dados importados

  const handleBreakCookie = () => {
    // Mudar imagem para biscoito aberto
    setImage(require('./assets/cookie_open.png'));

    // Selecionar uma frase de sorte aleatória
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cookieImage} />
      <TouchableOpacity style={styles.button} onPress={handleBreakCookie}>
        <Text style={styles.buttonText}>Quebre o Biscoito</Text>
      </TouchableOpacity>
      {fortune && <Text style={styles.fortuneText}>{fortune}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cookieImage: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff9900',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
