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
  headerSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#135bec',
    fontWeight: 'bold',
    marginLeft: 4,
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
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subCardTitle: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  borrowerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borrowerTextInfo: {
    flex: 1,
    marginLeft: 16,
  },
  borrowerName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  borrowerPhone: {
    color: '#94A3B8',
    fontSize: 14,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '600',
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    gap: 16,
  },
  summaryItem: {
    flexBasis: '45%', // Roughly 2 items per row with gap
  },
  highlightedItem: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderRadius: 8,
    padding: 8,
  },
  summaryLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },
  summaryValue: {
    color: '#F1F5F9',
    fontWeight: '500',
    marginTop: 4,
  },
  originationInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 12,
    marginTop: 12,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tagText: {
    color: '#135bec',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  historyListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  historyIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  historyDescription: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '500',
  },
  historyDate: {
    color: '#94A3B8',
    fontSize: 12,
  },
  paymentListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  paymentDate: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '500',
  },
  paymentDetails: {
     color: '#94A3B8',
    fontSize: 12,
  },
  paymentAmount: {
      color: '#22C55E',
      fontWeight: '500',
  },
  fullHistoryButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334155',
    borderRadius: 8,
    marginTop: 16,
  },
  fullHistoryButtonText: {
    color: '#135bec',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actionButtonsContainer: {
      paddingBottom: 16,
      gap: 12,
  },
  button: {
      height: 48,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
  },
  buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF'
  },
  redButton: {
      backgroundColor: 'rgba(220, 38, 38, 0.8)',
  },
  primaryButton: {
      backgroundColor: '#135bec'
  },
  buttonRow: {
      flexDirection: 'row',
      gap: 12,
  },
  secondaryButton: {
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
  },
  tertiaryButton: {
      backgroundColor: '#334155',
  }
});
