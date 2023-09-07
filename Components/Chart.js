import {View} from 'react-native';
import React, {useState} from 'react';
import DoughnutChart from './DoughnutChart';
import Chartbutton from '../Chartbutton';


const Chart = () => {
  const [selectedTab, setSelectedTab] = useState('Critical');

  return (
    <View style={{height: 400, width: '96%',borderWidth:0,elevation:5, padding:20}}>
      <Chartbutton setSelectedTab={setSelectedTab} />
      <DoughnutChart selectedTab={selectedTab} />
    </View>
  );
};

export default Chart;

