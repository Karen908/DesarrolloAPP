import React, {useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, StyleSheet,ToastAndroid, TouchableOpacity } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';


export const HomeScreen = () => {

  const {email, password,errorMessage, onChange,login} =
   useViewModel();
  
   const navigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
      if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
      }, [errorMessage]);


return (
<View style={styles.container}>
<Image
source={require('../../../../assets/imagen.jpeg')}
style={styles.imageBackground}
/>
<View style={styles.logoContainer}>
<Image
source={require('../../../../assets/logo.jpeg')}
style={styles.logoImage}
/>
<Text style={styles.logoText}>FOOD APP</Text>
</View>
<View style={styles.form}>
<Text style={styles.formText}>INGRESAR</Text>
<CustomTextInput
image= {require('../../../../assets/email.png')}
placeholder='Correo electrónico'
keyboardType='email-address'
property='email'
onChangeText={onChange}
value={email}
/>
<CustomTextInput
image= {require('../../../../assets/password.png')}
placeholder='Contraseña'
keyboardType='default'
property='password'
onChangeText={onChange}
value={password}
secureTextEntry={true}
/>
<View style={{ marginTop: 30 }}>
<RoundedButton text='ENTRAR' onPress={() =>{
console.log('Email: ' + email);
console.log('Password: ' + password);
}} />
</View>
<View style={styles.formRegister}>
<Text>¿No tienes cuenta?</Text>
<TouchableOpacity onPress={() =>
navigation.navigate('RegisterScreen')}>
<Text
style={styles.formRegisterText}>Regístrate</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
}


import useViewModel from './viewModel';
