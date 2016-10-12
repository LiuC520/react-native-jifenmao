/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default class ZcfbCommon extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    borderColor:'#bbbbbb',
    borderTopWidth:1,
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    paddingTop:10,
    paddingBottom:10

   },
   text:{
     fontWeight:'600',
     fontSize:14,
     alignSelf:'center'
   },



});
