import * as Yup from 'yup'
import { regEmail } from '../utils'


 export const validationSchema = Yup.object({

     name: Yup
     .string()
     .trim()
     .required('Campo Obligatorio'),

     cellphone: Yup
     .number()
     .required('Campo Obligatorio'),

     location: Yup
     .string()
     .required('Campo Obligatorio'),
     
     adress: Yup
     .string()
     .required('Campo Obligatorio'),
 })



 

 export const registerValidationSchema = Yup.object({

    name: Yup
    .string()
    .required('Este campo es obligatorio'),

    email: Yup
    .string()
    .matches(regEmail, 'Mail no valido')
    .required('Este campo es obligatorio'),

    password: Yup
    .string()
    .min(6, 'minimo de 6 caracteres')
    .required('Este campo es obligatorio') ,

 })



 export const loginValidationSchema = Yup.object({
    
    email: Yup
    .string()
    .matches(regEmail, 'Mail no valido')
    .required('Este campo es obligatorio'),

    password: Yup
    .string()
    .min(6, 'minimo de 6 caracteres')
    .required('Este campo es obligatorio') ,

 })