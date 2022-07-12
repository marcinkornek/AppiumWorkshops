import * as React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import BreedsList from '../../components/BreedsList/BreedsList';
import {getBreeds} from '../../utils/api';
import {homeScreenIDs} from '../../utils/testIDs';

const HomeScreen = () => {
  const {isLoading, error, data} = useQuery('breeds', getBreeds);

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text>An error has occurred</Text>;
    }

    return <BreedsList breeds={data?.data} />;
  };

  return <View testID={homeScreenIDs.homeScreen}>{renderContent()}</View>;
};

export default HomeScreen;
