import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { ProductosXCategorias } from '../../data/Products';
import { useSelector } from 'react-redux';


const CardsProductos = () => {

  console.log(ProductosXCategorias)
// OBJECT.ENTRIES == Se encarga de tranformar un objeto en un ARRAY de ARRAYS
  console.log(Object.entries(ProductosXCategorias))
  


  const products = useSelector()


  return (
    <>
      <ProductosContainer>
{
  Object.entries(ProductosXCategorias).map(([key, arrayProductos])=>{return arrayProductos.map((product)=>{return <CardProducto {...product} key={product.id}/>})
  })
  

}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
