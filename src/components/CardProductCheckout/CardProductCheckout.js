import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import {
    CardContainerStyled,
    CardInfoStyled,
    PriceStyled,
    ProductTitleStyled,
    TextStyled,
    QuantityContainerStyled,
    QuantityHandler
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../redux/cart/cartSlice';

const CardProductCheckout = ({ id, name, product, price, category, cardImg, quantity }) => {
    const dispatch = useDispatch()
    return (
        <CardContainerStyled>
            <img
                src={cardImg}
                alt={name}
            />
            <CardInfoStyled>
                <ProductTitleStyled>{name}</ProductTitleStyled>
                <TextStyled>{product}</TextStyled>
                <PriceStyled>{price}</PriceStyled>
            </CardInfoStyled>
            <QuantityContainerStyled>
                <QuantityHandler bgColor='blue' onClick={() => dispatch(removeToCart(id))}>
                    <FaMinus />
                </QuantityHandler>
                <div style={{color: '#e4584f'}}>{quantity}</div>
                <QuantityHandler onClick={() => dispatch(addToCart({ id, name, product, price, category, cardImg, quantity }))}>
                    <BsPlusLg />
                </QuantityHandler>
            </QuantityContainerStyled>
        </CardContainerStyled>
    );
};

export default CardProductCheckout;