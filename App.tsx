import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RootTabParamList, LoansStackParamList } from './navigation/types';

import DashboardScreen from './components/Dashboard';
import LoansScreen from './components/Loans';
import LoanDetailsScreen from './components/LoanDetails';
import EditLoanScreen from './components/EditLoan';
import CardsScreen from './components/Cards';
import SettingsScreen from './components/Settings';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<LoansStackParamList>();

const LoansStack = () => (
  <Stack.Navigator
    initialRouteName="LoansList"
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#0F172A' },
    }}
  >
    <Stack.Screen name="LoansList" component={LoansScreen} />
    <Stack.Screen name="LoanDetails" component={LoanDetailsScreen} />
    <Stack.Screen name="EditLoan" component={EditLoanScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1E293B',
            borderTopColor: '#334155',
            paddingTop: 8,
            paddingBottom: 8,
            height: 60,
          },
          tabBarActiveTintColor: '#135bec',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'dashboard';
            } else if (route.name === 'Cards') {
              iconName = 'credit-card';
            } else if (route.name === 'Loans') {
              iconName = 'account-balance';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
              {route.name}
            </Text>
          ),
        })}
      >
        <Tab.Screen name="Home" component={DashboardScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
        <Tab.Screen name="Loans" component={LoansStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
