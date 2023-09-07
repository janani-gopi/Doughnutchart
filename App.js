import React from 'react';
import { View } from 'react-native';
import ToggleButtons from "./Components/ToggleButtons"
import Chart from './Components/Chart';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"white" }}>
      <ToggleButtons/>
      <Chart/>
    </View>
  );
};

export default App;
