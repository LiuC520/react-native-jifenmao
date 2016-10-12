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
  Image,
  ScrollView,
  WebView
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import TopTitleCell from '../common/topTitleCell';
import ZcfbCommon from './zcfbCommon';
import SZcfbCommon from './sZcfbCommon';
// import VideoPlayer from './video';
import VideoWeb from './videoWeb';

export default class Zcfb extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='商家详情' goBack={this.toback} leftTitle='返回'/>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding:10}}>
          <TouchableOpacity onPress={this.playUrl}>
            <Image source={require('../../images/jfmvideo.png')} style={{width:width,height:height/4,marginRight:15}} resizeMode="contain"/>
            <View  style={styles.playTitle}>
              <Text style={{fontSize:16}}>点击播放》</Text>
              <Text style={{color:'blue',fontSize:16}}>积分猫消费养老动画片</Text>
            </View>

          </TouchableOpacity>
          <ZcfbCommon title='关于积分猫平台的介绍'/>
            <SZcfbCommon stitle='1、积分猫平台是积分宝控股集团旗下品牌，是一个线上线下消费积分、积分购物及消费养老的大平台；'/>
            <SZcfbCommon stitle='2、新会员加入，平台赠送50元零钱，每次消费时，零钱都可以抵现金使用；'/>
            <SZcfbCommon stitle='3、线下商户消费积分一般为2~20%，淘宝天猫京东购物积分一般为2~10%；'/>
            <SZcfbCommon stitle='4、积分宝商城可以在全部实价的基础上用积分抵掉一半的购物款，做到半价购物。'/>
            <SZcfbCommon stitle='5、会员消费积分可以转为提现积分，提现积分可以1:1提取现金，也可以由平台转为会员的养老金；'/>
          <ZcfbCommon title='关于各种奖励制度的说明'/>
            <SZcfbCommon stitle='1、直推一个新会员，奖励5元零钱；'/>
            <SZcfbCommon stitle='2、新会员消费，奖励该次消费获得积分的10%，奖励给上一级推荐人，长期有奖；'/>
            <SZcfbCommon stitle='3、推荐商家加入，奖励商家所有返出积分的10%；'/>
            <SZcfbCommon stitle='4、会员充值，奖励充值金额的70%的积分，奖励给上一级、上二级、上三级推荐人，分别为50%、10%、10%，长期有奖；'/>
            <SZcfbCommon stitle='5、所有奖励记入“提现积分”，提现积分可以提取现金，1积分=1元；'/>
          <ZcfbCommon title='特别说明'/>
            <SZcfbCommon stitle='积分猫平台部分板块尚在测试当中，还没有全部上线，因此有些功能暂未开通，敬请谅解！'/>


        </ScrollView>


      </View>
    );
  }
  toback=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.pop()
    }
  }
  playUrl=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.push({
        // name:'VideoPlayer',
        // component:VideoPlayer
        name:'VideoWeb',
        component:VideoWeb
      })
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'#eeeeee'
   },
   backgroundVideo: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    height:height/3-20,
    width:width
  },
   playTitle:{
     marginTop:50,
     marginBottom:50,
     flexDirection:'row',

   },



});
