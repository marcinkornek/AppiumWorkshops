import React, {FC} from 'react';
import {Button} from 'react-native';

interface TagProps {
  label: string;
  onPress: () => void;
}

const Tag: FC<TagProps> = ({label, onPress}) => {
  return <Button title={label} onPress={onPress} />;
};

export default Tag;
