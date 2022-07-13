import * as React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {componentTestIDs} from '../../utils/testIDs';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d3d3d3',
    padding: 10,
  },
  title: {
    textAlign: 'center',
  },
});

type Props = {
  title: string;
  onPress: () => void;
  testID?: string;
};

const PrimaryButton: React.FC<Props> = ({
  onPress,
  title,
  testID = componentTestIDs.primaryButtonDefault,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button} testID={testID}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
