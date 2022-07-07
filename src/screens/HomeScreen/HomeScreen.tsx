import * as React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {useQuery} from 'react-query';
import BreedsList from '../../components/BreedsList/BreedsList';
import {getBreeds} from '../../utils/api';

const HomeScreen = () => {
  const {isLoading, error, data} = useQuery('breeds', getBreeds);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>An error has occurred</Text>;
  }

  return <BreedsList breeds={data?.data} />;
};

export default HomeScreen;
