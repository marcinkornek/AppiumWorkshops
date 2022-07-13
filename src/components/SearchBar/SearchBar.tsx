import * as React from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  clearBtn: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  textInputWrapper: {
    flex: 1,
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

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={styles.bar}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={setQuery}
          value={query}
          placeholder="Search"
        />
        {query && (
          <Pressable onPress={handleClear} style={styles.clearBtn}>
            <Icon name="close" size={20} />
          </Pressable>
        )}
      </View>
      <PrimaryButton onPress={handleSearch} title="Search" />
    </View>
  );
};

export default SearchBar;
