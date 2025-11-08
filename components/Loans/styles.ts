import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101622',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  newLoanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  newLoanButtonText: {
    color: '#135bec',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  iconPlaceholder: {
    color: '#135bec',
    fontSize: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
  },
  summaryLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },
  summaryValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  filtersContainer: {
    marginTop: 24,
  },
  searchInput: {
    height: 48,
    backgroundColor: '#334155',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  filterButton: {
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#334155',
    borderRadius: 20,
  },
  activeFilterButton: {
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#135bec',
    borderRadius: 20,
  },
  filterText: {
    color: '#CBD5E1',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  loanCard: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  borrowerName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  borrowerPhone: {
    color: '#94A3B8',
    fontSize: 14,
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardBody: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },
  infoValue: {
    color: '#F1F5F9',
    fontWeight: '500',
  },
  infoLabelDue: {
      color: '#F59E0B',
      fontSize: 12,
  },
  infoValueDue: {
      color: '#F59E0B',
      fontWeight: '500',
  }
});
