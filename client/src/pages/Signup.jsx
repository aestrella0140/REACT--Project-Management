import React from 'react';
import { useFormik } from 'formik';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>first Name</label>
            <input
                type='text'
                name='firstName'
                id='firstName'
                onChange={formik.handleChange}
                value={formik.values.lastName} />

            <label htmlFor='lastName'>Last Name</label>
            <input
                type='text'
                name='lastName'
                id='lastName'
                onChange={formik.handleChange}
                value={formik.values.email} />

            <label htmlFor='email'>email</label>
            <input
                type='email'
                name='email'
                id='email'
                onChange={formik.handleChange}
                value={formik.values.firstName} />

            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id='pwd'
                onChange={formik.handleChange}
                value={formik.values.password} />

        </form>
    )
}
