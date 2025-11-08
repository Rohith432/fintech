import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useDashboard } from './useDashboard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen = ({ navigation }: Props) => {
  const { data } = useDashboard();

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIconContainer}>
        <Text style={styles.iconPlaceholder}>{item.icon}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={item.amount.startsWith('+') ? styles.transactionAmountPositive : styles.transactionAmountNegative}>{item.amount}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.welcomeText}>{data.welcome}</Text>
            <Text style={styles.nameText}>{data.name}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Text style={styles.iconPlaceholder}>search</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.iconPlaceholder}>notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.netWorthContainer}>
          <View>
            <Text style={styles.netWorthLabel}>Net Worth</Text>
            <Text style={styles.netWorthValue}>{data.netWorth}</Text>
          </View>
          <View style={styles.netWorthChange}>
             <Text style={styles.iconPlaceholder}>arrow_upward</Text>
            <Text style={styles.netWorthChangeText}>4.2%</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceValue}>{data.balance}</Text>
          </View>
          <TouchableOpacity style={styles.addMoneyButton}>
            <Text style={styles.addMoneyButtonText}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{data.activeLoans}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Loans')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        {data.loans.map(item => (
          <TouchableOpacity key={item.id} style={styles.loanItem} onPress={() => navigation.navigate('LoanDetails', { loanId: item.id })}>
            <View style={styles.loanIconContainer}>
                <Text style={styles.iconPlaceholder}>home</Text>
            </View>
            <View style={styles.loanDetails}>
                <Text style={styles.loanType}>{item.type}</Text>
                <Text style={styles.loanDueDate}>{item.due}</Text>
            </View>
            <Text style={styles.loanAmount}>{item.amount}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
         <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{data.creditCardBills}</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllText}>Manage</Text>
            </TouchableOpacity>
        </View>
        {data.bills.map(item => (
            <View key={item.id} style={styles.billItem}>
                <View style={styles.billIconContainer}>
                    <Text style={styles.iconPlaceholder}>credit_card</Text>
                </View>
                <View style={styles.billDetails}>
                    <Text style={styles.billType}>{item.type}</Text>
                    <Text style={styles.billDueDate}>{item.due}</Text>
                </View>
                 <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>
        ))}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{data.recentTransactions}</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data.transactions}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
