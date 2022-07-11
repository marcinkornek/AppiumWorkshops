import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import {postAddImageToFavourites} from '../utils/api';
import {favouritesAtom} from '../utils/atoms';
import Toast from 'react-native-toast-message';

export default () => {
  const favourites = useAtomValue(favouritesAtom);
  const updateFavouritesAtom = useUpdateAtom(favouritesAtom);
  const updateFavourites = ({
    image_id,
    url,
    favourite_id,
  }: {
    image_id: string;
    url: string;
    favourite_id: string;
  }) => {
    updateFavouritesAtom([...favourites, {image_id, url, favourite_id}]);
  };

  const addToFavourites = async (image_id: string, url: string) => {
    const response = await postAddImageToFavourites(image_id);
    if (response?.data?.message === 'SUCCESS' && response?.data?.id) {
      updateFavourites({image_id, url, favourite_id: response.data.id});
      Toast.show({
        type: 'success',
        text1: 'Successfully added to favourites',
      });
    }
  };

  return addToFavourites;
};
