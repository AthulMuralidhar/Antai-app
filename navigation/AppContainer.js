import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import  HomeScreen  from '../screens/HomeScreen'

const AppNavigator = createStackNavigator({
  Home:HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;