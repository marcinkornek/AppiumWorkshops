import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={isLoggedIn ? AppStack : AuthStack}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
