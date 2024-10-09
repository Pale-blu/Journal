import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import JournalScreen from './screens/JournalScreen';
import NotesScreen from './screens/NotesScreen';
import TodoScreen from './screens/TodoScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Journal"
        screenOptions={{
          swipeEnabled: true,
          tabBarVisible: false, // Disable the tab bar display
        }}
      >
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Todo" component={TodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
