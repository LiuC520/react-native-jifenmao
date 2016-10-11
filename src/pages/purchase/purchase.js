import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator
} from 'react-native';
const {width,height}= Dimensions.get('window');
import Barcode from './barcode';
class PurchaseMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'无名氏',
      barcodeResult:''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require('../../images/purchasetop.png')} style={styles.topimage}/>
          <Text style={{fontSize:14,color:'black'}}>{this.state.username}</Text>
        </View>
        <TouchableOpacity onPress={this.toBarCodePage} style={styles.centerbg}>
          <View >
          <Image source={require('../../images/purchasecenter.png')} style={styles.center}/>
          <Text style={{fontSize:12,color:'white'}}>付款扫描</Text>
          </View>
        </TouchableOpacity>
        <Text>这里是二维的结果：</Text>
        <Text>{this.state.barcodeResult}</Text>
      </View>
    );
  }
  toBarCodePage=()=>{
    const {navigator}=this.props;
    const self = this;
    if (navigator) {
      navigator.push({
        name:'barcode',
        component:Barcode,
        params:{
          //从详情页获取扫描的结果url
          getUrl:(url)=>{
            self.setState({
              barcodeResult:url
            })
          }
        }

      })
    }
  }
}
export default class Purchase extends Component{
  render(){
    return(
      <Navigator
      initialRoute={{name:'purchase',component:PurchaseMain}}
      renderScene={
            (route, navigator) =>
             {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
        }
      }/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  top:{
    position:'absolute',
    marginTop:-20,
    top:0,
    left:0,
    justifyContent:'center',
    alignItems:'center',
  },
  topimage:{
    resizeMode:'contain',
    height:height/3,
    width:width,
    marginBottom:10
  },
  centerbg:{
    position:'absolute',
    bottom:(width-150)/2,
    left:(width-150)/2,
    backgroundColor:'#ec6638',
    width:150,
    height:150,
    borderRadius:75,
    justifyContent:'center',
    alignItems:'center',

  },
  center:{
    width:60,
    height:60,
    marginBottom:10
  }
});
