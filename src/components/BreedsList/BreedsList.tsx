import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ScreenNavigationProp} from '../../routes/RootNavigator';
import {isWeb} from '../../utils/constants';
import {homeScreenIDs} from '../../utils/testIDs';
import {BreedType} from '../../utils/types';
import BreedItem from '../BreedItem/BreedItem';

const styles = StyleSheet.create({
  listContentContainer: {
    padding: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
});

type Props = {
  breeds: BreedType[];
};

const BreedsList: React.FC<Props> = ({breeds}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handlePress = (breed: BreedType) => {
    navigation.navigate('BreedDetails', {breed});
  };

  const renderItem = ({item}: {item: BreedType}) => {
    return <BreedItem key={item.id} breed={item} onPress={handlePress} />;
  };

  return (
    <FlatList
      data={breeds}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={isWeb ? 5 : 3}
      columnWrapperStyle={styles.listContentContainer}
      testID={homeScreenIDs.breedsList}
    />
  );
};

export default BreedsList;
