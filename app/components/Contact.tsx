"use client"
import React, { useState } from 'react';
import Container from '@/app/components/Elements/Container';
import Button2 from '@/app/components/Elements/Button2';
import { Formik, Field, Form } from 'formik';


type InitialValuesProps = {
    email: string,
    firstname: string,
    lastname: string,
    message: string
}

type ErrorsProps = {
    email?: string,
    firstname?: string,
    lastname?: string,
    message?: string
}

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    // const [formValues, setFormValues] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     message: '',
    // });



    const initialValues: InitialValuesProps = {
        email: "",
        firstname: "",
        lastname: "",
        message: ""
    }

    const validateForm = (values: InitialValuesProps) => {
        const errors: ErrorsProps = {}

        if (!values.firstname) {
            errors.firstname = "First name is required";
        } else if (values.firstname.length <= 3) {
            errors.firstname = 'Must be 3 characters or more';
        }

        if (!values.lastname) {
            errors.lastname = "First name is required";
        } else if (values.lastname.length <= 3) {
            errors.lastname = 'Must be 3 characters or more';
        }

        if (!values.message) {
            errors.message = "Message is required";
        } else if (values.message.length <= 3) {
            errors.message = 'Must be 3 characters or more';
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    }

    const onContactFormSubmission = async (values: any) => {
        console.log(values);
        setSubmitting(true);
        setSuccess(true);

        if(values){
            setSubmitting(false);
            window.open(`mailto:lumixousstudio@gmail.com?subject=${`Contact%20Form%20Message%20-%20${values.firstname}%20${values.lastname}`}&body=${`${values.message}`}`, '_blank');
        }

    }   

    return (
        <section id="contact">
            <Container className='mt-[154px] relative pb-[100px]'>
                <p data-aos="fade-up" className='uppercase text-center text-sm font-medium'>
                    Contact us
                </p>

                <h2 data-aos="fade-up" className='gradient-animation-light mt-[22px] leading-normal text-center text-[48px] font-medium'>
                    Let's Get in Touch And Make Magic Together.
                </h2>

                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values, { resetForm }: { resetForm: any }) => {
                        onContactFormSubmission(values);
                        resetForm({ values: '' });
                    }}
                >
                    {
                        (
                            { values, errors, touched, handleChange, }:
                                {
                                    values: any, errors: any,
                                    touched: any, handleChange: any,
                                }
                        ) => (
                            <>
                                <Form data-aos="fade-up" className='mt-4'>
                                    <div className='md:grid grid-cols-3 md:space-y-0 space-y-6 md:gap-x-4 gap-y-8 '>
                                        <div>
                                            <Field
                                                type="text"
                                                placeholder='First Name'
                                                name="firstname"
                                                id="firstname"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                className='w-full p-5 focus:outline-none'
                                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                                required
                                            />
                                            <p className='text-xs text-red-700'>
                                                {errors.firstname && touched.firstname && errors.firstname}
                                            </p>
                                        </div>

                                        <div>
                                            <Field
                                                type="text"
                                                placeholder='Last Name'
                                                name="lastname"
                                                id="lastname"
                                                value={values.lastname}
                                                onChange={handleChange}
                                                className='w-full p-5 focus:outline-none'
                                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                                required
                                            />
                                            <p className='text-xs text-red-700'>
                                                {errors.lastname && touched.lastname && errors.lastname}
                                            </p>
                                        </div>

                                        <div>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                placeholder='Email'
                                                className='w-full p-5 focus:outline-none'
                                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                                required
                                            />
                                            <p className='text-xs text-red-700'>
                                                {errors.email && touched.email && errors.email}
                                            </p>
                                        </div>

                                        <div className='col-span-3'>
                                            <textarea
                                                rows={6}
                                                name="message"
                                                id="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                className='w-full p-5 focus:outline-none'
                                                placeholder='Message'
                                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                            ></textarea>
                                            <p className='text-xs text-red-700'>
                                                {errors.message && touched.message && errors.message}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex w-full items-center justify-center'>
                                        <Button2>
                                            <span className='text-sm'>
                                                {submitting ? "Sending message . . ." : "Send Message"}
                                            </span>
                                        </Button2>
                                    </div>
                                </Form>
                            </>
                        )
                    }
                </Formik>
            </Container>
        </section >
    )
}

export default Contact