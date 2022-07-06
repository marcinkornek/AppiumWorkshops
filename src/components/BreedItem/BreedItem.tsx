import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BreedType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});

type Props = {
  breed: BreedType;
};

const BreedItem: React.FC<Props> = ({breed}) => {
  return (
    <View>
      <CatImage url={breed?.image?.url} size="small" />
      <Text style={styles.name}>{breed.name}</Text>
    </View>
  );
};

export default BreedItem;
