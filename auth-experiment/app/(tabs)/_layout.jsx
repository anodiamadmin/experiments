import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.ANODIAM,
      tabBarInactiveTintColor: Colors.DARKEST_TIFFANY,
    }}>
      <Tabs.Screen name="MyTrips"
        options={{
          tabBarLabel: 'My Trips',
          tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color}/>
        }}
      />
      <Tabs.Screen name="Discover"
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color}/>
        }}
      />
      <Tabs.Screen name="MyProfile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color}/>
        }}
      />
    </Tabs>
  )
}