import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Post from './Post'
import navStyles from './styles/navStyles';


class App extends React.Component {
  static navigationOptions ={
    title: "Home",
    ...navStyles
  }

  goToPost = () => {
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>This is Robby's Phone</Text>
        <Button title='Post Page' onPress={this.goToPost} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createStackNavigator({
  Home:{
    screen: App
  },
  Post:{
    screen: Post
  }
})