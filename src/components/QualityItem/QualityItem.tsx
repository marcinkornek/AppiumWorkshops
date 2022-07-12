import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  starsWrapper: {
    flexDirection: 'row',
  },
});

type Props = {
  title: string;
  number: number;
};

const QualityItem: React.FC<Props> = ({title, number}) => {
  const renderIcon = (isActive: boolean) => (
    <Icon name={isActive ? 'star' : 'star-border'} size={25} />
  );

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.starsWrapper}>
        {Array.from(Array(number)).map((_, i) => (
          <React.Fragment key={i}>{renderIcon(true)}</React.Fragment>
        ))}
        {Array.from(Array(5 - number)).map((_, i) => (
          <React.Fragment key={i}>{renderIcon(false)}</React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default QualityItem;
