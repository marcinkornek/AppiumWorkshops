import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CatImage from '../../components/CatImage/CatImage';
import {RootStackParamList} from '../../routes/RootNavigator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'ImageFullScreen'>;

const ImageFullScreenScreen = ({route, navigation}: Props) => {
  const {id, url} = route.params;

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CatImage url={url} id={id} size="fullScreen" />
      <Pressable onPress={handleClose} style={styles.closeBtn}>
        <Icon name="close" color="white" size={40} />
      </Pressable>
    </View>
  );
};

export default ImageFullScreenScreen;
