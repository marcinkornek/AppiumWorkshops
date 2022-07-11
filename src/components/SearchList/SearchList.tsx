import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ScreenNavigationProp} from '../../routes/RootNavigator';
import {searchResultsTestID} from '../../utils/testIDs';
import {BreedType} from '../../utils/types';
import SearchItem from '../SearchItem/SearchItem';

const styles = StyleSheet.create({
  listContentContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
  separator: {
    height: 10,
  },
});

type Props = {
  breeds: BreedType[];
};

const SearchList: React.FC<Props> = ({breeds}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handlePress = (breed: BreedType) => {
    navigation.navigate('BreedDetails', {breed});
  };

  const renderItem = ({item}: {item: BreedType}) => {
    return <SearchItem breed={item} onPress={handlePress} />;
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const renderEmptyComponent = () => <Text>No results</Text>;

  return (
    <FlatList
      testID={searchResultsTestID}
      data={breeds}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContentContainer}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

export default SearchList;
