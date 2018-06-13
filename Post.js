import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import navStyles from './styles/navStyles'

export default class Post extends Component {
    static navigationOptions ={
        title: "Post",
        ...navStyles
    }
    render (){
        return(
            <View>
                <Text>New Page</Text>
            </View>
        )
    }
}