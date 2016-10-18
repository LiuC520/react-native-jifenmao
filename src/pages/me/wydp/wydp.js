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
  TextInput,
  Platform
} from 'react-native';

const {width,height}=Dimensions.get('window');
import TopTitleCell from '../../common/topTitleCell';

export default class Wydp extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <TopTitleCell title='添加店铺' goBack={this.toback} leftTitle='返回'/>
        <View style={styles.container}>
          <TextInput
              placeholder="输入新增商家名称"
              placeholderTextColor="#eeeeee"
              autoFocus={true}
              editable={true}
              style={styles.textinput}/>
          <TouchableOpacity onPress={this.wxShare} style={styles.wxShare}>
            <Text style={{color:'white',fontSize:16}}>确认</Text>
          </TouchableOpacity>
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
  wxShare=()=>{

  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',

   },
   container:{
     marginTop:40,
     width:width-60,
     justifyContent:'center',
     marginTop:Platform.OS == 'ios' ? 105:35,

   },
   textinput:{
     width:width-60,
   },
   wxShare:{
     backgroundColor:'#ec6638',
     justifyContent:'center',
     alignItems:'center',
     height:40,
      width:width-60,
     marginTop:40,
     borderRadius:10,
    //  overflow:'hidden',

   }



});
