import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, ToastAndroid, Image } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';

const image = require('./assets/imagen.jpeg');

const App = () => (
 <ScrollView style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.headingContainer}>
  <Text style={[styles.heading, styles.italicText]}>
    <View style={styles.logoContainer}>
      <Image source={require('./assets/logo.jpeg')} style={styles.logoImage} />
      <Text style={styles.logoText}>Karen y Je</Text>
    </View>
  </Text>
</View>

      
    </ImageBackground>
    <View style={styles.roundedContainer}>
  <View style={styles.form}>
    <Text style={styles.formText}>INGRESAR</Text>
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={require('./assets/email.png')} />
      <TextInput
        style={styles.formTextInput}
        placeholder='Correo electrónico'
        keyboardType='email-address'
      />
    </View>
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={require('./assets/password.png')} />
      <TextInput
        style={styles.formTextInput}
        placeholder='Contraseña'
        keyboardType='default'
        secureTextEntry={true}
      />
    </View>
    <View style={{ marginTop: 30 }}>
    <RoundedButton text='ENTRAR' onPress={ () => ToastAndroid.show('HOLA!', 
    ToastAndroid.SHORT)}/>
    </View>
    <View style={styles.formRegister}>
      <Text>¿No tienes cuenta?</Text>
      <Text style={styles.formRegisterText}>Regístrate</Text>
    </View>
  </View>
</View>

 </ScrollView>
);

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
 image: {
    flex: 1,
    justifyContent: 'center',
 },
 heading: {
    color: 'white',
    fontSize: 22,
    marginBottom: 400,
    lineHeight: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
 },
 button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
 },
 italicText: {
    fontStyle: 'italic',
 },
 roundedContainer: {
   borderRadius: 10, 
   overflow: 'hidden',
   margin: 10,
 },
 form: {
    padding: 20,
    backgroundColor: '#fff',
 },
 formText: {
    fontSize: 24,
    marginBottom: 20,
 },
 formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
 },
 formIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
 },
 formTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
 },
 formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
 },
 formRegisterText: {
    color: 'blue',
    marginLeft: 5,
 },
 headingContainer: {
   alignItems: 'center',
   marginBottom: 2,
   padding: 25,
 },
 logoContainer: {
   flexDirection: 'row',
   marginLeft: 10, 
 },
 logoImage: {
   width: 30,
   height: 30,
   marginLeft:10,
   marginRight: 10,  
 },
 logoText: {
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
 },
 
 });

export default App;

