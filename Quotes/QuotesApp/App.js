import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import quotesData from './assets/quotes.json';

const imageMap = {
  'einstein.jpg': require('./assets/einstein.jpg'),
  'steve_jobs.jpg': require('./assets/steve_jobs.jpg'),
  'martin_luther_king.jpg': require('./assets/martin_luther_king.jpg'),
  'john_lennon.jpg': require('./assets/john_lennon.jpg'),
};

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
  }

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageMap[currentQuote.image]}
        style={styles.authorImage}
      />
      <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
      <Text style={styles.authorText}>- {currentQuote.author}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  authorImage: {
    width: 220,
    height: 250,
    borderRadius: 5,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
