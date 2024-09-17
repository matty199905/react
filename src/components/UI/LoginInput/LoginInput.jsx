import React from 'react';

import { ErrorMessageStyled, InputContainerStyled, LoginInputStyled } from './LoginInputStyles';
import { ErrorMessage, Field } from 'formik';



const LoginInput = ({ type, placeholder, isError, name, id }) => {
  return (

    <InputContainerStyled>

      <Field
        type={type}
        placeholder={placeholder}
        as={LoginInputStyled}
        error= {isError}
        name={name}
        id={id} />

      <ErrorMessage name={name} component={ErrorMessageStyled} />

    </InputContainerStyled>
  );

};

export default LoginInput;
