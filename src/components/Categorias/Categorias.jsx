import React from 'react';

import Categoria from '../Categorias/Categoria'
import { CategoriasContainer } from './CategoriasStyles';
import { Categories } from '../../data/Categories';


const Categorias = () => {
return (
    <CategoriasContainer>
  {Categories.map((categoria)=>{return <Categoria {...categoria} key={categoria.id}/>})}
    </CategoriasContainer>
  );
};

export default Categorias;
