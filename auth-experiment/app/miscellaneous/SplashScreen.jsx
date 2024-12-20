import { View, Image, useColorScheme, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { imageStyles } from "@/components/UI/Styles"
import LabelAnodiam from '@/components/UI/LabelAnodiam'
import ButtonAnodiam from '@/components/UI/ButtonAnodiam'

export default function SplashScreen() {
    const colorScheme = useColorScheme()
    const justifyContent = 'center'
    const alignItems = 'center'
    const gifWidth = 300
    const gifHeight = 300
    const imgStyles = imageStyles(justifyContent, alignItems, gifWidth, gifHeight)
    const color = colorScheme === 'dark' ? Colors.dark.CONTRAST_DARK : Colors.light.CONTRAST_DARK
    const router = useRouter()
    const routeNext = () => {
        AsyncStorage.getItem('userdetails').then(value => {
            if (value === null) {
                router.push("../auth/sign-in/Index");
            } else{
                router.push('./../(tabs)/MyTrips');
            }
        });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          routeNext()
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <ScrollView>
            <View style={[imgStyles.gifContainer, {marginTop: 50}]}>
                <Image source={require('./../../assets/images/gallopgypsee.gif')} style={imgStyles.gif}/>
            </View>
            <View style={{marginTop: -35}}>
                <LabelAnodiam labelText={'GypSee'} fontSize={32} fontFamily={'Anodiam-Bold'} margin={5}
                    color={color} justifyContent={'center'} alignItems={'center' } textAlign={'center'}/>
            </View>
            <LabelAnodiam labelText={'Travel like a science fiction!'} fontSize={24} margin={10}
                color={color} justifyContent={'center'} alignItems={'center' } textAlign={'center'}/>
            <View style={{marginTop: 60, margin: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <LabelAnodiam labelText={'Powered by '} fontSize={20}
                    color={color} justifyContent={'flex-end'} alignItems={'flex-end' } textAlign={'right'}/>
                <LabelAnodiam labelText={'Syan'} fontSize={20} fontFamily={'Anodiam-Bold'} color={color}/>
            </View>
            <View style={imgStyles.gifContainer}>
                <Image source={require('./../../assets/images/anodiamFullLogo.png')} style={imgStyles.bottomLogoPng}/>
            </View>
            <ButtonAnodiam buttonText={'Skip'} onPrsBtnAnodiam={routeNext} margin={80} borderRadius={25}/>
        </ScrollView>
    )
}