/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  WebView
} from 'react-native';

const {width,height}=Dimensions.get('window');

export default class Shop extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <WebView
         source={{uri: 'http://cmy.shctp.com/index.html'}}
         style={{marginTop: 20}}
       />
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   text:{
     color:'green',
     fontSize:14,
   }

});
