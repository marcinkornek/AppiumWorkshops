import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import BreedDetails from '../../components/BreedDetails/BreedDetails';
import ImagesList from '../../components/ImagesList/ImagesList';
import QualitiesList from '../../components/QualitiesList/QualitiesList';
import {RootStackParamList} from '../../routes/RootNavigator';
import {getImages} from '../../utils/api';
import {breedDetailsScreenIDs} from '../../utils/testIDs';

type Props = NativeStackScreenProps<RootStackParamList, 'BreedDetails'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photosSection: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const BreedDetailsScreen = ({route}: Props) => {
  const breed = route.params.breed;
  const breedId = breed.id;

  const {isLoading, data} = useQuery(['images', breedId], () =>
    getImages({breed_id: breedId}),
  );
  const images = data?.data;

  const renderHeaderComponent = () => (
    <>
      <BreedDetails breed={breed} />
      <QualitiesList breed={breed} />
      <Text style={styles.photosSection}>Photos</Text>
    </>
  );

  return (
    <View style={styles.container} testID={breedDetailsScreenIDs.breedDetails}>
      <ImagesList
        images={images}
        isLoading={isLoading}
        ListHeaderComponent={renderHeaderComponent()}
      />
    </View>
  );
};

export default BreedDetailsScreen;
