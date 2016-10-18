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
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
  WebView
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';


export default class TopTitleCell extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title:'',
      color:''
    };
  }
  render() {
    let color1 = this.props.color1 ? '#cccccc':'white';
    return (
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this.props.goBack}  style={styles.leftback}>

            <Icon
              name='ios-arrow-back' // 图标
              size={25}
              color='#cccccc'/>
              <Text style={styles.back}>{this.props.leftTitle}</Text>

          </TouchableOpacity>


          <Text style={{color:'#ec6638',fontSize:16,marginTop:5}}>{this.props.title}</Text>

          <TouchableOpacity onPress={this.props.goForward}  style={styles.rightForward}>

          <Text style={styles.right}>{this.props.rightTitle}</Text>
            <Icon
              name= 'ios-arrow-forward' // 图标
              size={25}
              color={color1}/>

          </TouchableOpacity>

        </View>

    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:'white',
    height:35,
    position:'absolute',
    left:0,
    right:0,
    top:Platform.OS == 'ios' ? 20:0
   },
   leftback:{
     position:'absolute',
     top:6,
     left:5,
     flexDirection:'row',
     alignItems:'center',
   },
   rightForward:{
     position:'absolute',
     top:6,
     right:5,
     flexDirection:'row',
     alignItems:'center',
   },
   back:{
     marginLeft:10,
     fontSize:14,
     color:'#cccccc',
      marginBottom:2
   },
   right:{
     marginRight:10,
     fontSize:14,
     color:'#cccccc',
      marginBottom:2
   }


});
