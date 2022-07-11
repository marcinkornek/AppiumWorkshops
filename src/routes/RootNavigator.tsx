import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BreedDetailsScreen from '../screens/BreedDetailsScreen/BreedDetailsScreen';
import ImageFullScreenScreen from '../screens/ImageFullScreenScreen/ImageFullScreenScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {BreedType} from '../utils/types';

export type RootStackParamList = {
  Tabs: undefined;
  BreedDetails: {breed: BreedType};
  ImageFullScreen: {id?: string; url?: string};
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BreedDetails"
            component={BreedDetailsScreen}
            options={({route}) => ({title: route.params.breed.name})}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="ImageFullScreen"
            component={ImageFullScreenScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
