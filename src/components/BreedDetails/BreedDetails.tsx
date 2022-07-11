import * as React from 'react';
import {View, Text, StyleSheet, Linking, Pressable} from 'react-native';
import {BreedType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  descriptionWrapper: {
    margin: 10,
    marginBottom: 0,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  photosSection: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
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
      <View style={styles.descriptionWrapper}>
        <Text style={styles.name}>{breed.name}</Text>
        <Text style={styles.description}>{breed.description}</Text>
        <Pressable onPress={() => Linking.openURL(breed.wikipedia_url)}>
          <Text style={styles.link}>Read on Wikipedia</Text>
        </Pressable>
        <Text style={styles.photosSection}>Photos</Text>
      </View>
    </View>
  );
};

export default BreedDetails;
