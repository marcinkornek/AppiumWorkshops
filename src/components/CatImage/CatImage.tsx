import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {CAT_PLACEHOLDER_URL} from '../../utils/constants';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  large: {
    width: 200,
    height: 200,
  },
});

type Props = {
  url?: string;
  size?: 'small' | 'large';
};

const CatImage: React.FC<Props> = ({url, size = 'small'}) => {
  return (
    <Image
      source={{uri: url || CAT_PLACEHOLDER_URL}}
      style={[styles.image, size === 'large' && styles.large]}
    />
  );
};

export default CatImage;
