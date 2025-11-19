import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#94A3B8',
    fontSize: 14,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#FFF',
    height: 48,
  },
  amountInput: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  currencySymbol: {
    position: 'absolute',
    left: 16,
    top: 12,
    color: '#94A3B8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  flex1: {
    flex: 1,
  },
  unit: {
    color: '#94A3B8',
    fontWeight: '500',
  },
  loanTypeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#334155',
    backgroundColor: '#1E293B',
  },
  activeLoanType: {
    borderColor: '#135bec',
    backgroundColor: 'rgba(19, 91, 236, 0.2)',
  },
  loanTypeText: {
    color: '#94A3B8',
    fontWeight: 'bold',
  },
  activeLoanTypeText: {
    color: '#135bec',
  },
  footer: {
    padding: 16,
    backgroundColor: '#0F172A',
  },
  saveButton: {
    backgroundColor: '#135bec',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#94A3B8',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
