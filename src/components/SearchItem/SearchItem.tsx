import * as React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {BreedType} from '../../utils/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Props = {
  breed: BreedType;
  onPress: (breed: BreedType) => void;
};

const SearchItem: React.FC<Props> = ({breed, onPress}) => {
  return (
    <Pressable onPress={() => onPress(breed)} style={styles.row}>
      <Text>{breed.name}</Text>
      <Icon name="chevron-right" />
    </Pressable>
  );
};

export default SearchItem;
