import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
export function TelaLogin() {
  
  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');


  return (
    <View style={styles.container}>
      <Image style={{ width: 100, backgroundColor: 'black', marginTop: 10 }} source={require('../../assets/img1.png')} />
      <View style={styles.pagLogin}>
        <TextInput style={{ width: '80%', height: 50 }}
          label="Login"
          value={login}
          onChangeText={login => setLogin(login)}
        />
        <TextInput style={{ marginTop: 15, width: '80%', height: 50 }}
          label="Password"
          secureTextEntry
          onChangeText={senha => setSenha(senha)}
        />

        <Button
          style={{ backgroundColor: 'black', marginTop: 30 }}
          mode="contained" 
          onPress = {handleLoginPress}>
          
          Entrar
        </Button>
        <Button
          style={{ backgroundColor: 'black', marginTop: 15 }}
          mode="contained"
          >
          Cadastrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'white',
  },
  pagLogin: {
    backgroundColor: 'gainsboro',
    width: "85%",
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 15,
  },
});
