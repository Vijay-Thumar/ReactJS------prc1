import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import scss from '../cssFiles/SignupPage.module.css'
import Header from '../views/Header';

try {
    localStorage.getItem("users") || localStorage.setItem("users", JSON.stringify([]))
} catch (e) {
    console.log(e)
    alert('Look like your browser does not support storage !')
}

let allUsers = null;

// const findtype = localStorage.getItem('user');
// console.log(typeof (findtype));

if (localStorage.getItem('users') === false || localStorage.getItem('users') === '[]') {
    allUsers = [
        {
            key: 1,
            name: 'Vijay',
            email: 'VijayThumar1020@gmail.com',
            password: '12345678',
            confirmPassword: '12345678',
            phone: '9925527262',
        },
        {
            key: 2,
            name: 'Dave',
            email: 'Dave@gmail.com',
            password: '12345678',
            confirmPassword: '12345678',
            phone: '8306826600',
        },
    ]

    // console.log('ifsection');
}
else {
    allUsers = JSON.parse(localStorage.getItem('users'))
    // console.log('else');
}

const validationSchema = Yup.object({
    name: Yup
        .string('enter your name')
        .max(15, 'Name is too larg it must be in between 15 charcters *')
        .min(3, 'Name is too short *')
        .required('Name is Required *'),

    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required *'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required *'),
    confirmPassword: Yup
        .string('Enter Confirm password')
        .oneOf([Yup.ref('password'), null], 'Password dosen\'t match *')
        .required('Confirm password is Required *'),
    phone: Yup
        .string('Enter your number')
        .max(10, 'Maximum 10 10 digits *')
        .min(10, 'Number must be 10 digits *')
        .required('Phone is Required *'),
});



export const SignupFormik = () => (
    <div>
        <Header />
        <div className={`${scss.main_form}`}>
            <h1>Signup Form</h1>
            <Formik
                initialValues={{

                    key: '',
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: '',
                }}
                validationSchema={validationSchema}

                onSubmit={values => {
                    values.key = Math.floor(Date.now() * Math.random());
                    allUsers.push(values);
                    // same shape as initial values
                    localStorage.setItem('users', JSON.stringify(allUsers));
                    alert(JSON.stringify(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={scss.input_element}>
                            <label>Name: </label><br />
                            <Field name="name" />
                            <span className={scss.error_section}> <ErrorMessage name="name" /> </span><br />
                        </div>

                        <div className={scss.input_element}>
                            <label>Email: </label><br />
                            <Field name="email" />
                            <span className={scss.error_section}> <ErrorMessage name="email" /> </span><br />
                        </div>

                        <div className={scss.input_element}>
                            <label>Phone: </label><br />
                            <Field name="phone" />
                            <span className={scss.error_section}> <ErrorMessage name="phone" /> </span><br />
                        </div>

                        <div className={scss.input_element}>
                            <label>Password: </label><br />
                            <Field name="password" />
                            <span className={scss.error_section}> <ErrorMessage name="password" /> </span><br />
                        </div>

                        <div className={scss.input_element}>
                            <label>Confirm Password: </label><br />
                            <Field name="confirmPassword" />
                            <span className={scss.error_section}> <ErrorMessage name="confirmPassword" /> </span><br />
                        </div>

                        <div className={scss.input_element}>
                            <button type="submit"   >Submit</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
);