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
  Image,
  TouchableOpacity
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Swiper from 'react-native-swiper';
import Welcome from './welcome';

export default class FirstLoad extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      >
       <View style={styles.slide}>
         <Image source={require('./images/welcome01.jpg')} style={styles.images}/>

       </View>
       <View style={styles.slide}>
       <Image source={require('./images/welcome02.jpg')} style={styles.images}/>
       </View>
       <View style={styles.slide}>
       <Image source={require('./images/welcome03.jpg')} style={styles.images}/>
       </View>
       <View style={styles.slide}>
       <Image source={require('./images/welcome04.jpg')} style={styles.images}/>
       <TouchableOpacity onPress={this._toMainPage} style={styles.jump}>
        <Text style={styles.text}>立即体验</Text>
       </TouchableOpacity>
       </View>


     </Swiper>
    );
  }
  _toMainPage=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.push({
        name:'welcome',
        component:Welcome
      })
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
   },
   slide: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   images:{
     width:width,
     height:height,
     resizeMode:'contain'
   },
   jump:{
     position:'absolute',
     top:20,
     right:20,
     backgroundColor:'red',
     borderRadius:20,
   },
   text:{
     color:'white',
     fontSize:14,
   }

});
