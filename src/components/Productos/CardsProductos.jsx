import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { ProductosXCategorias } from '../../data/Products';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';


const CardsProductos = () => {

  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const totalProducts = useSelector(state => state.products.TotalProducts)

  console.log(ProductosXCategorias)
  // OBJECT.ENTRIES == Se encarga de tranformar un objeto en un ARRAY de ARRAYS
  console.log(Object.entries(ProductosXCategorias))



  let products = useSelector(state => state.products.products)
  //Reemplaza a PRODUCTOSXCATEGORIA desde el STORAGE

  const selectedCategory = useSelector(state => state.categories.selectedCategory)


  if (selectedCategory) { // Si hay categoria Seleccionada filtramos la coincidencia

    products = {
      selectedCategory: products[selectedCategory]
    }

  }


  return (
    <>
      <ProductosContainer>
        {
          Object.entries(products).map(([key, food]) => {
            return food.map((product) => {

              if (limit >= product.id || selectedCategory) {
                return <CardProducto {...product} key={product.id} />
              } else { return null }
            })
          })
        }

      </ProductosContainer>

      {

        !selectedCategory &&
        <ButtonContainerStyled>
          <Button
            onClick={()=> setLimit(prevLimit=> prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT >= limit}
          >
            <span>Ver menos</span>
          </Button>

          <Button onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>
            <span>
              Ver mas
            </span>
          </Button>
        </ButtonContainerStyled>

      }
    </>
  );
};

export default CardsProductos;
