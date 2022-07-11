import {useUpdateAtom} from 'jotai/utils';
import React from 'react';
import {useQuery} from 'react-query';
import {getFavourites} from './api';
import {favouritesAtom} from './atoms';
import {FavouriteResponseType} from './types';

const FavouritesManager = () => {
  const {data} = useQuery('favourites', getFavourites);
  const updateFavouritesAtom = useUpdateAtom(favouritesAtom);
  const favouritesData = data?.data || [];
  const favourites = favouritesData.map((favourite: FavouriteResponseType) => ({
    image_id: favourite?.image?.id,
    url: favourite?.image?.url,
    favourite_id: favourite?.id,
  }));

  React.useEffect(() => {
    updateFavouritesAtom(favourites);
  }, [favourites, updateFavouritesAtom]);

  return null;
};

export default FavouritesManager;
