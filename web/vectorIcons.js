import antDesignFont from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import entypoFont from 'react-native-vector-icons/Fonts/Entypo.ttf';
import evilIconsFont from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import featherFont from 'react-native-vector-icons/Fonts/Feather.ttf';
import fontAwesomeFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import fontAwesome5BrandsFont from 'react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf';
import fontAwesome5RegularFont from 'react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf';
import fontAwesome5SolidFont from 'react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf';
import fontistoFont from 'react-native-vector-icons/Fonts/Fontisto.ttf';
import foundationFont from 'react-native-vector-icons/Fonts/Foundation.ttf';
import ioniconsFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import materialCommunityIconsFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import materialIconsFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import octiconsFont from 'react-native-vector-icons/Fonts/Octicons.ttf';
import simpleLineIconsFont from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import zocialFont from 'react-native-vector-icons/Fonts/Zocial.ttf';

const antDesignFontStyles = `@font-face {
  src: url(${antDesignFont});
  font-family: AntDesign;
}`;

const entypoFontStyles = `@font-face {
  src: url(${entypoFont});
  font-family: Entypo;
}`;

const evilIconsFontStyles = `@font-face {
  src: url(${evilIconsFont});
  font-family: EvilIcons;
}`;

const featherFontStyles = `@font-face {
  src: url(${featherFont});
  font-family: Feather;
}`;

const fontAwesomeFontStyles = `@font-face {
  src: url(${fontAwesomeFont});
  font-family: FontAwesome;
}`;

const fontAwesome5BrandsFontStyles = `@font-face {
  src: url(${fontAwesome5BrandsFont});
  font-family: FontAwesome5_Brands;
}`;

const fontAwesome5RegularFontStyles = `@font-face {
  src: url(${fontAwesome5RegularFont});
  font-family: FontAwesome5_Regular;
}`;

const fontAwesome5SolidFontStyles = `@font-face {
  src: url(${fontAwesome5SolidFont});
  font-family: FontAwesome5_Solid;
}`;

const fontistoFontStyles = `@font-face {
  src: url(${fontistoFont});
  font-family: Fontisto;
}`;

const foundationFontStyles = `@font-face {
  src: url(${foundationFont});
  font-family: Foundation;
}`;

const ioniconsFontStyles = `@font-face {
  src: url(${ioniconsFont});
  font-family: Ionicons;
}`;

const materialCommunityIconsFontStyles = `@font-face {
  src: url(${materialCommunityIconsFont});
  font-family: MaterialCommunityIcons;
}`;

const materialIconsFontStyles = `@font-face {
  src: url(${materialIconsFont});
  font-family: MaterialIcons;
}`;

const octiconsFontStyles = `@font-face {
  src: url(${octiconsFont});
  font-family: Octicons;
}`;

const simpleLineIconsFontStyles = `@font-face {
  src: url(${simpleLineIconsFont});
  font-family: SimpleLineIcons;
}`;

const zocialFontStyles = `@font-face {
  src: url(${zocialFont});
  font-family: Zocial;
}`;

const styles = [
  antDesignFontStyles,
  entypoFontStyles,
  evilIconsFontStyles,
  featherFontStyles,
  fontAwesomeFontStyles,
  fontAwesome5BrandsFontStyles,
  fontAwesome5RegularFontStyles,
  fontAwesome5SolidFontStyles,
  fontistoFontStyles,
  foundationFontStyles,
  ioniconsFontStyles,
  materialCommunityIconsFontStyles,
  materialIconsFontStyles,
  octiconsFontStyles,
  simpleLineIconsFontStyles,
  zocialFontStyles,
].join('\n');

const style = document.createElement('style');

style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = styles;
} else {
  style.appendChild(document.createTextNode(styles));
}

export default style;
