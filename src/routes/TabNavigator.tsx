import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import {tabsIDs} from '../utils/testIDs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarTestID: tabsIDs.homeTab,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          tabBarTestID: tabsIDs.searchTab,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          tabBarTestID: tabsIDs.favoritesTab,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
