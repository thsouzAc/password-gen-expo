import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import savePassword from '../../SavePasswords/index';
import { ItemSenha } from './componenteLIsta/index';

export function PagSenhas() {
  const [listaSenha, setListaSenha] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [novaInformacao, setNovaInformacao] = useState('');
  const [selectedPassword, setSelectedPassword] = useState(null);
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

  function handleSelectPassword(selectedPassword) {
    setSelectedPassword(selectedPassword);
    setModalVisible(true);
  }

  async function handleSaveNewInformation() {
    if (novaInformacao.trim() !== '') {
      // Aqui você pode associar a nova informação à senha selecionada como desejar
      // Por exemplo, você pode ter um objeto que mantém as informações vinculadas a cada senha
      // e atualizá-lo aqui
      setModalVisible(false);
      setNovaInformacao('');
    }
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
              <TouchableOpacity onPress={() => handleSelectPassword(item)}>
                <Text style={styles.plusButton}>+</Text>
              </TouchableOpacity>
              <ItemSenha data={item} removeSenha={() => handleRemove(item)} />
            </View>
          )}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua nova informação"
              onChangeText={(text) => setNovaInformacao(text)}
              value={novaInformacao}
            />
            <View style={styles.modalButtonContainer}>
              <Button title="Salvar" onPress={handleSaveNewInformation} style={styles.modalButton} color="black" />
              <View style={{ width: 10 }}></View>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} style={styles.modalButton} color="black" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: 'black',
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 13,
    paddingRight: 1,
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
  plusButton: {
    fontSize: 20,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  modalButton: {
    marginHorizontal: 10,
  },
});