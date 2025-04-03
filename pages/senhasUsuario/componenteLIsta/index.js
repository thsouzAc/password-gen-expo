import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ItemSenha({ data, removeSenha }) {
  return (
    <View style={styles.box3}>
      <Text style={styles.textSenha}>{data}</Text>
      <TouchableOpacity onPress={removeSenha} style={styles.button}>
        <Ionicons name="trash-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box3: {
    backgroundColor: 'gainsboro',
    width: '100%',
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textSenha: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});