import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  Button,
 } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/temp.png')}
          style={styles.imgStyle}
        />
        <Text style={styles.titleText}>The Antai App</Text>
        <TouchableOpacity style={styles.btnStyle} onPress={()=>{alert('pressed!')}}>
          <Text>Play</Text>
        </TouchableOpacity>
        <Button
          title="Go to Overview"
          onPress={()=>{this.props.navigation.navigate('Overview')}}
        />
      </View>
    );
  }
}

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  imgStyle: {
    width:200,
    height:200,
  },
  btnStyle:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
