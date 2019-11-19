import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
const AboutStack = createStackNavigator({
  About: About,
});
// Dedicated stacks for Schedule, Map and Faves will go here too!
export default createBottomTabNavigator(/* ...some args go here */);
