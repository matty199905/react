import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/categoriesSlice';




export const Categoria = ({ img, title, category }) => {

  const selectedCategory = useSelector(state => state.categories.selectedCategory)

const dispatch = useDispatch()

  return (
    <CardCategoria
      selected={category == selectedCategory} // si la categoria seleccionada coincide con el nombre de la categoria se pone en color naranja
      onClick={()=> dispatch(selectCategories(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
