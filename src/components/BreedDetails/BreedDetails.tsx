import * as React from 'react';
import {View, Text, StyleSheet, Linking, Pressable} from 'react-native';
import {BreedType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  name: {},
  description: {},
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

type Props = {
  breed: BreedType;
};

const BreedDetails: React.FC<Props> = ({breed}) => {
  return (
    <View>
      {breed?.image?.url && (
        <CatImage url={breed.image.url} size="large" withAddToFav={false} />
      )}
      <Text style={styles.name}>{breed.name}</Text>
      <Text style={styles.description}>{breed.description}</Text>
      <Pressable onPress={() => Linking.openURL(breed.wikipedia_url)}>
        <Text style={styles.link}>Read on Wikipedia</Text>
      </Pressable>
    </View>
  );
};

export default BreedDetails;
