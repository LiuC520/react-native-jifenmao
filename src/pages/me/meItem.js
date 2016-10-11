import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';



export default class MeItem extends Component {
  static propTypes = {
    onPress: React.PropTypes.func,
  }
  constructor(props){
    super(props);
    this.state={
      lefttitle:this.props.lefttitle,
      leftnumber:this.props.leftnumber,
    }
  }
  render(){
    return(
        <View style={styles.view}>
          <View style={styles.left}>
            <Text style={styles.title}>{this.state.lefttitle}</Text>
            <Text style={styles.title}>{this.state.leftnumber}</Text>
          </View>

          <Icon
            name='ios-arrow-dropright' // 图标
            size={20}
            color='#7c7c7c'
            />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  view:{
    height:height/11,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    borderBottomWidth:0.2,
    borderBottomColor:'#f4f4f4',
    backgroundColor:'white'
  },
  left:{
    flexDirection:'row'
  },
  title:{
    color:'#7c7c7c'
  }
})
