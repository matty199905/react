import React from 'react';
import { Formik } from 'formik';
import { Link, redirect, useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './LoginStyles';
import { loginInitialValues } from '../../Formik/initialState';
import { loginValidationSchema } from '../../Formik/validationSchema'
import { loginUser } from '../../axios/axiosUser';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../redux/User/userSlice';
import { current } from '@reduxjs/toolkit';



const Login = () => {

  const dispatch = useDispatch()

  const {currentUser} = useSelector(state=>state.user)

  const navigate = useNavigate()

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>

      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          const user = await loginUser(values.email, values.password);

          console.log(user);

          // si hay un usuruaio logueado hacemos dispatch al setCurrentUser para pasarle la data del usuario
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }));
          }
        }}>

        <Form>

          <LoginInput
            type='text'
            placeholder='Email'
            name='email' />

          <LoginInput
            type='password'
            placeholder='Password'
            name='password' />

          <Link to='/forgot-password'>
          </Link>
          <Link to='/register'>

            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>

          <Submit>
            {
              currentUser == null ? null : navigate("/")
            }
            Ingresar
          </Submit>

        </Form>

      </Formik>

    </LoginContainerStyled>
  );
};

export default Login;
