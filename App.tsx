import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome'style={styles.textinp} />
      <Text>Digite seu email</Text>
      <TextInput placeholder='Email'style={styles.emailinp}/>
      <Text>Digite sua senha</Text>
      <TextInput placeholder='Senha'style={styles.senhainp} />
      <TouchableOpacity activeOpacity ={0.5} style={styles.button}>
        <Text>ENVIAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    backgroundColor: '#FF7F50',
    color: 'red',
    width: 150,
    height: 50,
    borderRadius: 10,
  },
   
  emailinp: {
    backgroundColor: '#FF7F50',
    color: 'red',
    width: 150,
    height: 50,
    borderRadius: 10,
  },

  senhainp: {
    backgroundColor: '#FF7F50',
    color: 'red',
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'rgb(192,192,192)',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  },



 

  },
);
