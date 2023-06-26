import React from 'react'
import { CategoriesButtons } from './CategoriasStyle'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/CategoriesSlice'

const Categoria = ({ title, category}) => {
  const selectedCategory = useSelector(state => state.categories.selectedCategory)
  const dispatch = useDispatch()

  return (
    <CategoriesButtons
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
    >
        <h3>{title}</h3>
    </CategoriesButtons>
  )
}

export default Categoria