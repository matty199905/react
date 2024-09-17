import React, { useRef } from 'react';

import Categorias from '../../components/Categorias/Categorias';
import CardsProductos from '../../components/Productos/CardsProductos';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';
import Hero from '../../components/Hero/Hero';

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from './HomeStyles';




function Home() {

const productsRef = useRef();// Guardamos la referencia de la seccion


const doScrollOnSearch = () => {
  // funcion para scrollear a la seccion productos luego de buscar
  window.scrollTo(
    productsRef.current.getBoundingClientRect().x,//le pasamos el REF, y obtiene el eje X y Y
    productsRef.current.getBoundingClientRect().y,
  )
}


  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero scroll={doScrollOnSearch}/>

      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2>Hoy te recomendamos</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      {/* Populares Section*/}
      <ProductosWrapper ref={productsRef}>
        <h2>Nuestros productos</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
