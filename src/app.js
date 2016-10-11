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
  Dimensions,
  Image,
  Navigator,
  AsyncStorage,
} from 'react-native';
const {width,height}=Dimensions.get('window');
import Swiper from 'react-native-swiper';
import FirstLoad from './firstLoad';
import Welcome from './welcome';

var isFirstLoading = '';

export default class App extends Component {

    constructor(props) {
    super(props);
    this.state = {
      isFirst:''
    };
  }
  componentWillMount(){
    this._initdata().done()
  }
  async _initdata(){
    const value = await AsyncStorage.getItem('isFirstLoading');
    this.setState({
        isFirst:value
      })
  }
  componentDidMount(){

  }
  render() {
    return (
      <Navigator
      initialRoute={{name:this.state.isFirst === null ? 'firstLoad' : 'welcome',component:this.state.isFirst === null ? FirstLoad : Welcome}}
      configureScene={
        (route)=>{
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }
      }
      renderScene={
            (route, navigator) =>
             {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
        }
      }/>

    );
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
   }

});
