import React from 'react';
import { useFormik } from 'formik';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [loginUser, { loading }] = useMutation(LOGIN_USER);

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
        <form onSubmit={formik.handleSubmit}>

        </form>
    )
};

export default LoginForm;