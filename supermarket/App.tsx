import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App =() => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style = {styles.container}/>
      <Text>Password</Text>
      <TextInput secureTextEntry = {true} style = {styles.container}/>
      <View style={styles.createForgotLink}>
        <Text>Create Account</Text>
        <Text>Forgot Password</Text>
      </View>
      <Button title='Enviar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 40
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#848484",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom: "5%",
  },
  createForgotLink:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: "5%",
  },
  link: {
    color: "2196F3",
    marginLeft: "6%"
  }
});

export default App()