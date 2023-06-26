import React from 'react';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
  QuantityHandler
} from './ModalCartStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../../redux/cart/cartSlice';

const ModalCartCard = ({ id, name, product, price, category, cardImg, quantity }) => {
  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
      <img
        src={cardImg}
        alt={name}
      />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled>{product}</TextStyled>
        <PriceStyled>{price}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <QuantityHandler
          onClick={() => dispatch(removeToCart(id))}
        >
          <FaMinus/>
        </QuantityHandler>
        <div style={{color: '#e4584f'}}>{quantity}</div>
        <QuantityHandler onClick={() => dispatch(addToCart({ id, name, product, price, category, cardImg, quantity }))}>
          <BsPlusLg />
        </QuantityHandler>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;