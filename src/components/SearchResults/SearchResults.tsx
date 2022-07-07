import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {BreedType} from '../../utils/types';
import SearchList from '../SearchList/SearchList';

type Props = {
  results: [BreedType];
  isLoading: boolean;
};

const SearchResults: React.FC<Props> = ({results, isLoading}) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return <SearchList breeds={results} />;
};

export default SearchResults;
