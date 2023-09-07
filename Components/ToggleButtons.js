import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const TAB_WIDTH = 130;
const TABS = ['Home', 'Search', 'Profile'];

export default function ToggleButtons() {
  const offset = useSharedValue(-TAB_WIDTH);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const handlePress = tab => {
    const newOffset = (() => {
      switch (tab) {
        case 'Home':
          return -TAB_WIDTH;
        case 'Search':
          return 0;
        case 'Profile':
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    offset.value = withTiming(newOffset);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedBorder, animatedStyles]} />
      <View style={styles.tabs}>
        {TABS.map((tab, i) => (
          <Pressable
            key={tab}
            style={i !== TABS.length - 1 ? [styles.tab] : styles.tab}
            onPress={() => handlePress(tab)}>
            <Text style={[styles.tabLabel]}>{tab}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    borderWidth:0,
    marginBottom:25,
    elevation:3,
    width:"98%"
  },
  tabs: {
    flexDirection: 'row',
    elevation: 5,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: TAB_WIDTH,
  },
  tabLabel: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  animatedBorder: {
    height: 50,
    position: 'absolute',
    width: 100,
    backgroundColor: '#ffbf00',
    borderRadius: 15,
  },
});
