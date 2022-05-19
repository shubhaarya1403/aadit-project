import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Breathing from "../screens/Breathing";
import Meditation from "../screens/Meditation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{ 
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Breathing') {
              iconName = focused
                ? 'breathing'
                : 'breathing';
            } else if (route.name === 'Meditation') {
              iconName = focused ? '' : '';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Breathing" component={Breathing} />
        <Tab.Screen name="Meditation" component={Meditation} />

      </Tab.Navigator>
  );
}
export default BottomTabNavigator