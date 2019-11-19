import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AboutContainer from './screens/About/AboutContainer';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <AboutContainer />
        </View>
      </SafeAreaView>
    );
  }
}
