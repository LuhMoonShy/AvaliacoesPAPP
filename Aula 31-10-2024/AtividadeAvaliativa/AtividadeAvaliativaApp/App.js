import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const storedTasks = await AsyncStorage.getItem('@tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }

  async function addTask() {
    if (task.trim() === '') return;

    const newTasks = [...tasks, task];
    setTasks(newTasks);
    await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
    setTask('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    margin: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff', 
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});
