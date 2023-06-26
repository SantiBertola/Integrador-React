import React from 'react'

import { Form, LoginContainerStyled, LoginEmailStyled } from '../Login/LoginStyles';
import { useDispatch } from 'react-redux';
import { useRedirect } from '../../hooks/useRedirect';
import { Formik } from 'formik';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { loginUser } from '../../axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';
import Submit from '../../components/UI/Submit/Submit';
import LoginInput from '../../components/UI/LoginInput/LoginInput';

const Login = () => {
    const dispatch = useDispatch()
    useRedirect('/')


    return (
        <LoginContainerStyled>
            <h1 style={{ color: '#e4584f', padding: '5px' }}>Accede a la plataforma</h1>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={async (values) => {
                    const user = await loginUser(values.email, values.password)
                    if (user) {
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }
                }}
            >
                <Form>
                    <LoginInput type='email' name='email' placeholder='Correo electronico' />
                    <LoginInput type='password' name='password' placeholder='Contraseña' />

                    <LoginEmailStyled to='/register'>
                        <p>¿No tienes una cuenta? Registrate aquí</p>
                    </LoginEmailStyled>
                    <Submit type='button'>
                        Iniar sesión
                    </Submit>
                </Form>

            </Formik>


        </LoginContainerStyled>

    )
}


export default Login