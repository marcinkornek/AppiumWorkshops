import {useAtomValue} from 'jotai';
import {favouritesAtom} from '../utils/atoms';

export default (id?: string) => {
  const favourites = useAtomValue(favouritesAtom);

  if (!id) {
    return false;
  }

  return !!favourites?.find(image => image?.image_id === id);
};
