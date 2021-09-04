import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Main({ navigation }) {
  return (
  <ScrollView>
      <Text>Main Page</Text>
      <TouchableOpacity onPress={navigation.goBack()}><Text>Voltar</Text></TouchableOpacity>
  </ScrollView>
  );
}
