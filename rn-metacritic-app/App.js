import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const icon = require('./assets/icon.png'); // Adjust the path as necessary

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg" }} style={{
        width:300, 
        height:500,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 20,
        }}/>
      <Text style={{color: 'white'}}>Open up App.js to start working on your app! Hola Pili</Text>
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
