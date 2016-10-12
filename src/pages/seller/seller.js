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
  ListView,
  Platform,
  ActivityIndicator,
  RefreshControl,
  Navigator
} from 'react-native';

const {width,height}=Dimensions.get('window');
import Mock from 'mockjs';
import ListviewData from './listviewItem';
import SellerDetail from './sellerDetail';


let cachedResults={
  nextPage:1,
  items:[],
  total:0
}

export default class Seller extends Component {
  constructor(props) {
  super(props);
  this.state = {};
}
  render() {
    return (
      <Navigator
      initialRoute={{name: 'sellermain',component:SellerMain}}
      renderScene={
            (route, navigator) =>
             {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
        }
      }/>

    );
  }
}

class SellerMain extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      total:0,
      isLoadingTail:false,//是否下滑到底部了
      isRefreshing:false,
    };
  }
  componentDidMount(){
    this._fetchData(1)//从服务器获取的真实数据
  }
  _fetchData(page){
    if (page != 0) {
      this.setState({
        isLoadingTail:true
      })
    }else{
      this.setState({
        isRefreshing:true
      })
    }

    let url='http://rap.taobao.org/mockjs/8416/api/seller?accessToken=1234';
    fetch(url).then(
      (response)=>{
        return response.json()
        console.log(response.json())
      }
    ).then(
      (response)=>{
      let result = JSON.stringify(response);
      let result1 = Mock.mock(response);
      if (result1.success) {
        let items = cachedResults.items.slice();
        if (page != 0) {
          items = items.concat(result1.data);
          cachedResults.nextPage +=1
        }else{
          items = result1.data.concat(items)
        }

        cachedResults.items =items;
        cachedResults.total = result1.total;

        console.log('总个数据的长度是：'+cachedResults.total);
        console.log('当前的listview数据的总长度是：'+cachedResults.items.length);

        setTimeout(()=>{
          if (page != 0) {
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(cachedResults.items),
              total:cachedResults.total,
              isLoadingTail:false
            })
          }else{
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(cachedResults.items),
              total:cachedResults.total,
              isRefreshing:false
            })
          }

        },2000);
      }
    })
    .catch(
      (err)=>{
        if (page !=0 ) {
          this.setState({
            isLoadingTail:false
          })
        }else{
          this.setState({
            isRefreshing:false
          })
        }

        console.log(err)
      }
      )
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={styles.text}>附近商家</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalSeller}>商家总数：{this.state.total}</Text>
        </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={
          (rowData)=>{
            return <ListviewData rowData={rowData} gotoSellerDetail={(rowData)=>this.gotoSellerDetail(rowData)}/>
          }
        }
        enableEmptySections={true}
        automaticallyAdjustContentInsets={false}
        onEndReached={this._fetchMoreData}
        onEndReachedThreshold={20}
        renderFooter={this._renderFooter}
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
            />
        }
        style={styles.listview}
        />
      </View>
    );
  }
  gotoSellerDetail(rowData){
    // const {navigator}=this.props;
    console.log(rowData);
      this.props.navigator.push({
        name:'sellerDetail',
        component:SellerDetail,
        params:{
          rowData:rowData
        }
      })
      // console.log(rowData);

  }
  //下拉刷新的回调   从服务器获取最新的数据
  _onRefresh=()=>{

      if(!this._hasMore() || this.state.isRefreshing) {
          return
      }

      //去服务器获取数据l

      //page 相当于数据的页码

      this._fetchData(0)

  }
  //加载更多的数据 上拉加载更多  滑动分页
  _fetchMoreData=()=>{

      if(!this._hasMore() || this.state.isLoadingTail){
          return
      }

      //去服务器请求加载更多的数据了

      let page=  cachedResults.nextPage;

      this._fetchData(page)

  }
  _renderFooter=()=>{
    if (!this._hasMore() && cachedResults.total!=0) {
      return(
        <View style={styles.loadingMore}>
        <Text style={styles.loadingText}>没有更多啦...</Text>
        </View>
      )
    }
    if (!this.state.isLoadingTail) {
      return <View style={styles.loadingMore}/>
    }
    return (
      <ActivityIndicator
      style={styles.loadingMore}
      />
    )
  }
  _hasMore=()=>{
    return cachedResults.items.length !== cachedResults.total
  }

}

const styles = StyleSheet.create({
  wrapper: {
    marginTop:Platform.OS == 'ios' ? 20:0,
    flex: 1,
   },
   title:{
     backgroundColor:'#ec6638',
     width:width,
     height:30,
     justifyContent:'center',
     alignItems:'center'
   },
   text:{
     color:'white',
     fontSize:16,
   },
   total:{
     backgroundColor:'#eeeeee',
     height:20,
     paddingLeft:5
   },
   totalSeller:{
     color:'#bbbbbb'
   },
   listView: {
       paddingTop: 20,
       backgroundColor: 'white',
   },
   loadingMore:{

       marginVertical:20
   },


   loadingText:{
       fontSize:18,
       color:'red',
       textAlign:'center'
   },

});
