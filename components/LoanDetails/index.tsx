import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import { styles } from './styles';
import { useLoanDetails } from './useLoanDetails';
import RecordPaymentModal from './modals/RecordPaymentModal';
import HaltInterestModal from './modals/HaltInterestModal';
import SettleLoanModal from './modals/SettleLoanModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type LoanDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoanDetails'>;
type LoanDetailsScreenRouteProp = RouteProp<RootStackParamList, 'LoanDetails'>;

type Props = {
  navigation: LoanDetailsScreenNavigationProp;
  route: LoanDetailsScreenRouteProp;
};

const LoanDetailsScreen = ({ navigation, route }: Props) => {
  const { loanId } = route.params;
  const { data } = useLoanDetails();
  const [isRecordPaymentVisible, setRecordPaymentVisible] = useState(false);
  const [isHaltInterestVisible, setHaltInterestVisible] = useState(false);
  const [isSettleLoanVisible, setSettleLoanVisible] = useState(false);

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyListItem}>
        <View style={styles.historyIconContainer}>
            <Text style={styles.iconPlaceholder}>history</Text>
        </View>
        <View>
            <Text style={styles.historyDescription}>{item.description}</Text>
            <Text style={styles.historyDate}>{item.date}</Text>
        </View>
    </View>
  );

  const renderPaymentItem = ({ item }) => (
     <View style={styles.paymentListItem}>
        <View>
            <Text style={styles.paymentDate}>{item.date}</Text>
            <Text style={styles.paymentDetails}>{item.details}</Text>
        </View>
        <Text style={styles.paymentAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.iconPlaceholder}>arrow_back</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerSubtitle}>{data.title}</Text>
          <Text style={styles.headerTitle}>{data.borrowerName}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditLoan', { loanId })}>
            <Text style={styles.iconPlaceholder}>edit</Text>
            <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Borrower Information</Text>
        <View style={styles.borrowerInfo}>
            <View style={styles.avatar}>
                <Text style={styles.iconPlaceholder}>person</Text>
            </View>
            <View style={styles.borrowerTextInfo}>
                <Text style={styles.borrowerName}>{data.borrowerName}</Text>
                <Text style={styles.borrowerPhone}>{data.borrowerPhone}</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconPlaceholder}>phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconPlaceholder}>chat_bubble</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Loan Summary & Current Status</Text>
            <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{data.loanStatus}</Text>
            </View>
        </View>
        <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Total Amount Paid</Text>
                <Text style={[styles.summaryValue, { color: '#22C55E' }]}>{data.totalPaid}</Text>
            </View>
            <View style={[styles.summaryItem, styles.highlightedItem]}>
                <Text style={[styles.summaryLabel, { color: '#F59E0B' }]}>Next Payment Due</Text>
                <Text style={[styles.summaryValue, { color: '#F59E0B' }]}>{data.nextPaymentDue}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Original Principal</Text>
                <Text style={styles.summaryValue}>{data.originalPrincipal}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Outstanding Principal</Text>
                <Text style={styles.summaryValue}>{data.outstandingPrincipal}</Text>
            </View>
             <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Interest Rate</Text>
                <Text style={styles.summaryValue}>{data.interestRate}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Total Interest Accrued</Text>
                <Text style={styles.summaryValue}>{data.interestAccrued}</Text>
            </View>
            <View style={[styles.summaryItem, { flexBasis: '100%' }]}>
                <Text style={styles.summaryLabel}>Total to be Repaid</Text>
                <Text style={styles.summaryValue}>{data.totalRepaid}</Text>
            </View>
        </View>
      </View>

       <View style={styles.card}>
            <Text style={styles.cardTitle}>Loan Origination & History</Text>
            <View style={styles.originationInfo}>
                <View>
                    <Text style={styles.summaryLabel}>Date Originated</Text>
                    <Text style={styles.summaryValue}>{data.originationDate}</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.iconPlaceholder}>emoji_events</Text>
                    <Text style={styles.tagText}>First Time Loan</Text>
                </View>
            </View>
             <Text style={styles.subCardTitle}>Refinancing History</Text>
            <FlatList
                data={data.history}
                renderItem={renderHistoryItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
       </View>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>Payment History</Text>
            <FlatList
                data={data.paymentHistory}
                renderItem={renderPaymentItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
            <TouchableOpacity style={styles.fullHistoryButton}>
                <Text style={styles.fullHistoryButtonText}>View Full Payment History</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={[styles.button, styles.redButton]} onPress={() => setHaltInterestVisible(true)}>
                <Text style={styles.iconPlaceholder}>block</Text>
                <Text style={styles.buttonText}>Stop Interest Calculations</Text>
            </TouchableOpacity>
             <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={() => setRecordPaymentVisible(true)}>
                <Text style={styles.iconPlaceholder}>add_card</Text>
                <Text style={styles.buttonText}>Record Payment</Text>
            </TouchableOpacity>
            <View style={styles.buttonRow}>
                 <TouchableOpacity style={[styles.button, styles.secondaryButton, { flex: 1 }]}>
                    <Text style={styles.iconPlaceholder}>notifications</Text>
                    <Text style={[styles.buttonText, { color: '#135bec' }]}>Send Reminder</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={[styles.button, styles.tertiaryButton, { flex: 1 }]} onPress={() => setSettleLoanVisible(true)}>
                    <Text style={styles.iconPlaceholder}>check_circle</Text>
                    <Text style={[styles.buttonText, { color: '#94A3B8' }]}>Mark as Settled</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    <Modal
        animationType="slide"
        transparent={true}
        visible={isRecordPaymentVisible}
        onRequestClose={() => setRecordPaymentVisible(false)}
    >
        <RecordPaymentModal visible={isRecordPaymentVisible} onClose={() => setRecordPaymentVisible(false)} />
    </Modal>
    <Modal
        animationType="slide"
        transparent={true}
        visible={isHaltInterestVisible}
        onRequestClose={() => setHaltInterestVisible(false)}
    >
        <HaltInterestModal visible={isHaltInterestVisible} onClose={() => setHaltInterestVisible(false)} />
    </Modal>
    <Modal
        animationType="slide"
        transparent={true}
        visible={isSettleLoanVisible}
        onRequestClose={() => setSettleLoanVisible(false)}
    >
        <SettleLoanModal visible={isSettleLoanVisible} onClose={() => setSettleLoanVisible(false)} />
    </Modal>
    </>
  );
};

export default LoanDetailsScreen;
