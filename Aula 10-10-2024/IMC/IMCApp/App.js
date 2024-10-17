import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [genero, setGenero] = useState('');
  const [isCalculado, setIsCalculado] = useState(false);
  const [erroMensagem, setErroMensagem] = useState('');

  const validarEntradas = () => {
    const regexAltura = /^[0-9]+,[0-9]{2}$/;  // Regex para altura no formato correto (ex: 1,60)
    const regexPeso = /^[0-9]+(,[0-9]{1,2})?$/;  // Regex para peso (ex: 70 ou 70,5)

    if (!regexAltura.test(altura)) {
      setErroMensagem('Por favor, insira a altura no formato correto (ex: 1,60m).');
      return false;
    }

    if (!regexPeso.test(peso)) {
      setErroMensagem('Por favor, insira o peso no formato correto (ex: 70 ou 70,5 kg).');
      return false;
    }

    setErroMensagem('');
    return true;
  };

  const calcularIMC = () => {
    if (!validarEntradas() || !genero) {
      setImageSource(null);
      return;
    }

    const pesoFloat = parseFloat(peso.replace(',', '.'));
    const alturaFloat = parseFloat(altura.replace(',', '.'));

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    let classificacao = '';
    let image = null;

    if (genero === 'homem') {
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso (Homem)';
        image = require('./assets/abaixo-peso-homem.png');
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal (Homem)';
        image = require('./assets/peso-normal-homem.png');
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso (Homem)';
        image = require('./assets/sobrepeso-homem.png');
      } else if (imc >= 30 && imc < 39.9) {
        classificacao = 'Obesidade (Homem)';
        image = require('./assets/obesidade-homem.png');
      } else {
        classificacao = 'Obesidade grave (Homem)';
        image = require('./assets/obesidade-grave-homem.png');
      }
    } else if (genero === 'mulher') {
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso (Mulher)';
        image = require('./assets/abaixo-peso-mulher.png');
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal (Mulher)';
        image = require('./assets/peso-normal-mulher.png');
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso (Mulher)';
        image = require('./assets/sobrepeso-mulher.png');
      } else if (imc >= 30 && imc < 39.9) {
        classificacao = 'Obesidade (Mulher)';
        image = require('./assets/obesidade-mulher.png');
      } else {
        classificacao = 'Obesidade grave (Mulher)';
        image = require('./assets/obesidade-grave-mulher.png');
      }
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
    setImageSource(image);
    setIsCalculado(true);
  };

  const reiniciar = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setImageSource(null);
    setGenero('');
    setIsCalculado(false);
    setErroMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Image source={require('./assets/balanca.png')} style={styles.mainImage} resizeMode="contain" />

      {erroMensagem ? <Text style={styles.erroMensagem}>{erroMensagem}</Text> : null}

      {!isCalculado ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={(value) => setPeso(value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            keyboardType="numeric"
            value={altura}
            onChangeText={(value) => setAltura(value)}
          />

          <View style={styles.genderContainer}>
            <TouchableOpacity 
              style={[styles.genderButton, genero === 'homem' ? styles.selectedButton : null]} 
              onPress={() => setGenero('homem')}>
              <Text style={styles.genderButtonText}>Homem</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.genderButton, genero === 'mulher' ? styles.selectedButton : null]} 
              onPress={() => setGenero('mulher')}>
              <Text style={styles.genderButtonText}>Mulher</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={calcularIMC}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultado}>{resultado}</Text>
          {imageSource && (
            <Image 
              source={imageSource} 
              style={styles.resultImage} 
              resizeMode="contain"
            />
          )}
          <TouchableOpacity style={styles.buttonReiniciar} onPress={reiniciar}>
            <Text style={styles.buttonText}>Recalcular</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  buttonReiniciar: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  mainImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  resultImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  genderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  erroMensagem: {
    color: '#ff0000',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
