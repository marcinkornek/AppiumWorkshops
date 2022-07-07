import instance from './axios';
import {ImageRequestType} from './types';

export const getBreeds = () => instance.get('breeds');

export const getSearchBreeds = (searchQuery: string) =>
  instance.get('breeds/search', {params: {q: searchQuery}});

export const getImages = ({
  breed_id,
  size = 'thumb',
  limit = 100,
}: ImageRequestType) =>
  instance.get('images/search', {params: {breed_id, size, limit}});
