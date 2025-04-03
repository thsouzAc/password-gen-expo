import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import {customText} from '../../../modal/index'
export function ItemSenha({ data, removeSenha }) {
  return (
    <View style={styles.box3}>
      <Text>{data}</Text>
      <Text></Text>
      <Button onPress={removeSenha} style={styles.button}>
        <Text style={styles.buttonText}>x</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  box3: {
    backgroundColor: 'gainsboro',
    width: '100%',
    padding: 10,
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gainsboro',
    borderRadius: 50, 
    width: 24, 
    height: 24,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
