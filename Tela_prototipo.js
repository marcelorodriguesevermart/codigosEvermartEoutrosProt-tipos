import  React from 'react';
import {  View, StyleSheet, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Text,} from 'react-native';

export default function Home() {
  return (

    <KeyboardAvoidingView style={styles.tela_principal}>
    <View style={styles.logo}>
      
      <Image source={require('../assets/Logotipo.jpg')} /> 
    </View>

    <View style={styles.box}>

          <TextInput

                placeholder="Usuário               Campo Obrigatório "
                autoCorrect={false}
                onChangeText={()=>{}}

          />
 
  
    </View>

    <TouchableOpacity style={ styles.button}>

    <Text style={ styles.text_button}>
            ENTRAR </Text>
    </TouchableOpacity>
   

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
 
  logo: {
   
    
    height: 98,
    width: 138,
    alignItems: 'center',
    justifyContent: 'center',
  },


tela_principal: {
flexGrow: 1,
  backgroundColor: '#292929',
 
  alignItems: 'center',
  justifyContent: 'center',

},


box: {
  
  padding: 10, 
  width: '90%',
  borderRadius: 10,
  backgroundColor: '#ffff',

 
 
},


button:{
margin: 10,
marginBottom: 20,
  width: '90%',
  height: 56,
  borderRadius: 10,

  backgroundColor: '#FFCE00',
  color: '#030202',

},

text_button:{
  
  padding:20,
  textAlign: 'center',
  fontsize: '20',
  textDecorationColor: 'bold',
  fontFamily: 'heuvetica neue '
}
