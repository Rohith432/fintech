import type { NavigatorScreenParams } from '@react-navigation/native';

export type LoansStackParamList = {
  LoansList: undefined;
  LoanDetails: { loanId: string };
  EditLoan: { loanId: string };
};

export type RootTabParamList = {
  Home: undefined;
  Cards: undefined;
  Loans: NavigatorScreenParams<LoansStackParamList>;
  Settings: undefined;
};
