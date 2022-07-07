import instance from './axios';

export const getBreeds = () => instance.get('breeds');

export const getSearchBreeds = (searchQuery: string) =>
  instance.get('breeds/search?q=' + searchQuery);
