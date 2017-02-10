
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
 import TopTitleCell from '../common/topTitleCell';

let DEFAULT_URL='http://cmy.shctp.com/index.html';
var WEBVIEW_REF = 'webview';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

 export default class VideoWeb extends Component {
     constructor(props) {
     super(props);
     this.state = {
        url: DEFAULT_URL,
        status: 'No Page Loaded',
        backButtonEnabled: false,
        forwardButtonEnabled: false,
        loading: true,
        scalesPageToFit: true,
     };
   }
   render() {
     return (
       <View style={[styles.container]}>
        <TopTitleCell leftTitle='返回' rightTitle='前进' goBack={this.goBack} goForward={this.goForward} color1={true}/>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
          </View>
     );
   }

  goBack = () => {
    this.refs[WEBVIEW_REF].goBack();
  };

  goForward = () => {
    this.refs[WEBVIEW_REF].goForward();
  };

  reload = () => {
    this.refs[WEBVIEW_REF].reload();
  };

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };
 }

const styles = StyleSheet.create({
  container: {
  flex: 1,
     backgroundColor: 'white',
   },
   addressBarRow: {
     flexDirection: 'row',
     padding: 8,
   },
   webView: {
     backgroundColor: '#bbbbbb',
     //height: 350,
     flex:1,
     marginTop:Platform.OS == 'ios' ? 55:35,

   },
   navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_WASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },

});
