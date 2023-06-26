import React, { useState } from 'react'
import { HeroContainerStyled, HeroInfo, HeroLinks, HeroSearchBarStyled, IconWrapperStyled } from './HeroStyled'
import HeroImg from "../../assets/img/Hero-Jordan.png"
import Button from '../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/CategoriesSlice';


const Hero = ({ doScroll }) => {

  const [value, setValue] = useState('');
  const listOfCategories = useSelector(
    state => state.categories.categories
  ).map(category => category.category);
    
  const dispatch = useDispatch();
  
  const handleSubmit = (e, value) => {
    e.preventDefault()

    const newCategory = value.trim().toLowerCase().replace(' ', '') //.split(" ").join('')

    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === newCategory
    )
    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory))
      doScroll()
    } else {
      return alert('Categoria no encontrada')
    }
  }





  return (
    <HeroContainerStyled>
      <HeroInfo>
        <h2>All-Star Basketball</h2>
        <h4>Tu tienda favorita de NBA en Argentina</h4>
        <HeroLinks>
          <HeroSearchBarStyled
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='Ejemplo: Ropa de hombres'
          />
          <Button onClick={e => handleSubmit(e, value) }>Buscar</Button>
        </HeroLinks>

      </HeroInfo>
      <img src={HeroImg} alt='HeroImg' />
    </HeroContainerStyled>
  )
}

export default Hero