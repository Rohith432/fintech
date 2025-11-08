interface Transaction {
  id: string;
  type: string;
  date: string;
  amount: string;
  icon: string;
}

interface Bill {
  id: string;
  type: string;
  due: string;
}

interface DashboardLoan {
  id: string;
  type: string;
  due: string;
  amount: string;
}

interface DashboardData {
  welcome: string;
  name: string;
  netWorth: string;
  balance: string;
  activeLoans: string;
  creditCardBills: string;
  recentTransactions: string;
  loans: DashboardLoan[];
  bills: Bill[];
  transactions: Transaction[];
}

interface Loan {
    id: string;
    name: string;
    phone: string;
    status: 'Overdue' | 'Active' | 'Completed';
    principal: string;
    interestRate: string;
    dueDate: string;
    dueAmount: string;
}

interface LoansScreenData {
    title: string;
    principal: string;
    interest: string;
    searchPlaceholder: string;
    filters: string[];
    loans: Loan[];
}

interface HistoryItem {
    id: string;
    description: string;
    date: string;
}

interface PaymentHistoryItem {
    id: string;
    date: string;
    details: string;
    amount: string;
}

interface LoanDetailsData {
    title: string;
    borrowerName: string;
    borrowerPhone: string;
    loanStatus: string;
    totalPaid: string;
    nextPaymentDue: string;
    originalPrincipal: string;
    outstandingPrincipal: string;
    interestRate: string;
    interestAccrued: string;
    totalRepaid: string;
    originationDate: string;
    history: HistoryItem[];
    paymentHistory: PaymentHistoryItem[];
}

interface EditLoanData {
    title: string;
    borrowerName: string;
    borrowerPhone: string;
    loanStatus: string;
    totalPaid: string;
    nextPaymentDate: string;
    nextPaymentAmount: string;
    originalPrincipal: string;
    outstandingPrincipal: string;
    interestRate: string;
    interestAccrued: string;
    totalRepaid: string;
    dateOriginated: string;
    firstTimeLoan: boolean;
}


interface ScreenData {
  dashboard: DashboardData;
  loansScreen: LoansScreenData;
  loanDetails: LoanDetailsData;
  editLoan: EditLoanData;
}

export const SCREEN_DATA: ScreenData = {
  dashboard: {
    welcome: "Welcome back",
    name: "Alex Johnson",
    netWorth: "$125,843.00",
    balance: "$24,109.50",
    activeLoans: "Active Loans (2)",
    creditCardBills: "Credit Card Bills",
    recentTransactions: "Recent Transactions",
    loans: [
      { id: '1', type: 'Home Mortgage', due: 'Due Nov 25 - $2,100.00', amount: '$250,430' },
      { id: '2', type: 'Auto Loan', due: 'Due Dec 01 - $450.00', amount: '$12,800' },
    ],
    bills: [
      { id: '1', type: 'Platinum Card', due: 'Due Nov 28 - $854.12' },
    ],
    transactions: [
      { id: '1', type: 'Groceries Store', date: 'October 28, 2023', amount: '-$124.50', icon: 'shopping_bag' },
      { id: '2', type: 'Salary Deposit', date: 'October 27, 2023', amount: '+$3,500.00', icon: 'receipt_long' },
    ]
  },
  loansScreen: {
    title: "Loans Given",
    principal: "$123,550.00",
    interest: "$15,280.50",
    searchPlaceholder: "Search by name or phone...",
    filters: ["Active", "Upcoming", "Overdue", "Completed", "Sort"],
    loans: [
      {
        id: '1',
        name: 'Liam Johnson',
        phone: '(555) 123-4567',
        status: 'Overdue',
        principal: '$5,000.00',
        interestRate: '8.0% APR',
        dueDate: 'Oct 25, 2023',
        dueAmount: '$250.00'
      },
      {
        id: '2',
        name: 'Olivia Chen',
        phone: '(555) 987-6543',
        status: 'Active',
        principal: '$10,000.00',
        interestRate: '6.5% APR',
        dueDate: 'Nov 15, 2023',
        dueAmount: '$450.00'
      }
    ]
  },
  loanDetails: {
    title: "Loan Details",
    borrowerName: "Olivia Chen",
    borrowerPhone: "(555) 987-6543",
    loanStatus: "Active",
    totalPaid: "$4,500.00",
    nextPaymentDue: "Nov 15, 2023 - $450.00",
    originalPrincipal: "$10,000.00",
    outstandingPrincipal: "$6,000.00",
    interestRate: "7.2% APR",
    interestAccrued: "$500.00",
    totalRepaid: "$11,500.00",
    originationDate: "Jan 15, 2022",
    history: [
        { id: '1', description: 'Refinanced to $10,500 @ 7.2%', date: 'Feb 01, 2023' },
        { id: '2', description: 'Original Loan $10,000 @ 6.5%', date: 'Jan 15, 2022' },
    ],
    paymentHistory: [
        { id: '1', date: 'Oct 15, 2023', details: 'Principal: $401.75 | Interest: $48.25', amount: '+$450.00' },
        { id: '2', date: 'Sep 15, 2023', details: 'Principal: $399.80 | Interest: $50.20', amount: '+$450.00' },
        { id: '3', date: 'Aug 15, 2023', details: 'Principal: $397.10 | Interest: $52.90', amount: '+$450.00' },
    ]
  },
  editLoan: {
    title: "Editing Loan",
    borrowerName: "Olivia Chen",
    borrowerPhone: "(555) 987-6543",
    loanStatus: "Active",
    totalPaid: "$4,500.00",
    nextPaymentDate: "2023-11-15",
    nextPaymentAmount: "$450.00",
    originalPrincipal: "$10,000.00",
    outstandingPrincipal: "$6,000.00",
    interestRate: "7.2%",
    interestAccrued: "$500.00",
    totalRepaid: "$11,500.00",
    dateOriginated: "2022-01-15",
    firstTimeLoan: true,
  }
};
