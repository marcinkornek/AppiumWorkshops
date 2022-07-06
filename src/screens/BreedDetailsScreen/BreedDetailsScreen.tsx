import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import BreedDetails from '../../components/BreedDetails/BreedDetails';
import {RootStackParamList} from '../../routes/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'BreedDetails'>;

const BreedDetailsScreen = ({route}: Props) => {
  const breed = route.params.breed;
  return <BreedDetails breed={breed} />;
};

export default BreedDetailsScreen;
