package com.first;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.theweflex.react.WeChatPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.eguma.vibration.Vibration;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new BaiduMapPackage(getApplicationContext()),
            new WeChatPackage(),
            new ReactVideoPackage(),
            new Vibration(),
            new VectorIconsPackage(),
            new RCTCameraPackage(),
            new BarcodeScannerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
