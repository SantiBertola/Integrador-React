import React from 'react';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  TotalStyled,
  PriceTotalStyled,
  Divider,
} from './CheckoutProductsStyled';

const CheckoutProducts = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>
        {
          cartItems.length ? (
            cartItems.map(item => <CardProductCheckout key={item.id} {...item} />)
          ) : (
            <p>El carrito está vacío.</p>
          )
        }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{price}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{shippingCost}</span>
        </EnvioStyled>
        <Divider />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{price + shippingCost}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default CheckoutProducts;