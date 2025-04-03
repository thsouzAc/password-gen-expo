import {useState} from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from '../../modal/index';


let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%&*123456789"

export function Home() {

  const [size, setSize] = useState(8)
  const [valorSenha, setValorSenha] = useState("")
  const [modalVisabilidade, setModalVisibilidade] = useState(false)


  function geradorSenha () {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++ ) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setValorSenha(password)
    setModalVisibilidade(true)
  }
  return (
      <View style = {styles.container}>
      
        <Image  source={require("../../assets/img2.png")}  
        style = {{marginBottom : 40}}
        />

        <Text style = {styles.text1}> 
          {size} caracteres
        </Text>

        <View style = {styles.area}>  


          <Slider style = {{height : 30}}
           
            minimumValue={8}
            maximumValue={30}
            maximumTrackTintColor = "gray"
            minimumTrackTintColor = "black"
            thumbTintColor = "#8a2be2"
            value = {size}
            onValueChange = { (value) => setSize(value.toFixed(0)) }

        />

        </View>
        <TouchableOpacity 
        onPress = {geradorSenha}
        style = {styles.botao}>
        <Text style = {styles.text2}> GERAR SENHA </Text>
        </TouchableOpacity>
        <Modal visible = {modalVisabilidade} animationType = "fade" transparent = {true}>
        
            <ModalPassword 
            senha = {valorSenha} handleClose = {()=> setModalVisibilidade(false)}
            />
        
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    alignItems : 'center',
  },
  area: {
    marginTop : 10,
    marginBottom :  20,
    backgroundColor : 'gainsboro',
    padding : 3,
    width  : "80%",
    borderRadius : 8,
  },
  text1 : {
    marginBottom : 5,
    fontSize : 25,
    fontWeight : 'bold',
  },
  botao : {
    backgroundColor : "black",
    width : "80%",
    justifyContent : 'center',
    alignItems : 'center',
    padding : 10,
    borderRadius : 8,
  },
  text2 : {
    color : "#FFFF",
    fontSize : 15,
    fontWeight : 'bold',
  }
});
