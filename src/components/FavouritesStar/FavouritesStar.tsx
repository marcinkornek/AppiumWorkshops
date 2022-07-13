import * as React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import {defaultHitSlop} from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  isActive: boolean;
  onPress: () => void;
  style: ViewStyle;
};

const FavouritesStar: React.FC<Props> = ({onPress, isActive, style}) => {
  return (
    <Pressable onPress={onPress} style={style} hitSlop={defaultHitSlop}>
      <Icon name={isActive ? 'star' : 'star-border'} size={25} color="yellow" />
    </Pressable>
  );
};

export default FavouritesStar;
