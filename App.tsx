import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';

import DashboardScreen from './components/Dashboard';
import LoansScreen from './components/Loans';
import LoanDetailsScreen from './components/LoanDetails';
import EditLoanScreen from './components/EditLoan';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#0F172A' }
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="LoanDetails" component={LoanDetailsScreen} />
        <Stack.Screen name="EditLoan" component={EditLoanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
