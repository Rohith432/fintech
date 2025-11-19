import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import useRecordNewLoan from './useRecordNewLoan';

const RecordNewLoanScreen = () => {
  const { goBack } = useRecordNewLoan();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Record New Loan</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Borrower Name</Text>
            <View style={styles.inputContainer}>
              <Icon name="person" size={20} color="#94A3B8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="e.g., John Doe"
                placeholderTextColor="#64748B"
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Borrower Phone Number</Text>
            <View style={styles.inputContainer}>
              <Icon name="phone" size={20} color="#94A3B8" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="(555) 123-4567"
                placeholderTextColor="#64748B"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Total Loan Amount</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencySymbol}>$</Text>
              <TextInput
                style={[styles.input, styles.amountInput]}
                placeholder="10,000.00"
                placeholderTextColor="#64748B"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.flex1]}>
              <Text style={styles.label}>Loan Duration</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="5"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                />
                <Text style={styles.unit}>years</Text>
              </View>
            </View>
            <View style={[styles.inputGroup, styles.flex1]}>
              <Text style={styles.label}>Interest</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="7.5"
                  placeholderTextColor="#64748B"
                  keyboardType="numeric"
                />
                <Text style={styles.unit}>%</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loan Type</Text>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.loanTypeButton, styles.activeLoanType]}>
                <Text style={[styles.loanTypeText, styles.activeLoanTypeText]}>First Time Loan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loanTypeButton}>
                <Text style={styles.loanTypeText}>Refinance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={goBack}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecordNewLoanScreen;
