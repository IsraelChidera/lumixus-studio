"use client"
import React, { useState } from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import { FiArrowDownRight } from "react-icons/fi";
import Link from 'next/link';


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

    const validateForm = (values: InitialValuesProps) => {
        const errors: ErrorsProps = {}

        if (!values.firstname) {
            errors.firstname = "First name is required";
        } else if (values.firstname.length <= 3) {
            errors.firstname = 'Must be 3 characters or more';
        }

        if (!values.lastname) {
            errors.lastname = "Last name is required";
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

    return (
        <section id="contact">
            <Container className='mt-[154px] relative pb-10'>


                <div className='flex justify-center items-center'>
                    <p className='text-sm lg:text-base text-text w-fit'>
                        Contact us
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center space-x-1">
                        <h2 className='uppercase text-text text-[30px] lg:text-[70px] text-center font-bold'>
                            Walk with us
                        </h2>

                        <FiArrowDownRight className='text-primary text-[60px]' />
                    </div>
                </div>

                <div className='flex justify-center mt-4 w-full'>
                    <Link href="https://cal.com/lumixus-studio/30min" className=' block'>
                        <Button className='w-fit text-[16px]'>
                            <span className='block'>Get started for free</span>
                        </Button>
                    </Link>
                </div>
                <div className='flex justify-center mt-2'>
                    <p className="flex items-center space-x-2 ">
                        <Link className="block hover:underline underline-offset-4" href="https://www.instagram.com/lumixus_studio/">
                            Instagram
                        </Link>
                        <span className="block ">|</span>
                        <Link className="block hover:underline underline-offset-4" href="mailto:lumixusstudio@gmail.com">
                            Email us
                        </Link>
                    </p>
                </div>
            </Container>
        </section >
    )
}

export default Contact