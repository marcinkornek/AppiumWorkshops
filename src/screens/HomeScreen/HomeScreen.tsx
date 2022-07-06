import * as React from 'react';
import {Text} from 'react-native';
import {useQuery} from 'react-query';
import BreedsList from '../../components/BreedsList/BreedsList';
import instance from '../../utils/axios';

const HomeScreen = () => {
  const {isLoading, error, data} = useQuery('repoData', () =>
    instance.get('breeds'),
  );

  if (isLoading) {
    return <Text>'Loading...'</Text>;
  }

  if (error) {
    return <Text>An error has occurred</Text>;
  }

  return <BreedsList breeds={data?.data} />;
};

export default HomeScreen;
