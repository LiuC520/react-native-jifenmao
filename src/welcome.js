/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Main from './pages/main';

export default class Welcome extends Component {
    constructor(props) {
    super(props);
    this.state = { time: 3 };
  }
  render() {
    return (
      <View style={styles.slide}>
        <Image source={require('./images/welcome05.jpg')} style={styles.images}/>
        <View style={styles.timeout}>
          <Text style={styles.text}>{this.state.time}s
          </Text>
        </View>
      </View>
    );
  }
  componentDidMount(){
    //定时每隔1s让时间减一，并显示在text中，然后当时间小于等于0，清除定时器
    //注意此处必须清除定时器，否则，定时会一直开启，消耗内存
    timeout=setInterval(()=>{
        if (this.state.time > 0) {
          this.setState({
            time:this.state.time-1
          })
        }else{
          clearInterval(timeout);
        }
        console.log('1')
      },1000)
      //3S后直接跳转进入主页
    setTimeout(()=>{
      this.goToMainPage()
    },3000);
  }
//跳转到主页
  goToMainPage=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.push({
        name:'main',
        component:Main
      });
      // navigator.pop('welcome')
    }
  }

}

const styles = StyleSheet.create({
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
   timeout:{
     position:'absolute',
     top:20,
     right:20,
     backgroundColor:'white',
     borderRadius:20,
     overflow:'hidden',
   },
   text:{
     color:'black',
     fontSize:14,
   }

});
