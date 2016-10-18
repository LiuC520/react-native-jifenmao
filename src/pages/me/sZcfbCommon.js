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
} from 'react-native';


export default class SZcfbCommon extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <Text style={styles.text}>{this.props.stitle}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

   text:{
     color:'rgb(85,132,228)',
     fontWeight:'600',
     fontSize:12,
     marginBottom:20,
     marginLeft:10
   },



});
