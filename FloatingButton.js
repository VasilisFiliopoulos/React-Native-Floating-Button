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
import Entypo from 'react-native-vector-icons/Entypo';

const FloatingButton: () => React$Node = (props) => {
  const animation = new Animated.Value(0);

  let open = 0;

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: false,
    }).start();

    open = !open;
  };

  const pinStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };

  const thumbStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const heartStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200],
        }),
      },
    ],
  };

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, heartStyle, opacity]}>
          <AntDesign name="heart" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, thumbStyle, opacity]}>
          <Entypo name="thumbs-up" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
          <Entypo name="location-pin" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <AntDesign name="plus" size={24} color="#FFF" />
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
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: 'red',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
    elevation: 7,
    backgroundColor: 'red',
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  secondary: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFF',
  },
});

export default FloatingButton;
