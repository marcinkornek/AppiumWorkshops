import {useAtomValue} from 'jotai';
import * as React from 'react';
import ImagesList from '../../components/ImagesList/ImagesList';
import {favouritesAtom} from '../../utils/atoms';

const HomeScreen = () => {
  const favourites = useAtomValue(favouritesAtom);

  const images = favourites.map(favourite => ({
    url: favourite?.url,
    id: favourite?.image_id,
  }));

  return <ImagesList images={images} />;
};

export default HomeScreen;
