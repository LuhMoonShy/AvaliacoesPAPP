import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [calculoFeito, setCalculoFeito] = useState(false); // Controla se o cálculo já foi feito

  const calcularVantagem = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
      setResultado('Por favor, insira valores válidos.');
      setImageSource(null);
      return;
    }

    const ratio = precoAlcool / precoGasolina;

    if (ratio <= 0.7) {
      setResultado('Abasteça com Álcool. O álcool é mais vantajoso porque custa 70% ou menos do preço da gasolina.');
      setImageSource(require('./assets/alcool.webp'));
    } else {
      setResultado('Abasteça com Gasolina. A gasolina é mais vantajosa porque o preço do álcool está acima de 70% do preço da gasolina.');
      setImageSource(require('./assets/gasolina.webp'));
    }

    setCalculoFeito(true); // Desativa o botão "Calcular"
  };

  const reiniciar = () => {
    setAlcool('');
    setGasolina('');
    setResultado('');
    setImageSource(null);
    setCalculoFeito(false); // Reativa o botão "Calcular"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={(value) => setAlcool(value)}
        editable={!calculoFeito} // Desabilita a edição após o cálculo
      />
      
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={(value) => setGasolina(value)}
        editable={!calculoFeito} // Desabilita a edição após o cálculo
      />
      
      <TouchableOpacity
        style={[styles.button, calculoFeito && styles.disabledButton]} // Aplica estilo de desabilitado
        onPress={calcularVantagem}
        disabled={calculoFeito} // Desabilita o botão após o cálculo
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      
      {resultado ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultado}>{resultado}</Text>
          {imageSource && (
            <Image 
              source={imageSource} 
              style={styles.resultImage} 
            />
          )}
          <TouchableOpacity style={styles.buttonRecalcular} onPress={reiniciar}>
            <Text style={styles.buttonText}>Recalcular</Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 130,
  },
  input: {
    width: '80%',
    height: 40,
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
  buttonRecalcular: {
    backgroundColor: '#2E073F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc', // Muda a cor do botão desabilitado
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
    color: '#2E073F',
    textAlign: 'center',
  },
  resultImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
