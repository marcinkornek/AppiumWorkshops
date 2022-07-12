import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Tag from '../Tag/Tag';

interface MostSearchedTagsListProps {
  onTagPress: (breed: string) => void;
  tags: string[];
}

const MostSearchedTagsList: FC<MostSearchedTagsListProps> = ({
  onTagPress,
  tags,
}) => {
  const renderMostSearchedTags = ({item}: {item: string}) => (
    <Tag label={item} onPress={() => onTagPress(item)} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal
      data={tags}
      renderItem={renderMostSearchedTags}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default MostSearchedTagsList;
