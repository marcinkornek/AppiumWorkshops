import * as React from 'react';
import {View, Text, StyleSheet, Linking, Pressable} from 'react-native';
import {breedDetailsScreenIDs} from '../../utils/testIDs';
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
    marginBottom: 20,
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
        <Text testID={breedDetailsScreenIDs.breedTitle} style={styles.name}>
          {breed.name}
        </Text>
        <Text
          testID={breedDetailsScreenIDs.breedDescription}
          style={styles.description}>
          {breed.description}
        </Text>
        <Pressable onPress={() => Linking.openURL(breed.wikipedia_url)}>
          <Text style={styles.link}>Read on Wikipedia</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BreedDetails;
