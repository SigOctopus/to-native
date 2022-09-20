
import React, {Component} from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <SafeAreaView style={ styles.AndroidSafeArea }>
      <WebView  
        source={{ uri: 'https://to-booking-vue---0061.web.app' }}
      />
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
