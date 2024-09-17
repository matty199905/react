import React from 'react';

import { ErrorMessageStyled, InputBoxStyled, InputLabelStyled, InputStyled } from './InputStyles';
import { ErrorMessage, Field } from 'formik';

const Input = ({ children, htmlFor, type, id, placeholder, name, isError }) => {
  return (
    <InputBoxStyled>

      <InputLabelStyled
        htmlFor={htmlFor}>

        {children}

      </InputLabelStyled>

      <Field
        name={name}
        as={InputStyled}
        type={type}
        id={id}
        placeholder={placeholder}
        error={isError} />


      <ErrorMessage name={name} component={ErrorMessageStyled} />

    </InputBoxStyled>


  );
};

export default Input;
