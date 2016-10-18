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
  Modal,
  TouchableHighlight
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import TopTitleCell from '../common/topTitleCell';

export default class ShowBarcode extends Component {
    constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
    };
  }
  render() {
    let modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
    };
    let innerContainerTransparentStyle = this.state.transparent
      ? { backgroundColor: '#fff', padding: 20 }
      : null;
    return (
      <View>
              <Modal
                animationType={"none"}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
                >

                  <TouchableHighlight onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }} style={[styles.container, modalBackgroundStyle]}>
                    <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                    <Image source={require('../../images/usercode.png')} style={styles.bigcodeimage}/>
                     <Text>扫一扫，关注微信哦！</Text>
                    </View>
                  </TouchableHighlight>


              </Modal>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(true)
              }}>
              <Image source={require('../../images/usercodesmall.png')} style={styles.codeimage}/>
              </TouchableHighlight>

      </View>
    );
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    width:width/3*2
  },
  bigcodeimage:{
    width:width/2,
    height:width/2,
    marginBottom:2,
    resizeMode:'contain'
  },
  codeimage:{
    width:20,
    height:20,
    marginTop:2,
    backgroundColor:'transparent'
  }

});
