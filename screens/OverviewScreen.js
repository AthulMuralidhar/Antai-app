import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class OverviewScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Overview screen!</Text>
                
                <TouchableOpacity 
                 style={styles.btnGoogleStyle}
                 onPress={()=>{this.props.navigation.navigate('Google')}}>
                    <Text>Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnFacebookStyle}>
                    <Text>Facebook</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnTwitterStyle}>
                    <Text>Twitter</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnFlipboardStyle}>
                    <Text>Flipboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSpotifyStyle}>
                    <Text>Spotify</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSnapchatStyle}>
                    <Text>Snapchat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOthersStyle}>
                    <Text>Others</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

// styling
const styles = StyleSheet.create({
    btnGoogleStyle:{
        alignItems: 'center',
        backgroundColor: '#5191fd',
        padding: 10,
      },
      btnFacebookStyle:{
        alignItems: 'center',
        backgroundColor: '#3b5998',
        padding: 10,
      },
      btnTwitterStyle:{
        alignItems: 'center',
        backgroundColor: '#1dcaff',
        padding: 10,
      },
      btnFlipboardStyle:{
        alignItems: 'center',
        backgroundColor: '#e12828',
        padding: 10,
      },
      btnSpotifyStyle:{
        alignItems: 'center',
        backgroundColor: '#1db954',
        padding: 10,
      },
      btnSnapchatStyle:{
        alignItems: 'center',
        backgroundColor: '#fffc00',
        padding: 10,
      },
      btnOthersStyle:{
        alignItems: 'center',
        backgroundColor: '#4d4d4d',
        padding: 10,
      },
})
