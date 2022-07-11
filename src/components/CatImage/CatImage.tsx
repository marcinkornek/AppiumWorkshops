import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useAddToFavourites from '../../hooks/useAddToFavourites';
import useIsImageFavourite from '../../hooks/useIsImageFavourite';
import useRemoveFromFavourites from '../../hooks/useRemoveFromFavourites';
import {CAT_PLACEHOLDER_URL} from '../../utils/constants';
import FavouritesStar from '../FavouritesStar/FavouritesStar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  imageLarge: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  favouritesStar: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

type Props = {
  id?: string; // image_id
  url?: string;
  size?: 'small' | 'large';
  withAddToFav?: boolean;
};

const CatImage: React.FC<Props> = ({
  id,
  url,
  size = 'small',
  withAddToFav = true,
}) => {
  const onAddToFavourites = useAddToFavourites();
  const onRemoveFromFavourites = useRemoveFromFavourites();
  const isActive = useIsImageFavourite(id);
  const handleAddToFavourites = () => {
    if (!id || !url || !onAddToFavourites) {
      return;
    }

    onAddToFavourites(id, url);
  };
  const handleRemoveFromFavourites = () => {
    if (!id || !onRemoveFromFavourites) {
      return;
    }
    onRemoveFromFavourites(id);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: url || CAT_PLACEHOLDER_URL}}
        style={[styles.image, size === 'large' && styles.imageLarge]}
      />
      {withAddToFav && (
        <FavouritesStar
          onPress={
            isActive ? handleRemoveFromFavourites : handleAddToFavourites
          }
          isActive={isActive}
          style={styles.favouritesStar}
        />
      )}
    </View>
  );
};

export default CatImage;
