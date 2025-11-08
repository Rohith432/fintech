import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useEditLoan } from './useEditLoan';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type EditLoanScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EditLoan'>;
type EditLoanScreenRouteProp = RouteProp<RootStackParamList, 'EditLoan'>;

type Props = {
  navigation: EditLoanScreenNavigationProp;
  route: EditLoanScreenRouteProp;
};

const EditLoanScreen = ({ navigation, route }: Props) => {
  const { loanId } = route.params;
  const { data } = useEditLoan();

  const LabeledInput = ({ label, value, placeholder, multiline, numberOfLines }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.iconPlaceholder}>arrow_back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerSubtitle}>{data.title}</Text>
          <Text style={styles.headerTitle}>{data.borrowerName}</Text>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.iconPlaceholder}>save</Text>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Borrower Information</Text>
        <LabeledInput label="Borrower Name" value={data.borrowerName} />
        <LabeledInput label="Phone Number" value={data.borrowerPhone} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Loan Summary & Current Status</Text>
            {/* This would be a picker/select component in a real app */}
            <View style={styles.statusPicker}>
                <Text style={styles.statusText}>{data.loanStatus}</Text>
            </View>
        </View>
        <View style={styles.grid}>
            <LabeledInput label="Total Amount Paid" value={data.totalPaid} />
            <View style={styles.highlightedSection}>
                <LabeledInput label="Next Payment Due Date" value={data.nextPaymentDate} />
                <LabeledInput label="Next Payment Amount" value={data.nextPaymentAmount} />
            </View>
            <LabeledInput label="Original Principal" value={data.originalPrincipal} />
            <LabeledInput label="Outstanding Principal" value={data.outstandingPrincipal} />
            <LabeledInput label="Interest Rate (APR)" value={data.interestRate} />
            <LabeledInput label="Total Interest Accrued" value={data.interestAccrued} />
            <View style={{ flexBasis: '100%' }}>
                <LabeledInput label="Total to be Repaid" value={data.totalRepaid} />
            </View>
        </View>
      </View>

       <View style={styles.card}>
            <Text style={styles.cardTitle}>Loan Origination & History</Text>
            <LabeledInput label="Date Originated" value={data.dateOriginated} />
             <View style={styles.checkboxContainer}>
                {/* This would be a real checkbox component */}
                <View style={styles.checkbox}>
                    {data.firstTimeLoan && <View style={styles.checkboxChecked} />}
                </View>
                <Text style={styles.checkboxLabel}>First Time Loan</Text>
            </View>

            <Text style={styles.subCardTitle}>Refinancing History</Text>
            {/* Simplified for display */}
            <View style={styles.refiHistoryItem}>
                <LabeledInput label="Refinance Date" value="2023-02-01" />
                <LabeledInput label="Refinance Amount" value="$10,500" />
                <LabeledInput label="Interest Rate" value="7.2%" />
            </View>
             <TouchableOpacity style={styles.addButton}>
                <Text style={styles.iconPlaceholder}>add</Text>
                <Text style={styles.addButtonText}>Add Refinance Event</Text>
            </TouchableOpacity>
       </View>

        <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={[styles.button, styles.redButton]}>
                <Text style={styles.iconPlaceholder}>block</Text>
                <Text style={styles.buttonText}>Stop Interest Calculations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.deleteButton]}>
                <Text style={styles.iconPlaceholder}>delete</Text>
                <Text style={[styles.buttonText, { color: '#F87171' }]}>Delete Loan</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default EditLoanScreen;
