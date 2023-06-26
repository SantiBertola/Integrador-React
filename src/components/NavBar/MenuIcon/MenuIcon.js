import React from 'react'
import { Burguer } from './MenuIconStyles';

const MenuIcon = ({handleClick, clicked}) => {

  return (
    <Burguer>
      <div  onClick={handleClick} 
            className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  )
}

export default MenuIcon