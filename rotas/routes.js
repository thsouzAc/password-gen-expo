import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/home/index';
import { PagSenhas } from '../pages/senhasUsuario/index';
import { Ionicons } from '@expo/vector-icons';
import { TelaLogin } from '../pages/PagLogin/index';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Gerador de Senha"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen 
        name="Minhas Senhas"
        component={PagSenhas}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return <Ionicons size={size} color={color} name="lock-closed-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}