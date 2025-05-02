import FontAwexome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function TabsLayout () {
  const profileNotification = 0
  return <Tabs screenOptions={{
    tabBarLabelPosition: 'below-icon',
    tabBarShowLabel: true,
    headerTitle: 'My Recipees App',
    // headerShown: false,
    tabBarActiveTintColor: 'orange',
    tabBarInactiveTintColor: 'purple',
    tabBarStyle: {
    //   position: 'absolute',
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
      height: 80,
      backgroundColor: '#004444',
    //   borderTopWidth: 0,
    //   elevation: 0,
    },
    tabBarLabelStyle: {
      fontSize: 16,
    },
    tabBarIconStyle: {
      marginBottom: -5,
    },
    headerStyle: {
      backgroundColor: '#440044',
    },
    headerTintColor: 'orange',
  }}>
    <Tabs.Screen name="index" options={{
      tabBarLabel: 'Home', 
      tabBarIcon: ({ color, size }) => <FontAwexome name="home" size={size} color={color} />,
      title: 'Home',
    }} />
    <Tabs.Screen name="explore" options={{ 
      tabBarLabel: 'Explore',
      tabBarIcon: ({ color, size }) => <FontAwexome name="search" size={size} color={color} />, 
      title: 'Explore',
    }} />
    <Tabs.Screen name="profile" options={{
      tabBarLabel: 'My Profile',
      tabBarIcon: ({ color, size }) => <FontAwexome name="user" size={size} color={color} />,
      tabBarBadge: profileNotification > 0 ? profileNotification : undefined,
      title: 'My Profile',
    }} />
    <Tabs.Screen name="settings" options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => <FontAwexome name="cog" size={size} color={color} />,
      tabBarBadge: 3,
      title: 'Settings',
    }} />
  </Tabs>
}