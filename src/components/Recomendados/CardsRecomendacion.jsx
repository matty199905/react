import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { recommended } from '../../data/Recommended';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
   {recommended.map((product) => {return <CardRecomendacion {...product} key={product.key}/>})}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
