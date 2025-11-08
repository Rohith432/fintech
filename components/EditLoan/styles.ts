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
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#135bec',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#FFFFFF',
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
    marginBottom: 8,
  },
   subCardTitle: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 16,
  },
  cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
  },
  inputGroup: {
    marginBottom: 12,
    flexBasis: '48%',
  },
  label: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#334155',
    borderColor: '#475569',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#F1F5F9',
  },
  statusPicker: {
      backgroundColor: '#334155',
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 4,
  },
  statusText: {
      color: '#22C55E'
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  },
  highlightedSection: {
      backgroundColor: 'rgba(51, 65, 85, 0.5)',
      borderRadius: 8,
      padding: 12,
      flexBasis: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
  },
  checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
  },
  checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#475569',
      backgroundColor: '#334155',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
  },
  checkboxChecked: {
      width: 12,
      height: 12,
      backgroundColor: '#135bec',
      borderRadius: 2,
  },
  checkboxLabel: {
      color: '#F1F5F9',
      fontSize: 14,
  },
  refiHistoryItem: {
      backgroundColor: 'rgba(51, 65, 85, 0.5)',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
  },
  addButton: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#334155',
      borderRadius: 8,
      marginTop: 8,
  },
  addButtonText: {
      color: '#135bec',
      fontWeight: 'bold',
      marginLeft: 8,
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
    deleteButton: {
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
  }
});
