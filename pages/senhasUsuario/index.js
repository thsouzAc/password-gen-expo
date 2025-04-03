import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import savePassword from '../../SavePasswords/index';
import { ItemSenha } from './componenteLIsta/index';

export function PagSenhas() {
  const [listaSenha, setListaSenha] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const focused = useIsFocused();
  const { getItem, removeItem } = savePassword();

  useEffect(() => {
    async function carregarPass() {
      const password = await getItem("@pass");
      setListaSenha(password);
    }
    carregarPass();
  }, [focused]);

  async function handleRemove(item) {
    const passwords = await removeItem("@pass", item);
    setListaSenha(passwords);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.box1}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          Minhas Senhas
        </Text>
      </View>
      <View style={styles.boxSenhas}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listaSenha}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ItemSenha data={item} removeSenha={() => handleRemove(item)} />
            </View>
          )}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: 'black',
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 13,
    borderRadius: 8,
    marginBottom: 5,
  },
  boxSenhas: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

