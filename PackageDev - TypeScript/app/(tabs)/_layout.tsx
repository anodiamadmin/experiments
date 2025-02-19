import React from 'react';
import BottomNavAnodiam from '../../ui/ButtonAnodiam';

export interface Tab {
  name: string;
  label: string;
  icon: string;
  iconType: string;
}

export default function TabLayout(): JSX.Element {
  const tabs: Tab[] = [
    { name: 'SocialMedia', label: 'Social Media', icon: 'video-image', iconType: 'MaterialCommunityIcons' },
    { name: 'MyTrips', label: 'My Trips', icon: 'unicorn', iconType: 'MaterialCommunityIcons' },
    { name: 'Business', label: 'Shared Eco', icon: 'search-dollar', iconType: 'FontAwesome5' },
    { name: 'Profile', label: 'Higibigi', icon: 'person-pin', iconType: 'MaterialIcons' },
    { name: 'New', label: 'New Whatever', icon: 'person', iconType: 'MaterialIcons' }
  ];

  return (
    <BottomNavAnodiam 
      tabs={tabs}
      bigIconIndex={0}
      defaultSelectedIndex={0}
    />
  );
}