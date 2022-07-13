import * as React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import style from '../../../web/vectorIcons';
import BreedsList from '../../components/BreedsList/BreedsList';
import {getBreeds} from '../../utils/api';
import {homeScreenIDs} from '../../utils/testIDs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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

  return (
    <View testID={homeScreenIDs.homeScreen} style={styles.container}>
      {renderContent()}
    </View>
  );
};

export default HomeScreen;
