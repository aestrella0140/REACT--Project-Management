import React from "react";
import { useFormik } from "formik";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [login, {error, data }] = useMutation(LOGIN_USER);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { data } = await login({ variables: values });
        if (!data || !data.login) {
          throw new Error("no data returned from the server");
        }
        await Auth.login(data.login.token);
        console.log("user logged in");
      } catch (error) {
        console.log("Error:", error.message);
        console.log("Stack trace:", error.stack);
        setErrors({ submit: "could not login in user" });
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="Login">
      <h2>Login here!</h2>
      <form className="loginForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email here"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          placeholder="Enter password here"
          name="password"
          id="pwd"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
        {formik.errors.submit && <div>{formik.errors.submit}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
