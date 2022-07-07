import * as React from 'react';
import {useQuery} from 'react-query';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import {getSearchBreeds} from '../../utils/api';

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
    <>
      <SearchBar onSearch={onSearch} />
      {searchQuery ? (
        <SearchResults results={data?.data} isLoading={isLoading} />
      ) : null}
    </>
  );
};

export default SearchScreen;
