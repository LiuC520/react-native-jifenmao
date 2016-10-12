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
  TouchableOpacity,
  Navigator
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import SellerDetail from './sellerDetail';

export default class ListviewData extends Component {
    constructor(props) {
    super(props);
    this.state = {
        rowData:this.props.rowData,
        // onPress:this.props.onPress
    };
  }
//   render() {
//     return (
//       <Navigator
//       initialRoute={{name: 'item',component:Item}}
//
//       renderScene={
//             (route, navigator) =>
//              {
//             let Component = route.component;
//             return <Component {...route.params} navigator={navigator} rowData={this.state.rowData}/>
//         }
//       }/>
//
//     );
//   }
// }
  // class Item extends Component{
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     rowData:this.props.rowData
  //   };
  // }
  // componentDidMount(){
  //   console.log(this.state.rowData)
  //
  // }
    render() {
      return (
        <TouchableOpacity onPress={()=>{this.props.gotoSellerDetail(this.props.rowData)}}>
          <View style={styles.wrapper}>
            <Image source={{uri:this.state.rowData.thumb}} style={{width:70,height:70}}/>
            <View style={styles.rightView}>
              <Text style={styles.titleText}>{this.state.rowData.title}</Text>
              <View style={styles.rightBottom}>
                <Text style={{marginRight:30,color:'#bbbbbb'}}>返利</Text>
                <Text style={{marginRight:20}}>{this.state.rowData.fanli}</Text>
                <View style={styles.discount}>
                  <Text style={{color:'white'}}>折</Text>
                </View>
                <Icon
                  name='ios-locate-outline' // 图标
                  size={20}
                  color='#7c7c7c'
                   style={{marginRight:5}}/>
                <Text>{this.state.rowData.distance}m</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>


      );
    }
  }



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    padding:10,
    height:height/6,
    flexDirection:'row',
    borderBottomColor:'#cccccc',
    borderBottomWidth:0.5
   },
   text:{
     color:'green',
     fontSize:14,
   },
   rightView:{
     marginLeft:10
   },
   titleText:{
     fontSize:18,
     alignSelf:'flex-start',
   },
   rightBottom:{
     marginTop:28,
     flexDirection:'row',
     alignSelf:'flex-end',
     justifyContent:'space-around'
    //  alignContent:'space-between'
   },
   discount:{
     backgroundColor:'#ec6638',
     width:20,
     height:20,
     borderRadius:10,
     overflow:'hidden',
     justifyContent:'center',
     alignItems:'center',
     marginRight:width/4
   }

});
