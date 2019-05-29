import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import  HomeScreen  from '../screens/HomeScreen'
import  OverviewScreen  from '../screens/OverviewScreen'

const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  Overview:OverviewScreen,
},
{
  initialRouteName:"Home",
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;