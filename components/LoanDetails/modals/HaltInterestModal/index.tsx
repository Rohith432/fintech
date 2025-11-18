import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const HaltInterestModal = ({ visible, onClose }: Props) => {
  if (!visible) {
    return null;
  }

  const calendarDays = [
    '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2',
  ];

  return (
    <View style={styles.modalBackdrop}>
      <View style={styles.modalContainer}>
        <View style={styles.handle} />
        <ScrollView>
          <Text style={styles.headerTitle}>Halt Interest Accrual</Text>
          <Text style={styles.subtitle}>Select the date through which interest should be calculated. Interest will cease to accrue after this date.</Text>

          <View style={styles.radioGroup}>
            <TouchableOpacity style={styles.radioButton}>
              <View style={styles.radioIcon} />
              <View>
                <Text style={styles.radioLabel}>As of Today</Text>
                <Text style={styles.radioSublabel}>November 10, 2023</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButton}>
                <View style={styles.radioIcon} />
                <Text style={styles.radioLabel}>Select a Future Date</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity>
                <Text style={styles.iconPlaceholder}>chevron_left</Text>
              </TouchableOpacity>
              <Text style={styles.calendarMonth}>November 2023</Text>
              <TouchableOpacity>
                <Text style={styles.iconPlaceholder}>chevron_right</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calendarGrid}>
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <Text key={day} style={styles.calendarDayHeader}>{day}</Text>
              ))}
              {calendarDays.map((day, index) => (
                <TouchableOpacity key={index} style={styles.calendarDay}>
                  <Text style={day === '18' ? styles.selectedDay : styles.calendarDayText}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.warningBox}>
            <Text style={styles.iconPlaceholder}>warning</Text>
            <Text style={styles.warningText}>Stopping interest accrual typically signifies the final settlement or writing off the remaining interest.</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm & Stop</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HaltInterestModal;
