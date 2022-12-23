import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import "./Form.css";

export default class Formy extends Component {
  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{
            name: "",
            email: "",
            last: "",
            phone: "",
            sherh: "",
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert("Muvefeqiyyet  " + JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            Ad
            <Field name="name" type="text" required minLength="3" maxLength="20"/>
            Soyad
            <Field name="last" type="text" required minLength="3" maxLength="20"/>
            Telefon
            <Field name="phone" type="number" required max="9999999"/>
            Email
            <Field name="email" type="email" required/>
            Sherh
            <Field name="sherh" type="text" required maxLength="200"/>
            <button type="submit">Gonder</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
