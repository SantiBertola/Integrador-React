import React, { useEffect, useState } from 'react';

import CardResumen from '../../components/Resumen/CardResumen';

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  Divider,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './ResumenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../axios/axios.orders';
import { Link } from 'react-router-dom';

const Resumen = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser)
  const orders = useSelector(state => state.orders.orders)
  const dispatch = useDispatch()
  const { orderId } = useParams()

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }
    setVisitedOrder(orders?.find(order => order._id === orderId))
  }, [orderId, currentUser?.id, orders, dispatch])

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?._id.slice(0, 7)}</h1>
        <h2>Productos:</h2>
      </ResumenTitleStyled>
      <Link to='/misordenes'>Volver</Link>
      <ProductsContainerStyled>
        {
          visitedOrder?.items.map(item => (
            <CardResumen key={item._id} {...item} />
          ))
        }
      </ProductsContainerStyled>
      <Divider />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total: </p>
          <span>{(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
