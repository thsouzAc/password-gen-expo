import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import savePassword from '../SavePasswords/index';

export function ModalPassword({ senha, handleClose }) {

  const {saveItem} = savePassword();

  async function copiarSenha() {


    await Clipboard.setString(senha);
    
    await saveItem("@pass", senha);
    handleClose();
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Senha Gerada</Text>
        <View style={styles.box2}>
          <Pressable onLongPress = {copiarSenha} style={styles.passwordTe}>{senha}</Pressable>
        </View>
        <View style={styles.areaBotao}>
          <TouchableOpacity onPress={handleClose} style={styles.botao}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, styles.botaoSave]} onPress={copiarSenha}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: "85%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 8,
  },
  box2: {
    width: "85%",
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  passwordTe: {
    color: 'white',
    textAlign: 'center',
  },
  areaBotao: {
    flexDirection: 'row',
    width: "85%",
    marginTop: 10,
    justifyContent: 'space-between',
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  },
  botaoSave: {
    backgroundColor: 'gray',
    borderRadius: 8,
  }
});
