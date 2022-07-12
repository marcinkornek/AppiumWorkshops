import React from 'react';
import {useQuery} from 'react-query';
import {View} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import {getSearchBreeds} from '../../utils/api';
import MostSearchedTagsList from '../../components/MostSearchedTagsList/MostSearchedTagsList';
import {mostSearchedTags} from '../../utils/constants';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const {isLoading, data} = useQuery(
    ['breeds', searchQuery],
    () => getSearchBreeds(searchQuery),
    {enabled: !!searchQuery},
  );

  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View>
      <SearchBar onSearch={onSearch} />
      <MostSearchedTagsList onTagPress={onSearch} tags={mostSearchedTags} />
      {searchQuery ? (
        <SearchResults results={data?.data} isLoading={isLoading} />
      ) : null}
    </View>
  );
};

export default SearchScreen;
