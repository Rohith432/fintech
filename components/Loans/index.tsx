import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { useLoans } from './useLoans';

const LoansScreen = () => {
  const { data, getStatusStyle } = useLoans();

  const renderLoanItem = ({ item }) => (
    <View style={styles.loanCard}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.borrowerName}>{item.name}</Text>
          <Text style={styles.borrowerPhone}>{item.phone}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusStyle(item.status).backgroundColor }]}>
          <Text style={[styles.statusText, { color: getStatusStyle(item.status).color }]}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Principal</Text>
            <Text style={styles.infoValue}>{item.principal}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Interest Rate</Text>
            <Text style={styles.infoValue}>{item.interestRate}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabelDue}>Next Payment Due</Text>
            <Text style={styles.infoValueDue}>{item.dueDate}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Amount Due</Text>
            <Text style={styles.infoValue}>{item.dueAmount}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
        <TouchableOpacity style={styles.newLoanButton}>
          <Text style={styles.iconPlaceholder}>add</Text>
          <Text style={styles.newLoanButtonText}>Record New Loan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Principal Outstanding</Text>
          <Text style={styles.summaryValue}>{data.principal}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Expected Interest</Text>
          <Text style={styles.summaryValue}>{data.interest}</Text>
        </View>
      </View>

      <View style={styles.filtersContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={data.searchPlaceholder}
          placeholderTextColor="#94A3B8"
        />
         <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterButtons}>
            {data.filters.map((filter, index) => (
                 <TouchableOpacity key={index} style={index === 0 ? styles.activeFilterButton : styles.filterButton}>
                    <Text style={index === 0 ? styles.activeFilterText : styles.filterText}>{filter}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>

      <FlatList
        data={data.loans}
        renderItem={renderLoanItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default LoansScreen;
