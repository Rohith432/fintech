import { useNavigation } from '@react-navigation/native';

const useRecordNewLoan = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return {
    goBack,
  };
};

export default useRecordNewLoan;
