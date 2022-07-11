import {atomWithMMKV} from './persistantJotai';
import {FavouriteType} from './types';

export const favouritesAtom = atomWithMMKV<FavouriteType[]>('favourites', []);
