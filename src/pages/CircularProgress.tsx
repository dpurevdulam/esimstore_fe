import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

renderThirdLayer = percent => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({percent, balance}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      <Text style={styles.txt1}>Үлдэгдэл дата</Text>
      <Text style={styles.txt2}>{balance}</Text>
      {renderThirdLayer(percent)}
    </View>
  );
};

const styles = StyleSheet.create({
  txt1: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: '#A0A1AC',
  },
  txt2: {
    fontFamily: 'BreezeSans',
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 48,
    color: '#3B1F61',
  },
  container: {
    width: 150,
    height: 150,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: '#c3e3da',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 150,
    height: 150,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#62c2a7',
    borderTopColor: '#62c2a7',
    transform: [{rotateZ: '-135deg'}],
  },
  secondProgressLayer: {
    width: 150,
    height: 150,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#62c2a7',
    borderTopColor: '#62c2a7',
    transform: [{rotateZ: '45deg'}],
  },
  offsetLayer: {
    width: 150,
    height: 150,
    position: 'absolute',
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#c3e3da',
    borderTopColor: '#c3e3da',
    transform: [{rotateZ: '-135deg'}],
  },
});

export default CircularProgress;
