import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound'
import CardsProducts from '../components/Productos/CardsProducts';
import Checkout from '../pages/Checkout/Checkout'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes'
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Resumen from '../pages/Resumen/Resumen'

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/productos' element={<CardsProducts />} />
      <Route path='/misordenes' element={<MisOrdenes />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />
      <Route path='/resumen/:orderId' element={<Resumen />} />



      <Route path='/checkout' element={
        <ProtectedRoute redirectTo='/register'>
          <Checkout />
        </ProtectedRoute>
      } />


      <Route path='*' element={<NotFound />} />
    </ReactDomRoutes>
  )
}

export default Routes