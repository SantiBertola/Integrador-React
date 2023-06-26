import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios.orders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';

const MisOrdenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);

  useEffect(() => {
    if (currentUser?.token) {
      getOrders(dispatch, currentUser);
    } else {
      dispatch(fetchOrdersFail());
    }
    error && dispatch(clearError());
  }, [dispatch, currentUser?.token, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
};

export default MisOrdenes;
