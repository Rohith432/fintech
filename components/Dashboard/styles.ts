import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomeText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconPlaceholder: {
    color: '#94A3B8',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  netWorthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  netWorthLabel: {
    color: '#94A3B8',
    fontSize: 14,
  },
  netWorthValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  netWorthChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  netWorthChangeText: {
    color: '#10B981',
    fontSize: 14,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 65, 85, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  balanceLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },
  balanceValue: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  addMoneyButton: {
    backgroundColor: '#135bec',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  addMoneyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#135bec',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  loanIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  loanDetails: {
    flex: 1,
  },
  loanType: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '500',
  },
  loanDueDate: {
    color: '#94A3B8',
    fontSize: 12,
  },
  loanAmount: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  billItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  billIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  billDetails: {
    flex: 1,
  },
  billType: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '500',
  },
  billDueDate: {
    color: '#94A3B8',
    fontSize: 12,
  },
  payButton: {
      backgroundColor: 'rgba(19, 91, 236, 0.2)',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
  },
  payButtonText: {
      color: '#135bec',
      fontWeight: 'bold',
      fontSize: 14
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '500',
  },
  transactionDate: {
    color: '#94A3B8',
    fontSize: 12,
  },
  transactionAmountPositive: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '500',
  },
  transactionAmountNegative: {
    color: '#F87171',
    fontSize: 14,
    fontWeight: '500',
  },
});
