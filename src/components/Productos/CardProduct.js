import React from 'react'
import { ProductosCard, CardTittles, PriceContainer, ShowMoreButton } from './CardsProductsStyled'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'


const CardProduct = ({ id, name, product, price, category, cardImg }) => {
    const dispatch = useDispatch()
    
    return (
        <ProductosCard>
            <img src={cardImg} alt={name} />
            <CardTittles>
                <h2>{name}</h2>
                <p>{product}</p>
            </CardTittles>
            <PriceContainer>
                <ShowMoreButton onClick={() => dispatch(addToCart({ id, name, product, price, category, cardImg }))}>{price}</ShowMoreButton>
            </PriceContainer>

        </ProductosCard>
    )
}

export default CardProduct