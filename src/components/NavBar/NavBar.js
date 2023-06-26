import React, { useState } from 'react'
import { NavbarContainerStyled, NavbarLinks, BurgerMenu, CartStyled, UserNavStyled, UserContainerStyled, } from './NavBarStyled'
import Logo from '../../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import CartIcon from './CartIcon/CartIcon'
import ModalCart from './ModalCart/ModalCart'
import ModalUser from './ModalUser/ModalUser'
import MenuIcon from './MenuIcon/MenuIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenMenu } from '../../redux/user/userSlice'

const NavBar = () => {

    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <NavbarContainerStyled>
            <ModalCart />
            <ModalUser />
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <NavbarLinks className={`links ${clicked ? 'active' : ''}`}>
                <Link to="/" onClick={handleClick} >Inicio</Link>
                <Link to="https://www.nba.com/schedule" target='_blank' onClick={handleClick}>NBA</Link>
                <Link to="/productos" onClick={handleClick} >Productos</Link>
                <CartStyled onClick={handleClick}>
                    <CartIcon />
                </CartStyled>
                <UserNavStyled onClick={handleClick}>
                    <UserContainerStyled onClick={() =>
                        currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register')
                    }>
                        <span>{
                            currentUser ? `${currentUser.nombre}` : 'Registrate'
                        }</span>
                    </UserContainerStyled>
                </UserNavStyled>

            </NavbarLinks>

            <BurgerMenu>
                <MenuIcon clicked={clicked} handleClick={handleClick}/>
            </BurgerMenu>
        </NavbarContainerStyled>
    )
}

export default NavBar