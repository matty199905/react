import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { registerInitialValues } from '../../Formik/initialState';
import { registerValidationSchema } from '../../Formik/validationSchema';
import { createUser } from '../../axios/axiosUser';
import { useNavigate } from 'react-router-dom';

const Register = () => {

const navigate = useNavigate()

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>

      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={ async (values, {resetForm})=>{
          const user = await createUser(values.name, values.email, values.password);
          console.log(user);
         // resetForm()
          

          if(user) {
                 navigate('/login')
          }
        }}>

        <Form>

          <LoginInput 
          type='text' 
          placeholder='Nombre'
          name='name'
          id='name' />

          <LoginInput 
          type='text' 
          placeholder='Email'
          name='email'
          id='email' />

          <LoginInput 
          type='password' 
          placeholder='Password'
          name='password'
          id='password' />

          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>

          <Submit>
            Registrarte
          </Submit>

        </Form>

      </Formik>

    </LoginContainerStyled>
  );
};

export default Register;
