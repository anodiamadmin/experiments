import { Tabs, useRouter } from 'expo-router';
import { Colors } from './resources/Colors';
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
import * as constants from './utils/ConstantsAnodiam';

type BottomNavAnodiamProps = {
  tabs?: { name: string; label: string; icon: string; iconType: string }[];
  bigIconIndex?: number;
  defaultSelectedIndex?: number;
  activeColor?: string;
  greyColor?: string;
  backgroundColor?: string;
  rippleColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  padding?: number;
  iconSize?: number;
  bottomNavHeight?: number;
};

const BottomNavAnodiam = (props:BottomNavAnodiamProps) => {
  const fileName = 'BottomNavAnodiam';
  const colorScheme = useColorScheme();
  const router = useRouter();

  useEffect(() => {
    const initialRouteName = tabs[defaultSelectedIndex].name;
    router.replace(initialRouteName as any);
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [props.defaultSelectedIndex]);

  const tabs = props.tabs || constants.defaultTabs;
  const bigIconIndex = props.bigIconIndex ?? constants.defaultBigIconIndex;
  const defaultSelectedIndex = props.defaultSelectedIndex ?? constants.defaultPreSelectedIndex;
  validation.validateBottomNavAnodiamTabs(tabs, bigIconIndex, defaultSelectedIndex);
  const initialRouteName = tabs[defaultSelectedIndex].name;

  const activeColor = props.activeColor || Colors.ANODIAM;
  const greyColor = props.greyColor || Colors.GREY;
  const backgroundColor = props.backgroundColor || (colorScheme === 'light' ? Colors.light.ANODIAM_LIGHTEST : Colors.NIGHT_BLACK);
  const rippleColor = props.rippleColor || (colorScheme === 'light' ? Colors.light.ANODIAM_LIGHTER : Colors.dark.ANODIAM_LIGHTEST);
  const fontFamily = props.fontFamily || constants.defaultFont;
  const fontSize = props.fontSize || constants.defaultBottomNavFontSize;
  const fontWeight = props.fontWeight || constants.boldFontWeight;
  const padding = props.padding || constants.defaultPadding;
  const iconSize = props.iconSize || constants.defaultIconSize;
  const bottomNavHeight = props.bottomNavHeight || constants.defaultBottomNavHeight;

  validation.validateProps(fileName, { activeColor, greyColor, backgroundColor, rippleColor, fontFamily, fontSize, fontWeight, padding, iconSize, bottomNavHeight });

  const renderIcon = (iconType: string, iconProps: any) => {
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
        validation.raiseIssue('Warning', fileName, 'iconType', `${iconType}`, "one of the supported icon families.");
        return <MaterialCommunityIcons name='unicorn'/>;
    }
  };

  const styles = bottomNavStyles(iconSize, fontFamily, fontSize, fontWeight, padding, backgroundColor, bottomNavHeight);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: greyColor,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarButton: (props) => (
          <Pressable {...props} android_ripple={{ color: rippleColor, borderless: true }} />
        ),
      }}
    >
      {tabs.map((tab, index) => {
        const iconProps = {
          name: tab.icon,
          size: index === bigIconIndex ? iconSize * 1.7 : iconSize,
          color: activeColor,
          style: index === bigIconIndex ? styles.bigIconBox : undefined,
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