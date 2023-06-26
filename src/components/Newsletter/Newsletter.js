import React from 'react'
import { Form, SelectInput, TextAreaInput } from "./NewsletterStyles"
import { Formik } from 'formik'
import { newsletterInitialValues } from '../../formik/initialValues'
import { newsletterValidationSchema } from '../../formik/validationSchema'
import Input from '../UI/Input/Input'
import Submit from '../UI/Submit/Submit'



const Newsletter = () => {
    return (
        <Formik
            initialValues={newsletterInitialValues}
            validationSchema={newsletterValidationSchema}        
        >
            <Form>
                    <label for="nombre" style={{ fontWeight: "600", marginTop: '15px' }}>NOMBRE: </label>
                    <Input type="text" name="nombre" placeholder="Ingrese su nombre" required />



                    <label for="apellido" style={{ fontWeight: "600" }}>APELLIDO: </label>
                    <Input type="text" name="apellido" placeholder="Ingrese su apellido" required />
                  


                    <label for="mail" style={{ fontWeight: "600" }}>G-MAIL: </label>
                    <Input type="email" name="email" placeholder="Ingrese su correo electrónico" required />
                  


                    <label for="phone" style={{ fontWeight: "600" }}>TÉLEFONO: </label>
                    <Input type="phone" name="cellphone" placeholder="Ingrese su número de télefono" required />
                  



                    <label for="genero" style={{ fontWeight: "600" }}>GENERO:</label>
                    <SelectInput name="genero" required>
                        <option value="Tugenero" disabled>Elige tu genero</option>
                        <option value="menos18">Hombre</option>
                        <option value="1925">Mujer</option>
                        <option value="2635">Prefiero no decirlo</option>
                    </SelectInput>




                    <label for="edad" style={{ fontWeight: "600" }}>EDAD: </label>
                    <SelectInput name="edad" required>
                        <option value="Tuedad" disabled>Elige tu rango de edad</option>
                        <option value="menos18">Menos de 18 años</option>
                        <option value="1925">19 a 25 años</option>
                        <option value="2635">26 a 35 años</option>
                        <option value="3650">36 a 50 años</option>
                        <option value="mas51">Más de 51 años</option>
                    </SelectInput>


                    <label for="sugest" style={{ fontWeight: "600" }}>SUGERENCIAS Y COMENTARIOS: </label>
                    <TextAreaInput name="sugest" cols="30" rows="5"
                        placeholder="Cosas a mejorar, productos que les gustarían, opinión de la pagina, etc..."></TextAreaInput>



                <Submit type="submit" name="Envíar">Enviar</Submit>


            </Form>

        </Formik>




    )
}

export default Newsletter