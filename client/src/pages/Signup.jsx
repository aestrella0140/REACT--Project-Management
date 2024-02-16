import React from 'react';
import { useFormik, Form, Field } from 'formik';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
    const [createUser, { loading }] = useMutation(ADD_USER);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            createUser({ variables: values })
                .then(respones => {
                    const { data } = respones;
                    const { email, password } = values;
                    return Auth.login(email, password)
                })
                .then(() => {
                    alert('User created and logged in');
                })
                .catch(error => {
                    console.log(error);
                    alert('couldnt create user or log in');
                });
        },
    });
    return (
        <div className='signup'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <h2>Signup here!</h2>
                <label htmlFor="firstName">first Name</label>
                <input
                    type='firstName'
                    name='firstName'
                    id='firstName'
                    placeholder='enter first name here'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type='lastName'
                    name='lastName'
                    id='lastName'
                    placeholder='enter last name here'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='enter email here'
                    onChange={formik.handleChange}
                    value={formik.values.firstName} />

                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    name='password'
                    id='pwd'
                    placeholder='enter password here'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>


    );
};

export default SignupForm;
