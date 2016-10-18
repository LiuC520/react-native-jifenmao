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
  Platform,
  ScrollView,
  PixelRatio,
  Linking
} from 'react-native';

const {width,height}=Dimensions.get('window');
import TopTitleCell from '../../common/topTitleCell';
import MeItem from '../meItem';


export default class More extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
//   componentDidMount() {
//   var url = Linking.getInitialURL().then((url) => {
//     if (url) {
//       console.log('Initial url is: ' + url);
//     }
//   }).catch(err => console.error('An error occurred', err));
// }

  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='更多' goBack={this.toback} leftTitle='返回'/>
          <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} >

           <TouchableOpacity onPress={this.goTolq}>
             <MeItem lefttitle='关于积分猫'/>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.goTolq}>
             <MeItem lefttitle='关于养老保险'/>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.goTolq}>
             <MeItem lefttitle='用户协议'/>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.goTolq}>
             <MeItem lefttitle='使用说明'/>
           </TouchableOpacity>

           <TouchableOpacity onPress={this.goTolq}>
             <MeItem lefttitle='重置密码'/>
           </TouchableOpacity>

              <View style={{height:10}}></View>

           <Touchable url={'tel:18585025253'} title={'电话热线：18585025253'} />
           <Touchable url={'mailto:674668211@qq.com'} title={'发送邮件：674668211@qq.com'} />
           <Touchable url={'http://www.baidu.com'} title={'打开http网页'} />
           <Touchable url={'https://www.baidu.com'} title={'打开https网页'} />
           <Touchable url={'smsto:18585025253'} title={'发送短信'} />

           <TouchableOpacity style={styles.quit}>
             <Text style={{color:'red'}}>退出</Text>
           </TouchableOpacity>

             <View style={{height:Platform.OS == 'ios' ? 0:30,}}></View>

          </ScrollView>



      </View>
    );
  }
  goTolq=()=>{alert('正在部署中...')}
  toback=()=>{
    const {navigator}=this.props;
    if (navigator) {
      navigator.pop()
    }
  }


}
class Touchable extends Component{
  constructor(props){
    super(props);
  }
  protoTypes:{
    url:React.ProtoTypes.string
  }
  render (){
    return(
      <TouchableOpacity onPress={()=>{
        Linking.canOpenURL(this.props.url).then(supported => {
          if (!supported) {
            console.log('Can\'t handle url: ' + this.props.url);
          } else {
            return Linking.openURL(this.props.url);
          }
        }).catch(err => console.error('An error occurred', err));
        }}>
        <MeItem lefttitle={this.props.title}/>
      </TouchableOpacity>
    )
  }


}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'white',
    width:width
   },
   container:{
     margin:5,
     width:width,
     justifyContent:'center',
    //  alignItems:'center',
     marginTop:Platform.OS == 'ios' ? 65:35,
     marginBottom:Platform.OS == 'ios' ? 0:60,
     backgroundColor:'#eeeeee'

   },
   quit:{
     borderColor:'red',
     marginTop:30,
     marginLeft:10,
     marginRight:10,
     marginBottom:20,
     borderWidth:0.5,
     height:30,
     justifyContent:'center',
     alignItems:'center'
   }



});
