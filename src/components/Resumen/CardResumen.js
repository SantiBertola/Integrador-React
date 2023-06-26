import React from 'react';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './CardResumenStyles';

const CardResumen = ({ id, name, product, price, category, cardImg, quantity }) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={cardImg}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <p>{product}</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
