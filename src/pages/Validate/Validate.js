import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, ValidateContainerStyled } from "./ValidateStyles";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../axios/axios.user";
import { validateInitialValues } from "../../formik/initialValues";
import { validateValidationSchema } from "../../formik/validationSchema";
import { setCurrentUser, setVerified } from "../../redux/user/userSlice";

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.verified) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Valida tu cuenta!</h1>
      <h2>Hemos enviado tu código de validación a tu email.</h2>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values) => {
          const verificationResult = await verifyUser(
            currentUser.email,
            values.code
          );

          if (verificationResult === "success") {
            dispatch(setVerified());
            navigate("/");
          } else {
            navigate("/validate")
          }
        }}
      >
        <Form>
          <LoginInput name="code" type="code" placeholder="Ingresa el código" />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
