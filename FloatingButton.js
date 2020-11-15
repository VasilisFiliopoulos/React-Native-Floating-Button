/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Entypo} from 'react-native-vector-icons/Entypo';

const FloatingButton: () => React$Node = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View>
          <MaterialCommunityIcons name="plus" size={24} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
});

export default FloatingButton;
