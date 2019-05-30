// import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import  HomeScreen  from '../screens/HomeScreen'
import  OverviewScreen  from '../screens/OverviewScreen'
import GoogleScreen from '../screens/GoogleScreen'

const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  Overview:OverviewScreen,
  Google:GoogleScreen,
},
{
  initialRouteName:"Home",
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;