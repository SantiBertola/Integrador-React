import React from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  Divider,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../redux/user/userSlice';
import { ModalUserOverlayStyled } from './ModelUserStyles';



const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <>
      {!hiddenMenu && (
        <ModalUserOverlayStyled
          onClick={() => dispatch(toggleHiddenMenu())}
          isHidden={hiddenMenu}
        />
      )}

      <AnimatePresence>
        {!hiddenMenu && (
          <ModalContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ duration: 0.5 }}
            key='cart-user'
          >
            <UsernameStyled>{`Hola ${currentUser?.nombre}`}</UsernameStyled>
            <Divider />
            <LinkStyled to='/misordenes' onClick={() => { dispatch(toggleHiddenMenu()) }}>Mis Ordenes</LinkStyled>
            <span onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleHiddenMenu())
            }}>Cerrar Sesion</span>
          </ModalContainerStyled>
        )}
      </AnimatePresence>
    </>

  );
};

export default ModalUser;
