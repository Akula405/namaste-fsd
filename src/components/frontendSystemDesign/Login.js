import React from "react";
import { useFormik } from "formik";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      alert("Form Values Submitted " + values.name);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name Required";
      }
      if (!values.email) {
        errors.email = "Email Required";
      }
      if (!values.password) {
        errors.password = "Password Required";
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            className="border border-black p-1"
            placeholder="Enter Name...."
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>
        {formik.errors.name ? (
          <p className="text-red-500">{formik.errors.name}</p>
        ) : null}

        <br />

        <label htmlFor="email">
          <input
            type="email"
            id="email"
            className="border border-black p-1"
            placeholder="Enter Email...."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </label>
        {formik.errors.email ? (
          <p className="text-red-500">{formik.errors.email}</p>
        ) : null}

        <br />

        <label htmlFor="password">
          <input
            type="password"
            id="password"
            className="border border-black p-1"
            placeholder="Enter Password...."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        {formik.errors.password ? (
          <p className="text-red-500">{formik.errors.password}</p>
        ) : null}

        <br />
        <div>
          <button className="p-2 bg-slate-600 rounded-md m-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
