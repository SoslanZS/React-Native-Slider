import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Slider from './src/components/Slider';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
