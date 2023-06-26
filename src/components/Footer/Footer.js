import React from 'react'
import { FooterContainerStyled, FooterLinks } from './FooterStyled'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterLinks>
                <div>
                    <ul>
                        <h4>Ayuda</h4>
                        <li><Link to="/">Mis Pedidos</Link></li>
                        <li><Link to="/">Atención a clientes</Link></li>
                        <li><Link to="/">All Star Basketball</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Institucional</h4>
                        <li><Link to="/">¿Quiénes somos?</Link></li>
                        <li><Link to="/">¿Donde estamos?</Link></li>
                        <li><Link to="/">Aviso de Privacidad</Link></li>
                        <li><Link to="/">Términos y condiciones</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Contacto</h4>
                        <li><Link to="/">AllStarBasketball@gmail.com</Link></li>
                        <li><Link to="/">+54 11 123456</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Síguenos</h4>
                        <li><Link to="https://www.instagram.com/" target="_blank">Instagram</Link></li>
                        <li><Link to="https://www.Facebook.com/" target="_blank">Facebook</Link></li>
                        <li><Link to="https://www.Twitter.com/" target="_blank">Twitter</Link></li>
                    </ul>
                </div>
            </FooterLinks>
        </FooterContainerStyled>
    )
}

export default Footer