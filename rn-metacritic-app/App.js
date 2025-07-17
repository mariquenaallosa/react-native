import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

const icon = require('./assets/icon.png'); // Adjust the path as necessary

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Button' onPress={() => alert("Hola desde un button") }/>
      <TouchableHighlight
      underlayColor={"#09f"}
      onPress={() => alert("Hola desde TouchableHighlight")}
      style={{
        width: 200,
        height:200,
        backgroundColor: 'red', 
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Text style={{
          color: 'white', 
          fontSize: 20, 
          }}>TouchableHighlight</Text>
      </TouchableHighlight>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
