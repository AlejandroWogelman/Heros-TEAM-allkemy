import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { GlobalState } from "../Context/GlobalState";

//Input del SEARCH para busqueda de nuevos personajes

export const InputsSearch = () => {
  const { handleFETCH } = useContext(GlobalState);

  return (
    <>
      <Formik
        initialValues={{
          heroName: "",
        }}
        validate={(val) => {
          let errores = {};
          if (!val.heroName) {
            errores.heroName = "Debe ingresar un nombre";
          } else if (val.heroName.trim().length < 2) {
            errores.heroName = "Debe ser mayor a 2 caracteres";
          }
          return errores;
        }}
        onSubmit={({ heroName }, { resetForm }) => {
          if (heroName.length > 3) {
            handleFETCH(heroName.trim());
          }
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="form-group">
            <Field
              type="text"
              id="heroName"
              name="heroName"
              autoComplete="no"
              className="form-control"
              placeholder="ingresa un personaje"
            />
            <ErrorMessage
              component={() => (
                <div className="error-input">{errors.heroName}</div>
              )}
            />
            <button className="btn btn-outline-danger" type="submit">
              buscar
            </button>
          </Form>
        )}
      </Formik>

      {/*   <Formik
        initialValues={{
          heroName: "",
        }}
        validate={(val) => {
          let errores = {};
          if (!val.heroName) {
            errores.heroName = "Escribe algo, cuca";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }, {}) => {
          resetForm();
          handleFETCH(valores.heroName);
        }}
      
      >
         // extraigo handleSbumit de formik
          //touched detecta si allgun formulario fue tocado  
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="heroName"
              name="heroName"
              value={values.heroName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.heroName && errors.heroName && (
              <div>{errors.heroName}</div>
            )}
          </form>
        )}
      </Formik> */}
    </>
  );
};
