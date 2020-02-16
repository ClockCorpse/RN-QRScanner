/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ToastAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RNCamera } from 'react-native-camera';

barcodeRecognized = ({ barcodes }) => {
  barcodes.forEach(barcode => ToastAndroid.show(barcode.data,ToastAndroid.SHORT))
};

export default function App() {
  return (
    <View style={styles.container}>
      <RNCamera
         ref={ref => {
           this.camera = ref;
         }}
         style={{
           flex: 1,
           width: '100%',
         }}
         onGoogleVisionBarcodesDetected={this.barcodeRecognized}
       >
       </RNCamera>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
