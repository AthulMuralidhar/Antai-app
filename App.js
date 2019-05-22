// More about navigation in react here:
// https://reactnavigation.org/docs/en/hello-react-navigation.html

import React from 'react';
// import { StyleSheet, 
//   Text, 
//   View,
//   Image,
//   TouchableOpacity,
//  } from 'react-native';
//  import { createStackNavigator, createAppContainer } from "react-navigation";
 import  AppContainer  from './navigation/AppContainer'

//  class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={require('./assets/temp.png')}
//           style={styles.imgStyle}
//         />
//         <Text style={styles.titleText}>The Antai App</Text>
//         <TouchableOpacity style={styles.btnStyle} onPress={()=>{alert('pressed!')}}>
//           <Text>Play</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home:HomeScreen,
// });

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}
