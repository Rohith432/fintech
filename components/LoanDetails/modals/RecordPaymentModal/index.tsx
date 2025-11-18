import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const RecordPaymentModal = ({ visible, onClose }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.modalBackdrop}>
      <View style={styles.modalContainer}>
        <View style={styles.handle} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Record Payment Received</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.iconPlaceholder}>close</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Payment *</Text>
            <View style={styles.inputWithIcon}>
              <Text style={styles.iconPlaceholder}>calendar_today</Text>
              <TextInput
                style={styles.input}
                value="November 15, 2023"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Total Amount Received</Text>
            <View style={styles.amountInputContainer}>
              <Text style={styles.currencySymbol}>$</Text>
              <TextInput
                style={styles.amountInput}
                value="450.00"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.allocationCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Allocation</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Calculated Suggestion</Text>
              </View>
            </View>
            <View style={styles.suggestionBox}>
              <Text style={styles.suggestionText}>Recommended Interest Due</Text>
              <Text style={styles.suggestionValue}>$48.25</Text>
            </View>
            <View style={styles.allocationInputs}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Allocate to Interest</Text>
                <View style={styles.inputWithIcon}>
                  <Text style={styles.currencySymbolSmall}>$</Text>
                  <TextInput
                    style={styles.input}
                    value="48.25"
                    placeholderTextColor="#94A3B8"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Allocate to Principal</Text>
                <View style={styles.inputWithIcon}>
                  <Text style={styles.currencySymbolSmall}>$</Text>
                  <TextInput
                    style={styles.input}
                    value="401.75"
                    placeholderTextColor="#94A3B8"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Notes (Optional)</Text>
            <TextInput
              style={styles.textArea}
              placeholder="e.g., Late payment, partial payment..."
              placeholderTextColor="#94A3B8"
              multiline
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirm Payment & Update Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecordPaymentModal;
