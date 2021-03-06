import * as React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {isWeb} from '../../utils/constants';
import {CatImageType} from '../../utils/types';
import CatImage from '../CatImage/CatImage';

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
});

type Props = {
  images?: CatImageType[];
  isLoading?: boolean;
  withAddToFav?: boolean;
  ListHeaderComponent?: React.ReactElement;
};

const ImagesList: React.FC<Props> = ({
  images,
  isLoading,
  withAddToFav,
  ListHeaderComponent,
}) => {
  const renderItem = ({item}: {item: CatImageType}) => {
    return (
      <CatImage
        key={item.id}
        url={item?.url}
        id={item?.id}
        withAddToFav={withAddToFav}
      />
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
      numColumns={isWeb ? 5 : 3}
      columnWrapperStyle={styles.columnWrapperStyle}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ImagesList;
