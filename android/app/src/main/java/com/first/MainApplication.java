package com.first;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.brentvatne.react.ReactVideoPackage;
import com.eguma.vibration.Vibration;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
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
            new ReactVideoPackage(),
            new Vibration(),
            new RCTCameraPackage(),
            new BarcodeScannerPackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
