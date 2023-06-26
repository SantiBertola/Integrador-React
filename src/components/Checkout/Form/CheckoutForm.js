import React from 'react';



import { CheckoutDatosStyled, Formik, Form, ButtonContainer } from './CheckoutFormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/cart/cartSlice';
import { Button } from '../../NavBar/ModalCart/ModalCartStyles';
import Input from '../../UI/Input/Input';
import { checkoutInitialValues } from '../../../formik/initialValues';
import { checkoutValidationSchema } from '../../../formik/validationSchema';
import { createOrder } from '../../../axios/axios.orders';
import Loader from '../../UI/Loader/Loader';


const CheckoutForm = ({ cartItems, shippingCost, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.user);

  return (
    <CheckoutDatosStyled>
      <h2>Finalizá tu compra</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: {...values}
          }

          try {
              await createOrder(orderData, dispatch, currentUser)
              navigate('/felicitaciones')
              dispatch(clearCart())
          } catch (error) {
            alert('Algo salió mal. Intenta de nuevo más tarde.')
          }

        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              htmlFor='nombre'
              name='nombre'
              type='text'
              id='nombre'
              placeholder='Tu nombre'
            >
              Nombre
            </Input>
            <Input
              htmlFor='celular'
              type='text'
              name='cellphone'
              id='celular'
              placeholder='Tu celular'
            >
              Celular
            </Input>
            <Input
              htmlFor='localidad'
              type='text'
              name='location'
              id='localidad'
              placeholder='Tu localidad'
            >
              Localidad
            </Input>
            <Input
              htmlFor='direccion'
              type='text'
              name='address'
              id='dirección'
              placeholder='Tu dirección'
            >
              Dirección
            </Input>
            <ButtonContainer>
              <Button disabled={!cartItems.length}>
              {isSubmitting ? <Loader /> : 'Realizar compra'}
              </Button>
            </ButtonContainer>

          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;