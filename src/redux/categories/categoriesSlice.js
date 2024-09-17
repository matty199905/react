import { createSlice } from '@reduxjs/toolkit';
import { Categories } from '../../data/Categories';



const INITIAL_STATE = {
  categories: Categories,
  selectCategory: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: state => {
      return state;
    },
    selectCategories: (state, action) => {
      return {...state,
        selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
      }
    }
  }
});



export const { getCategories, selectCategories} = categoriesSlice.actions;
// Permite usarlo luego para un DISPATCH (evento dentro del componente)


export default categoriesSlice.reducer;
// Exporta todo el Slice
