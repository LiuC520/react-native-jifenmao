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
  }
  _initdata(){
    const value = AsyncStorage.getItem('isFirstLoading')
                              .then((data)=>{
                                if(!data){
                                  AsyncStorage.setItem('isFirstLoading','1')
                                }
                                this.setState({ isFirst:data })
                              })
                              .catch((e)=>{ console.log(e) });
   
    
  }
  componentDidMount(){
    this._initdata()
    
  }
  render() {
    if(this.state.isFirst){
      return (
          <Navigator
        initialRoute={{
          name:'welcome',
          component:Welcome
        }}
        configureScene={
          (route)=>{
          return Navigator.SceneConfigs.PushFromRight;
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
    }else{
      return (
        <View></View>
      );
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
   }

});
