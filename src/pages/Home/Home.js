import React, { useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import Categorias from '../../components/Categorias/Categorias'
import { HomeWrapper, CategoriasWrapper, ProductosWrapper, NovTittle, NewsletterWrapper, NewsletterTittles } from './HomeStyled'
import CardsProducts from '../../components/Productos/CardsProducts'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
  const productsRef = useRef()

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y,
    )
  }

  return (
    <>
      <HomeWrapper>
        {/* Hero Section */}

        <Hero doScroll={doScroll} />


        {/* Categorias Section */}
        <CategoriasWrapper>
          <h2>👇🏼Nuestras Categorias👇🏼</h2>
          <Categorias />
        </CategoriasWrapper>

        {/* Productos Section*/}
        <ProductosWrapper ref={productsRef}>
          <NovTittle>
            <h2>😎Nuestro stock😎</h2>
            <p>¡Todo lo nuevo para la temporada 2022-23!</p>
          </NovTittle>
          <CardsProducts />
        </ProductosWrapper>

        {/* Newsletter Section*/}

        <NewsletterWrapper>
          <NewsletterTittles>
            <h2>¿Querés enterarte antes que nadie de nuestros nuevos productos y obtener beneficios exclusivos?</h2>
            <h3>🔥 Dejanos tus datos y suscribite a nuestro newsletter 🔥</h3>
          </NewsletterTittles>
          <Newsletter />
        </NewsletterWrapper>

      </HomeWrapper>



    </>


  )
}

export default Home