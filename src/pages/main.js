/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import LcTabBar from './lcTabBar';
import Purchase from './purchase/purchase';
import Shop from './shop/shop';
import Seller from './seller/seller';
import Me from './me/me';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: ['付款', '商城', '商家',  '我的'],
      tabIconNames: ['ios-barcode', 'md-home', 'ios-appstore','md-contact'],
    };
  }
  componentWillMount(){
    const {navigator}= this.props;
    if (navigator) {
      navigator.pop()
    }
  }
  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    return (
      <ScrollableTabView
        renderTabBar={() => <LcTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
        tabBarPosition='bottom'
        locked={true}
        scrollWithoutAnimation={false}
        initialPage={0}
        prerenderingSiblingsNumber={1}
        >
        <Purchase tabLabel='purchase'/>
        <Shop tabLabel='shop'/>
        <Seller tabLabel='seller'/>
        <Me tabLabel='me'/>
      </ScrollableTabView>
    );
  }
}
