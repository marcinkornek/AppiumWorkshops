import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BreedDetailsScreen from '../screens/BreedDetailsScreen/BreedDetailsScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {BreedType} from '../utils/types';

export type RootStackParamList = {
  Tabs: undefined;
  BreedDetails: {breed: BreedType};
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
