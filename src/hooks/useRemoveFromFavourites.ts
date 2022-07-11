import {useAtomValue} from 'jotai';
import {useUpdateAtom} from 'jotai/utils';
import {deleteImageFromFavourites} from '../utils/api';

import {favouritesAtom} from '../utils/atoms';
import {FavouriteType} from '../utils/types';

export default () => {
  const favourites = useAtomValue(favouritesAtom);
  const updateFavouritesAtom = useUpdateAtom(favouritesAtom);

  const removeFromFavouritesAtom = async (image_id: string) =>
    updateFavouritesAtom(
      favourites.filter(
        (favourite: FavouriteType) => favourite.image_id !== image_id,
      ),
    );

  const removeFromFavourites = async (image_id: string) => {
    const favouriteId = favourites?.find(
      favourite => favourite.image_id === image_id,
    )?.favourite_id;
    if (favouriteId) {
      const response = await deleteImageFromFavourites(favouriteId);
      if (response?.data?.message === 'SUCCESS') {
        removeFromFavouritesAtom(image_id);
      }
    }
  };

  return removeFromFavourites;
};
