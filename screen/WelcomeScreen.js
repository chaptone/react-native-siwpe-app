import React, { Component } from 'react';
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper';

class WelcomeScreen extends Component {
  state = {  }
  render() { 
    return (
      <View>
        <Swiper>
            <View style={style.slide1}>
              <Text style={style.text}> This is the first view. </Text>
            </View>
            <View style={style.slide2}>
              <Text style={style.text}> This is the second view. </Text>
            </View>
            <View style={style.slide3}>
              <Text style={style.text}> This is the third view. </Text>
            </View>
        </Swiper>
        <Text> This is WelcomeScreen Screen </Text>
      </View>
    );
  }
}

const style = {
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'normal',
    margin: 20,
  },
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004d40',
  },
  slide2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01579b',
  },
  slide3: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d40',
  }
}
 
export default WelcomeScreen;