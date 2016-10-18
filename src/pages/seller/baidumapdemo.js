/**
 * @author lovebing
 */

import React, {
  Component,
  PropTypes
} from 'react';

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform
} from 'react-native';

import Dimensions from 'Dimensions';
const {width,height}=Dimensions.get('window');

export default class BaiduMapDemo extends Component {

  constructor() {
    super();

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
        longitude: 113.2739130345,
        latitude: 23.0972512559,
        title: "Window of the world"
      },{
        longitude: 113.995516,
        latitude: 22.537642,
        title: ""
      }]
    };
  }
  render() {
    return (
        <MapView
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          style={styles.map}
          onMapClick={(e) => {
          }}
        >
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height-125,
    marginTop:Platform.OS == 'ios' ? 55:35
  }
});
