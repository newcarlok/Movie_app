import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/screens/';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="Tab" component={TabNavigator} />
        <stack.Screen name="Suck" component={MovieDetailsScreen} />
        <stack.Screen name="seatBooking" component={SeatBookingScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;