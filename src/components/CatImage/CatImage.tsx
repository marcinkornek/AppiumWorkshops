import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import useAddToFavourites from '../../hooks/useAddToFavourites';
import useIsImageFavourite from '../../hooks/useIsImageFavourite';
import useRemoveFromFavourites from '../../hooks/useRemoveFromFavourites';
import {StackNavigationProp} from '../../routes/RootNavigator';
import {CAT_PLACEHOLDER_URL, isWeb} from '../../utils/constants';
import FavouritesStar from '../FavouritesStar/FavouritesStar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
  },
  imageLarge: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    maxWidth: 300,
    maxHeight: 300,
  },
  imageFullScreen: {
    width: '100%',
    height: isWeb ? '100vh' : undefined,
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
  size?: 'small' | 'large' | 'fullScreen';
  withAddToFav?: boolean;
};

const CatImage: React.FC<Props> = ({
  id,
  url,
  size = 'small',
  withAddToFav = true,
}) => {
  const {navigate} = useNavigation<StackNavigationProp>();
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

  const handleOpenModal = () => {
    navigate('ImageFullScreen', {id, url});
  };

  const RootComponent = withAddToFav ? Pressable : View;

  return (
    <RootComponent
      style={styles.container}
      onPress={withAddToFav ? handleOpenModal : undefined}>
      <Image
        source={{uri: url || CAT_PLACEHOLDER_URL}}
        style={[
          styles.image,
          size === 'large' && styles.imageLarge,
          size === 'fullScreen' && styles.imageFullScreen,
        ]}
        resizeMode="cover"
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
    </RootComponent>
  );
};

export default CatImage;
