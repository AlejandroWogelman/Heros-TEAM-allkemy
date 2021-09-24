import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./inputLogin.css";

import { useDispatch } from "react-redux";
import { loginREDUX } from "./../../Redux/authAPP";

//Input del LOGIN

export const InputLogin = () => {
  const [errorSubmit, setErrorSubmit] = useState(false);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(val) => {
        let errores = {};
        //validación PASSWORD
        if (val.password.trim().length > 19) {
          errores.password = "máximo de caracteres alcanzado";
        } else if (val.password.trim().length === 0) {
          errores.password = "campo incompleto";
        }

        //Validación CORREO
        if (val.email.trim().length === 0) {
          errores.email = "campo incompleto";
        } else if (val.email.trim().length === 19) {
          errores.email = "máximo de caracteres alcanzado";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)
        ) {
          errores.email = "email inválido";
        }

        return errores;
      }}
      onSubmit={({ email, password }) => {
        if (password !== "react") {
          setErrorSubmit(true);
          return;
        } else if (email !== "challenge@alkemy.org") {
          return;
        } else {
          dispatch(loginREDUX(password, email));
        }
      }}
    >
      {({ errors }) => {
        return (
          <Form className="input-login ">
            <label htmlFor="email">Correo</label>
            <Field
              type="email"
              id="email"
              name="email"
              autoComplete="no"
              className="form-control"
              placeholder="ejemplo@ejemplo.com"
              maxLength="30"
            />
            {
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="error-input">{errors.email}</div>
                )}
              />
            }
            <label className="mt-3" htmlFor="password">
              Contraseña
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              autoComplete="no"
              className="form-control"
              placeholder="*****"
              maxLength="20"
            />
            {
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="error-input">{errors.password}</div>
                )}
              />
            }
            {errorSubmit && (
              <div className="error-input">
                Password y/o correo no son válidos{" "}
              </div>
            )}
            <button className="btn btn-primary mt-2" type="submit">
              ingresar
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
