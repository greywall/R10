import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';

const AboutStack = createStackNavigator({
  About: About,
});

export default createAppContainer(AboutStack);
