import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {
  searchBarInputTestID,
  searchBarSubmitBtnTestID,
  searchBarTestID,
} from '../../utils/testIDs';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'white',
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({onSearch}) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.bar} testID={searchBarTestID}>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
        placeholder="Search"
        testID={searchBarInputTestID}
      />
      <PrimaryButton
        onPress={handleSearch}
        title="Search"
        testID={searchBarSubmitBtnTestID}
      />
    </View>
  );
};

export default SearchBar;
