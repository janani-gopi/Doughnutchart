import React from 'react';
import {View} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Text, StyleSheet} from 'react-native';

const DoughnutChart = ({selectedTab}) => {
  const data = [
    {
      key: 1,
      value: 50,
      name: 'Critical',
      svg: {fill: '#016A70'},
      arc: {cornerRadius: 10},
    },
    {
      key: 2,
      value: 30,
      svg: {fill: '#D2DE32'},
      arc: {cornerRadius: 10},
    },
    {
      key: 3,
      value: 20,
      svg: {fill: '#A2C579'},
      arc: {cornerRadius: 10},
    },
  ];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        height: 400,
        marginTop: -50,
        
      }}>
      <PieChart
        style={{height: 200, width: 200}}
        data={data}
        innerRadius={'85%'} // Adjust this to control the thickness of the doughnut
        outerRadius={'100%'}
        gap={0}
        valueAccessor={({item}) => item.value}></PieChart>
      <View style={styles.label}>
        <Text style={[styles.labeltext]}>{selectedTab}</Text>
        <Text style={[styles.labelnumber]}>122</Text>
      </View>
    </View>
  );
};

export default DoughnutChart;

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    color: 'red',
    borderRadius: 100,
    width: 130,
    height: 130,
    backgroundColor: 'white',
    elevation: 10,
    top: 135,
  },
  labeltext: {
    color: '#016A70',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 30,
  },
  labelnumber: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
});
