/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FloatingButton from './FloatingButton';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./map.jpeg')}
        resizeMode="cover"
        style={styles.image}
      />
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 900,
    opacity: 0.5,
  },
});

export default App;
