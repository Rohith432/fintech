import { SCREEN_DATA } from '../../constants/data';

export const useLoans = () => {
  const data = SCREEN_DATA.loansScreen;

  const getStatusStyle = (status: 'Overdue' | 'Active' | 'Completed') => {
    switch (status) {
      case 'Overdue':
        return {
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          color: '#EF4444',
        };
      case 'Active':
        return {
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          color: '#10B981',
        };
      default:
        return {
          backgroundColor: 'rgba(100, 116, 139, 0.1)',
          color: '#64748B',
        };
    }
  };

  return {
    data,
    getStatusStyle,
  };
};
