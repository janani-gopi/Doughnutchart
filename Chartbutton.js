import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const TAB_WIDTH = 110;
const TABS = ['Critical', 'Alert', 'Maintenance'];

export default function Chartbutton({setSelectedTab}) {
  const offset = useSharedValue(-1.03 * TAB_WIDTH);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  const handlePress = tab => {
    const newOffset = (() => {
      switch (tab) {
        case 'Critical':
          setSelectedTab(tab);
          return -1.03 * TAB_WIDTH;
        case 'Alert':
          setSelectedTab(tab);
          return 0;
        case 'Maintenance':
          setSelectedTab(tab);
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    offset.value = withTiming(newOffset);
  };
  return (
    <View style={styles.chartbuttoncontainer}>
      <Animated.View style={[styles.animatedFill, animatedStyles]} />
      {TABS.map((tab, i) => (
        <Pressable
          style={styles.button}
          onPress={() => {
            handlePress(tab);
          }}>
          <Text style={[styles.buttontext]}>{tab}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chartbuttoncontainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  button: {
    width: 110,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ffbf00',
    height: 50,
  },
  buttontext: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  animatedFill: {
    height: 50,
    position: 'absolute',
    width: 110,
    backgroundColor: '#ffbf00',
    borderRadius: 15,
  },
});
