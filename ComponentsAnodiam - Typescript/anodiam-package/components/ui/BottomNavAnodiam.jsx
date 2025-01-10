import { Tabs, useRouter } from 'expo-router';
import { Colors } from '@/assets/Colors';
import { useColorScheme, BackHandler, Pressable } from 'react-native';
import { bottomNavStyles } from './utils/Styles';
import { useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Foundation from 'react-native-vector-icons/Foundation';
import * as validation from './utils/Validation';

const BottomNavAnodiam = (props) => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const filename = 'BottomNavAnodiam'

  // Tabs arreay and its Error and warning validations
  const tabs = props.tabs || [
    { name: 'SocialMedia', label: 'Social Media', icon: 'video-image', iconType: 'MaterialCommunityIcons' },
    { name: 'MyTrips', label: 'My Trips', icon: 'unicorn', iconType: 'MaterialCommunityIcons' },
    { name: 'Business', label: 'My Business', icon: 'search-dollar', iconType: 'FontAwesome5' },
    { name: 'Profile', label: 'Profile', icon: 'person-pin', iconType: 'MaterialIcons' } ];
  if (!Array.isArray(tabs) || tabs.length === 0) { throw new Error(`${filename}: The tabs array must contain at least one tab.`);}
  if (tabs.length > 6) { console.warn(`${filename}: Too many tabs: ${tabs.length} tabs cannot fit well in BottomNavAnodiam. It is designed for a maximum of 6 tabs.`); }
  const uniqueNames = new Set();
  const uniqueLabels = new Set();
  tabs.forEach((tab, index) => {
    if (!tab.name || typeof tab.name !== 'string') { throw new Error(`${filename}: Tab at index ${index} has an invalid or missing 'name' field.`); }
    if (uniqueNames.has(tab.name)) { throw new Error(`${filename}: Duplicate 'name' field detected: '${tab.name}'. Each tab name must be unique.`); }
    uniqueNames.add(tab.name);
    if (!tab.label || typeof tab.label !== 'string' || tab.label.length < 1 || tab.label.length > 16) {
      console.warn(`${filename}: Tab at index ${index} has an invalid 'label' field. It must be a string between 1 and 16 characters.`); }
    if (uniqueLabels.has(tab.label)) {
      console.warn(`${filename}: Duplicate 'label' field detected: '${tab.label}'. Each tab label should be unique.`); }
    uniqueLabels.add(tab.label);
    if (!tab.icon || typeof tab.icon !== 'string' || !tab.iconType || typeof tab.iconType !== 'string') {
      throw new Error(`${filename}: Tab at index ${index} has an invalid structure. Each tab must match { name: '', label: '', icon: '', iconType: '' }.`); }
  });

  // Colors and their Error and warning validations
  const activeColor = props.activeColor || Colors.ANODIAM;
  const greyColor = props.greyColor || Colors.GREY;
  const backgroundColor = props.backgroundColor || (colorScheme === 'light' ? Colors.light.ANODIAM_LIGHTEST : Colors.NIGHT_BLACK);
  const rippleColor = props.rippleColor || (colorScheme === 'light' ? Colors.light.ANODIAM_LIGHTER : Colors.dark.ANODIAM_LIGHTEST);
  validation.validateColorProp('activeColor', props.activeColor, activeColor, filename);
  validation.validateColorProp('greyColor', props.greyColor, greyColor, filename);
  validation.validateColorProp('backgroundColor', props.backgroundColor, backgroundColor, filename);
  validation.validateColorProp('rippleColor', props.rippleColor, rippleColor, filename);
  
  // Fonts, Layouts and their Error and warning validations
  const fontFamily = props.fontFamily || validation.defaultFont;
  validation.validateFontFamilyProp('fontFamily', props.fontFamily, validation.defaultFont, filename);
  const defaultBottomNavFontSize=12;
  const fontSize = props.fontSize || defaultBottomNavFontSize;
  validation.validateFontSizeProp('fontSize', props.fontSize, filename);
  const fontWeight = props.fontWeight || validation.boldFontWeight;
  validation.validateFontWeightProp('fontWeight', props.fontWeight, validation.boldFontWeight, filename);
  const padding = props.padding || validation.defaultPadding;
  validation.validatePaddingProp('padding', props.padding, filename);
  const iconSize = props.iconSize || validation.defaultIconSize;
  validation.validateIconSizeProp('iconSize', props.iconSize, validation.defaultIconSize, filename);

  // Specific Non generic features and their Error and warning validations
  const height = props.height || 60;
  if (height < 0) { throw new Error(`${filename}: height of BottomNavAnodiam component should be a positive number.`); }
  if (height < 30 || iconSize > 200) { console.warn(`${filename}: Bottom Nav Anodiam component is designed to have height 30 to 200.`); }
  const bigIconIndex = props.bigIconIndex || 1;
  if (bigIconIndex < -1 || bigIconIndex >= tabs.length) { throw new Error(`${filename}: bigIconIndex can only have values from -1 to ${tabs.length - 1}.`); }
  const defaultSelectedIndex = props.defaultSelectedIndex || 1;
  if (defaultSelectedIndex < 0 || defaultSelectedIndex >= tabs.length) { throw new Error(`${filename}: defaultSelectedIndex can only have values from 0 to ${tabs.length - 1}.`); }
  const initialRouteName = tabs[defaultSelectedIndex]?.name || tabs[1]?.name;
  const styles = bottomNavStyles(iconSize);

  useEffect(() => {
    router.replace(initialRouteName);
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [initialRouteName]);

  const renderIcon = (iconType, iconProps) => {
    switch (iconType) {
      case 'MaterialIcons': return <MaterialIcons {...iconProps} />;
      case 'Ionicons': return <Ionicons {...iconProps} />;
      case 'FontAwesome': return <FontAwesome {...iconProps} />;
      case 'FontAwesome5': return <FontAwesome5 {...iconProps} />;
      case 'MaterialCommunityIcons': return <MaterialCommunityIcons {...iconProps} />;
      case 'Entypo': return <Entypo {...iconProps} />;
      case 'EvilIcons': return <EvilIcons {...iconProps} />;
      case 'Feather': return <Feather {...iconProps} />;
      case 'AntDesign': return <AntDesign {...iconProps} />;
      case 'Octicons': return <Octicons {...iconProps} />;
      case 'SimpleLineIcons': return <SimpleLineIcons {...iconProps} />;
      case 'Zocial': return <Zocial {...iconProps} />;
      case 'Foundation': return <Foundation {...iconProps} />;
      default:
        throw new Error(`Unknown icon type: '${iconType}'. Please use one of the supported icon families among the following: 'MaterialIcons', 'Ionicons', 'FontAwesome', 'FontAwesome5', 'MaterialCommunityIcons', 'Entypo', 'EvilIcons', 'Feather', 'AntDesign', 'Octicons', 'SimpleLineIcons', 'Zocial', 'Foundation'.`);
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: greyColor,
        tabBarLabelStyle: {
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          padding: padding,
        },
        tabBarStyle: {
          backgroundColor: backgroundColor,
          height: height,
          padding: padding,
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            android_ripple={{ color: rippleColor, borderless: true }}
          />
        ),
      }}
    >
      {tabs.map((tab, index) => {
        const iconProps = {
          name: tab.icon,
          size: index === bigIconIndex ? iconSize * 1.7 : iconSize,
          color: activeColor,
          style: index === bigIconIndex ? styles.bigIconBox : '',
        };
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              tabBarLabel: index === bigIconIndex ? '' : tab.label,
              tabBarIcon: ({ color }) => renderIcon(tab.iconType, { ...iconProps, color }),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default BottomNavAnodiam;
