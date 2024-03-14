import React, { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    name: '',
    lastname: '',
    phone: '',
    image: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const isValidForm = () => {
    if (values.name === '') {
      setErrorMessage('El nombre es requerido');
      return false;
    }
    if (values.lastname === '') {
      setErrorMessage('El apellido es requerido');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('El correo es requerido');
      return false;
    }
    if (values.phone === '') {
      setErrorMessage('El teléfono es requerido');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('La contraseña es requerida');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('La confirmación de contraseña es requerida');
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  const register = async () => {
    if (!isValidForm()) {
      try {
        const response = await RegisterAuthUseCase(values);
        console.log('Result' + JSON.stringify(response));
      } catch (error) {
        console.log('ERROR:', error);
      }
    }
  };

  return {
    ...values,
    onChange,
    register,
    errorMessage
    }
};

export default RegisterViewModel;
