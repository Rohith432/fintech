import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#1E293B',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    maxHeight: '90%',
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#475569',
    alignSelf: 'center',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  closeButton: {
    padding: 8,
  },
  iconPlaceholder: {
    color: '#94A3B8',
    fontSize: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#94A3B8',
    marginBottom: 8,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3A4B',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A2433',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  currencySymbol: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#94A3B8',
  },
  amountInput: {
    flex: 1,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'right',
    paddingVertical: 16,
  },
  allocationCard: {
    backgroundColor: 'rgba(44, 58, 75, 0.5)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tag: {
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#135bec',
  },
  suggestionBox: {
    backgroundColor: 'rgba(60, 75, 92, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  suggestionText: {
    fontSize: 12,
    color: '#94A3B8',
  },
  suggestionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  allocationInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  currencySymbolSmall: {
    color: '#94A3B8',
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#2C3A4B',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    textAlignVertical: 'top',
    height: 100,
  },
  footer: {
    paddingTop: 8,
  },
  confirmButton: {
    backgroundColor: '#135bec',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: '#2C3A4B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
