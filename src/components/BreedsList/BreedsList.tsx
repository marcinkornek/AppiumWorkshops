import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {BreedType} from '../../utils/types';
import BreedItem from '../BreedItem/BreedItem';

const styles = StyleSheet.create({
  listContentContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
});

type Props = {
  breeds: [BreedType];
};

const BreedsList: React.FC<Props> = ({breeds}) => {
  const renderItem = ({item}: {item: BreedType}) => {
    return <BreedItem breed={item} />;
  };

  return (
    <FlatList
      data={breeds}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      columnWrapperStyle={styles.listContentContainer}
    />
  );
};

export default BreedsList;
