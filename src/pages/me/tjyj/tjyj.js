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
  Platform
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import TopTitleCell from '../../common/topTitleCell';
import ZcfbCommon from '../zcfbCommon';
import SZcfbCommon from '../sZcfbCommon';
import ShareWithWeixin from './ShareWithWeixin';
export default class Tjyj extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='推荐' goBack={this.toback} leftTitle='返回'/>
        <View style={{marginTop:40,marginTop:Platform.OS == 'ios' ? 55:35,}}>
          <ZcfbCommon title='推荐有奖，欢迎推荐'/>
            <SZcfbCommon stitle='1、推荐会员注册，奖励零钱5元；'/>
            <SZcfbCommon stitle='2、推荐会员消费，奖励所获得积分的10%；'/>
            <SZcfbCommon stitle='3、推荐商户，奖励商户返出积分的10%；'/>
            <SZcfbCommon stitle='4、推荐会员充值，奖励充值金额的70%，奖励三级，比例分别为50%、10%、10%。'/>
          <ZcfbCommon title='点击下面分享'/>
        </View>

        <View style={styles.wxShare}>
          <ShareWithWeixin />

        </View>


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
    backgroundColor:'white'
   },
   wxShare:{
     backgroundColor:'#ec6638',
     position:'absolute',
     bottom:0,
     left:0,
     right:0,
     justifyContent:'center',
     alignItems:'center',
     height:40
   }



});
