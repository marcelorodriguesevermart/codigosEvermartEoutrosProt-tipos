import { } from 'expo-status-bar';
import React, {useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import {Camera} from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';



export default function App() {

  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [hasPermission, setHaspermission] = useState(null);
  const [capturedPhoto, setCapturePhoto] = useState(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    (async () =>{

      const {status} = await Camera.requestCameraPermissionsAsync();
      setHaspermission(status === 'granted');
    })();
  }, []);


  if(hasPermission === null){
    return <View/>;

  }

  if(hasPermission === false){
    return <Text> Acesso Negado!</Text>;
}

async function takePicture(){

  if(camRef){
    const data = await camRef.current.takePictureAsync();
    setCapturePhoto(data.uri);
    setOpen(true);
    console.log(data);
  }

}


return (
  <SafeAreaView style={styles.container}>
    <Camera 
      style={{ flex: 1 }}
      type={type}
      ref={camRef}
>
  <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
  <TouchableOpacity style={{
    position: 'absolute', 
    bottom: 20, 
    left: 20,
    }}
    onPress={ () => {
      setType(
        type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
      );

    }}
    
    
    >

      <Text style={{ fontSize: 20, maginBottom: 13, color: '#FFF'}}>Trocar</Text>

  </TouchableOpacity>
  </View>

  </Camera>

  <TouchableOpacity style={styles.button}>
    <FontAwesome name="camera" size={30} color=" #FFF"/>
  </TouchableOpacity>

  { capturedPhoto && 
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      >

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

    <TouchableOpacity style={{margin: 10}} onPress={ ()=> setOpen(false) }>
      <FontAwesome name="window-close" size={50} color="#FF0000 "/>

    </TouchableOpacity>

      <Image
        style={{ width: '100%', height: 300, borderRadius: 20 }}
          souce={{ uri: capturedPhoto}}
        />
    </View>

      </Modal>
  }


  </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 10,
    height: 50,

  }

});
