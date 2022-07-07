import * as React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {breedItemTestID} from '../../utils/testIDs';
import {BreedType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});

type Props = {
  breed: BreedType;
  onPress: (breed: BreedType) => void;
};

const BreedItem: React.FC<Props> = ({breed, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(breed)}
      testID={`${breedItemTestID}-${breed.name}`}>
      <CatImage url={breed?.image?.url} size="small" />
      <Text style={styles.name}>{breed.name}</Text>
    </Pressable>
  );
};

export default BreedItem;
