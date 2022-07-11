import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useQuery} from 'react-query';
import BreedDetails from '../../components/BreedDetails/BreedDetails';
import ImagesList from '../../components/ImagesList/ImagesList';
import {RootStackParamList} from '../../routes/RootNavigator';
import {getImages} from '../../utils/api';

type Props = NativeStackScreenProps<RootStackParamList, 'BreedDetails'>;

const BreedDetailsScreen = ({route}: Props) => {
  const breed = route.params.breed;
  const breedId = breed.id;

  const {isLoading, data} = useQuery(['images', breedId], () =>
    getImages({breed_id: breedId}),
  );
  const images = data?.data;

  const renderHeaderComponent = () => <BreedDetails breed={breed} />;

  return (
    <ImagesList
      images={images}
      isLoading={isLoading}
      ListHeaderComponent={renderHeaderComponent()}
    />
  );
};

export default BreedDetailsScreen;
