import React, { useState } from 'react'
import { ProductosCard, ProductosContainer, ShowMoreButton, ButtonContainer } from './CardsProductsStyled';
import CardProduct from './CardProduct';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../../utils/constants';

const CardsProducts = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory],
    }
  }

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_category, clothes]) =>
          clothes.map(product => {
            if (limit >= product.id || selectedCategory) {
              return <CardProduct key={product.id} {...product} />;
            } else return null;
          })
        )}
      </ProductosContainer>


      {
        !selectedCategory && (
          <ButtonContainer onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}>
            <ShowMoreButton>Ver más</ShowMoreButton>
          </ButtonContainer>
        )
      }

    </>
  )
}

export default CardsProducts