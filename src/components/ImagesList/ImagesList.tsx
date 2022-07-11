import * as React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {CatImageType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  listContentContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
});

type Props = {
  images?: CatImageType[];
  isLoading?: boolean;
  withAddToFav?: boolean;
  ListHeaderComponent: React.ReactNode;
};

const ImagesList: React.FC<Props> = ({
  images,
  isLoading,
  withAddToFav,
  ListHeaderComponent,
}) => {
  const renderItem = ({item}: {item: CatImageType}) => {
    return (
      <CatImage url={item?.url} id={item?.id} withAddToFav={withAddToFav} />
    );
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      columnWrapperStyle={styles.listContentContainer}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ImagesList;
