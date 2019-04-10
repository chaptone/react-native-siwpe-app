import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screen/RegisterScreen.js';
import WelcomeScreen from './screen/WelcomeScreen.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterScreen />
        <WelcomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
