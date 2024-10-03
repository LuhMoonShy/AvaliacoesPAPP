import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

function App() {
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);


  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Configurações de Preferências</Text>

      <Text style={[styles.label, { fontSize: tamanhoFonte }]}>Tema do Aplicativo</Text>
      <Picker
        selectedValue={tema}
        onValueChange={(itemValue) => setTema(itemValue)}
        style={[styles.picker, { fontSize: tamanhoFonte }]}  
      >
        <Picker.Item label="Claro" value="Claro" style={{ fontSize: tamanhoFonte }} />
        <Picker.Item label="Escuro" value="Escuro" style={{ fontSize: tamanhoFonte }} />
        <Picker.Item label="Automático" value="Automático" style={{ fontSize: tamanhoFonte }} />
      </Picker>

      <Text style={[styles.label, { fontSize: tamanhoFonte }]}>Tamanho da Fonte: {tamanhoFonte}</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
        step={1}
        style={styles.slider}
      />

      <Text style={[styles.label, { fontSize: tamanhoFonte }]}>Modo Noturno</Text>
      <Switch
        value={modoNoturno}
        onValueChange={(value) => setModoNoturno(value)}
      />
      <Text style={[styles.estadoSwitch, { fontSize: tamanhoFonte }]}>
        {modoNoturno ? 'Ativado' : 'Desativado'}
      </Text>

      <Button title="Resetar Preferências" onPress={resetarPreferencias} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    marginBottom: 200,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  estadoSwitch: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
