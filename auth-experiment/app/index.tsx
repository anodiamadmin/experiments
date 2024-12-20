import React,{useEffect,useState} from 'react'
import { View, useColorScheme, StatusBar } from "react-native"
import { Colors } from '@/constants/Colors'
import SplashScreen from "@/app/miscellaneous/SplashScreen"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from "expo-router";
import { screenStyles } from "@/components/UI/Styles"

export default function Index() {
  const colorScheme = useColorScheme();
  const padding = 20
  const backgroundColor = colorScheme === 'dark' ? Colors.dark.CONTRAST_PALE : Colors.light.ANODIAM_PALE
  const height = '100%'
  const scrnStyles = screenStyles(padding, backgroundColor, height)
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    AsyncStorage.getItem('userdetails').then(value => {
      if (value !== null) {
        setUser(value);
      }
    });
  }, []);
  return (
    <View style={scrnStyles.anodiamScreen}>
      <StatusBar backgroundColor={backgroundColor} />
      {user?<Redirect href={'/MyTrips'}/>:<SplashScreen/>}
    </View>
  );
}
