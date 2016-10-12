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
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import TopTitleCell from '../common/topTitleCell';

export default class BaiduMap extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='商家详情' goBack={this.toback} leftTitle='返回'/>

      </View>
    );
  }
  toback=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.pop()
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'#bbbbbb'
   },



});
