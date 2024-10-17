import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';

export default function App() {
  const onButtonPress = (buttonId) => {
    console.log(`Botão ${buttonId} pressionado`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(1)}>
            <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(2)}>
            <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(3)}>
            <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(4)}>
            <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(5)}>
            <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.mainImageContainer}>
        <Image source={require('./assets/AhriPrincipal.jpg')} style={styles.mainImage} />
        <TouchableOpacity style={[styles.cornerButton, styles.topLeft]} onPress={() => onButtonPress('topLeft')}>
          <Image source={require('./assets/Botao1.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cornerButton, styles.topRight]} onPress={() => onButtonPress('topRight')}>
          <Image source={require('./assets/Botao2.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cornerButton, styles.bottomRight]} onPress={() => onButtonPress('bottomRight')}>
          <Image source={require('./assets/Botao3.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleAndButtonContainer}>
        <Text style={styles.titleText}>Skins</Text>
        <TouchableOpacity style={styles.roundButtonSmall} onPress={() => onButtonPress(6)}>
          <Image source={require('./assets/BotoesSuperiores.png')} style={styles.buttonImageSmall} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={require('./assets/ImmortalizedAhri.jpg')} style={styles.cardImage} />
        </View>
        <View style={styles.card}>
          <Image source={require('./assets/SpiritBlossomAhri.jpg')} style={styles.cardImage} />
        </View>
        <View style={styles.card}>
          <Image source={require('./assets/ElderwoodAhri.jpg')} style={styles.cardImage} />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(6)}>
          <Image source={require('./assets/Botao1.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(7)}>
          <Image source={require('./assets/Botao2.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(8)}>
          <Image source={require('./assets/Botao3.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={() => onButtonPress(9)}>
          <Image source={require('./assets/Botao4.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    alignItems: 'flex-start',
    paddingTop: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  mainImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  titleAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  roundButtonSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImageSmall: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  card: {
    width: 120,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'resize',
    borderRadius: 10,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cornerButton: {
    width: 100,
    height: 30,
    position: 'absolute',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  topLeft: {
    top: 10,
    left: 20,
  },
  topRight: {
    top: 10,
    right: 20,
  },
  bottomRight: {
    bottom: 10,
    right: 20,
  },
});
