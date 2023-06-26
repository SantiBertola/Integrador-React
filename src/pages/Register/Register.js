import React from 'react'


import {
    Form,
    LoginContainerStyled,
    LoginEmailStyled,
} from '../Register/RegisterStyles';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { createUser } from '../../axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';
import Submit from '../../components/UI/Submit/Submit';
import LoginInput from '../../components/UI/LoginInput/LoginInput'







const Register = () => {

    const dispatch = useDispatch();
    const { state } = useLocation();

    useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/')




    return (
        <LoginContainerStyled>
            <h1 style={{ color: '#e4584f', padding: '5px' }}>¿Primera vez por aquí? Registrate con tus datos</h1>
            <Formik
                initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={
                    async (values, actions) => {
                    const user = await createUser(values.nombre, values.email, values.password)
                    actions.resetForm()
                    if (user) {
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }
                }}
            >
                <Form>
                    <LoginInput type='text' name='nombre' placeholder='Nombre' required />
                    <LoginInput type='email' name='email' placeholder='Email' required />
                    <LoginInput type='password' name='password' placeholder='Contraseña' required />

                    <LoginEmailStyled to='/login'>
                        <p>¿Ya tenes cuenta? Inicia sesión</p>
                    </LoginEmailStyled>
                    <Submit type='submit'>
                        Registrarte
                    </Submit>
                </Form>
            </Formik>

        </LoginContainerStyled>
    )
}

export default Register