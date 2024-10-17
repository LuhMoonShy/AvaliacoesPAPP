import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const gerarJogadaAleatoria = () => {
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  return opcoes[indiceAleatorio];
};


const determinarResultado = (jogadaUsuario, jogadaApp) => {
  if (jogadaUsuario === jogadaApp) return 'Empate!';
  if (
    (jogadaUsuario === 'Pedra' && jogadaApp === 'Tesoura') ||
    (jogadaUsuario === 'Tesoura' && jogadaApp === 'Papel') ||
    (jogadaUsuario === 'Papel' && jogadaApp === 'Pedra')
  ) {
    return 'Você ganhou!';
  } else {
    return 'Você perdeu!';
  }
};

export default function App() {
  const [jogadaUsuario, setJogadaUsuario] = useState('');
  const [jogadaApp, setJogadaApp] = useState('');
  const [resultado, setResultado] = useState('');
  const [jogoAtivo, setJogoAtivo] = useState(true);  

  const jogar = (opcao) => {
    if (jogoAtivo) {
      const jogadaDoApp = gerarJogadaAleatoria();
      setJogadaUsuario(opcao);
      setJogadaApp(jogadaDoApp);
      setResultado(determinarResultado(opcao, jogadaDoApp));
      setJogoAtivo(false); 
    }
  };

  const reiniciarJogo = () => {
    setJogadaUsuario('');
    setJogadaApp('');
    setResultado('');
    setJogoAtivo(true);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>
      <Text style={styles.text}>Escolha um movimento:</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')} style={[styles.optionButton, !jogoAtivo && styles.disabledButton]} disabled={!jogoAtivo}>
          <Image source={require('./assets/pedra.png')} style={styles.optionImage} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Papel')} style={[styles.optionButton, !jogoAtivo && styles.disabledButton]} disabled={!jogoAtivo}>
          <Image source={require('./assets/papel.png')} style={styles.optionImage} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Tesoura')} style={[styles.optionButton, !jogoAtivo && styles.disabledButton]} disabled={!jogoAtivo}>
          <Image source={require('./assets/tesoura.png')} style={styles.optionImage} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você escolheu: {jogadaUsuario}</Text>
          <Text style={styles.resultText}>A IA escolheu: {jogadaApp}</Text>
          <Text style={styles.resultText}>{resultado}</Text>

          <TouchableOpacity style={styles.resetButton} onPress={reiniciarJogo}>
            <Text style={styles.resetButtonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 20,
    position: 'absolute',
    top: 300,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350,
  },
  optionButton: {
    alignItems: 'center',
    marginHorizontal: 20,
    width: 100,  
    height: 100, 
  },
  optionImage: {
    width: '100%',
    height: '100%',
  },
  disabledButton: {
    opacity: 0.5, 
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  resetButton: {
    backgroundColor: '#2E073F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
    marginTop: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
