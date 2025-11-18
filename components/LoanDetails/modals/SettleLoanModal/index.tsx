import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const SettleLoanModal = ({ visible, onClose }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.modalBackdrop}>
      <View style={styles.modalContainer}>
        <View style={styles.handle} />
        <ScrollView>
          <Text style={styles.headerTitle}>Finalize Loan Settlement Status</Text>
          <Text style={styles.subtitle}>How was the outstanding principal of $6,000.00 resolved for this loan?</Text>

          <View style={styles.radioGroup}>
            <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radioIcon} />
                <Text style={styles.radioLabel}>Fully Paid (Closed)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radioIcon} />
                <Text style={styles.radioLabel}>Refinanced into New Loan</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={[styles.radioButton, styles.selectedRadio]}>
                    <View style={styles.radioIcon} />
                    <Text style={[styles.radioLabel, styles.selectedLabel]}>Partially Paid / Settled Amount</Text>
                </TouchableOpacity>
                <View style={styles.selectedContent}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Amount Paid Today</Text>
                        <View style={styles.inputWithIcon}>
                            <Text style={styles.currencySymbol}>$</Text>
                            <TextInput style={styles.input} value="5000.00" />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Amount Written Off (Calculated)</Text>
                         <View style={styles.inputWithIcon}>
                            <Text style={styles.currencySymbol}>$</Text>
                            <TextInput style={styles.input} value="1000.00" editable={false} />
                        </View>
                    </View>
                </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Settlement Date</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value="2023-11-20"
              />
              <Text style={styles.iconPlaceholder}>calendar_today</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirm Settlement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettleLoanModal;
