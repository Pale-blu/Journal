import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalScreen from './screens/JournalScreen';
import NotesScreen from './screens/NotesScreen';
import TodoScreen from './screens/TodoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, swipeEnabled: true }}>
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Todo" component={TodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}