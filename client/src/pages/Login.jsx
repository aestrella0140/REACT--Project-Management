import React from 'react';
import { useFormik } from 'formik';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            loginUser({ variables: values })
                .then(response => {
                    const { data } = response;
                    const { email, password } = values;
                    return Auth.login(email, password)
                })
                .then(() => {
                    alert('user logged in');
                })
                .catch(error => {
                    console.log(error);
                    alert('couldnt login user');
                });
        },
    });
    return (
        <div className='Login'>
            <h2>Login here!</h2>
            <form  className='loginForm' onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Enter email here'
                    name='email'
                    id='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Enter password here'
                    name='password'
                    id='pwd'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {error ? (
                    <div>
                        <p>Please check if your email or password is correct.</p>
                    </div>
                ) : null}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};

export default LoginForm;