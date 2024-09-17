import React from 'react';

import Categoria from '../Categorias/Categoria'
import { CategoriasContainer } from './CategoriasStyles';
import { Categories } from '../../data/Categories';
import { useSelector } from 'react-redux';


const Categorias = () => {

const categories = useSelector(state => state.categories.categories)
// USE SELECTOR = Llama al SLICE de Categoria
return (
    <CategoriasContainer>
  {categories.map((category)=>{return <Categoria {...category} key={category.id}/>})}
    </CategoriasContainer>
  );
};

export default Categorias;
