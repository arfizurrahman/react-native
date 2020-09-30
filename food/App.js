import { createAppContainer, createNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search',
		},
	}
);

export default createAppContainer(navigator);

// Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx
