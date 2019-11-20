import {createAppContainer} from 'react-navigation';
import About from '../screens/About';
import NavigationLayout from './NavigationLayout';
import {createStackNavigator} from 'react-navigation-stack';
import Speaker from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {
      LayOut: NavigationLayout,
      Speaker: Speaker,
    },
    {headerMode: 'none', mode: 'modal'},
  ),
);
