import React from 'react'
import Categoria from './Categoria'
import { CategoriesContainer } from './CategoriasStyle'
import { useSelector } from 'react-redux'


const Categorias = () => {
    const categories = useSelector(state => state.categories.categories)

    return (
        <>
            <CategoriesContainer style={{ marginTop: "2rem" }}>
                {
                    categories.map((category) => (
                        <Categoria key={category.id} {...category} />
                    ))
                }
            </CategoriesContainer>
        </>

    )
}

export default Categorias