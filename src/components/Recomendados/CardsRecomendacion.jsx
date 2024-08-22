import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { recommended } from '../../data/Recommended';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recommended.length}>
   {recommended.map((product) => {return <CardRecomendacion {...product} key={product.id}/>})}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
