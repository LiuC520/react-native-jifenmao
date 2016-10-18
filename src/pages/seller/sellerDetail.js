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
  WebView,
  Platform
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import TopTitleCell from '../common/topTitleCell';
import BaiduMap from './baiduMap';

export default class SellerDetail extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='商家详情' goBack={this.toback} leftTitle='返回' />

        <View style={{justifyContent:'center',alignItems:'center',marginTop:Platform.OS == 'ios' ? 55:35,}}>
          <Image source={{uri:this.props.rowData.thumb}} style={styles.bigImage}/>
        </View>
        <View style={styles.fanli}>
          <Text style={{color:'#eeeeee'}}>{this.props.rowData.title}</Text>
          <View style={{flexDirection:'row'}}>
            <View style={styles.discount}>
              <Text style={{color:'white'}}>折</Text>
            </View>
            <Text style={{color:'#eeeeee'}}>返利{this.props.rowData.fanli}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.toBaiduMap}>
          <View style={styles.map}>
            <Text  style={{width:width/3*2}}>富力海珠城3901</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Icon
                name='ios-locate-outline' // 图标
                size={15}
                color='#bbbbbb'
                 style={{marginRight:5}}/>
              <Text numberOfLines={2}>{this.props.rowData.distance}m</Text>

              <Icon
                name='ios-arrow-forward' // 图标
                size={20}
                color='#bbbbbb'
                 style={{marginLeft:5}}/>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor:'white',height:height/3*2}}>
          <Text style={{fontSize:16,fontWeight:'500',marginLeft:5,padding:5}}>商户简介</Text>
          <Text style={{color:'#bbbbbb',fontSize:14,marginLeft:20,marginTop:20}}>商户未填写</Text>
        </View>

      </View>
    );
  }
  toBaiduMap=()=>{
      this.props.navigator.push({
        name:'baiduMap',
        component:BaiduMap,
      })
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
    backgroundColor:'#bbbbbb',
   },
   bigImage:{
     width:width-60,
     height:height/3,
     marginTop:20,

   },
   fanli:{
     backgroundColor:'#7c7c7c',
     justifyContent:'space-around',
     alignItems:'center',
     height:30,
     flexDirection:'row'
   },
   discount:{
     backgroundColor:'#ec6638',
     width:20,
     height:20,
     borderRadius:10,
     overflow:'hidden',
     justifyContent:'center',
     alignItems:'center',
     marginTop:2
   },
   map:{
     height:50,
     backgroundColor:'white',
     justifyContent:'space-around',
     alignItems:'center',
     marginBottom:10,
     flexDirection:'row',
     paddingLeft:10,
     paddingRight:10
   }


});
