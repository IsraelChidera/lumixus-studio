"use client"

import React, { useState } from 'react';
import Container from '@/app/components/Elements/Container';
import { motion } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import { LuPlus } from "react-icons/lu";

const Faq = () => {

    const [active, setActive] = useState<number | null>(0);

    function handleActive(index: number) {
        active === index ? setActive(null) : setActive(index);
    }

    const faqs = [
        {
            id: 1,
            question: `What makes Graft different from other AI tools?`,
            answer: `Graft is tailored for African businesses with localized insights, multilingual support, and industry-specific prompts to ensure culturally relevant and practical outputs.`
        },
        {
            id: 2,
            question: `Can I try Graft before committing to a paid plan?`,
            answer: `Yes! Graft offers a free trial so you can explore its features before making a commitment. This allows you to test the platform and see if it fits your needs before upgrading to a paid plan.`
        },

        {
            id: 3,
            question: `What industries does Graft support?`,
            answer: `Graft is designed to support a wide range of industries, including finance, healthcare, e-commerce, logistics, marketing, and more. Its flexible and customizable features make it a great fit for businesses of all sizes and sectors.`
        },
        {
            id: 4,
            question: `Does Graft support collaboration?`,
            answer: `Absolutely! Graft includes robust collaboration tools that allow teams to work together seamlessly. You can share projects, assign tasks, leave comments, and track progress in real-time, ensuring smooth workflow and communication
            `
        },
        {
            id: 5,
            question: `How secure is my data on Graft?`,
            answer: `Security is a top priority at Graft. We use industry-leading encryption, secure cloud storage, and regular security updates to protect your data. Additionally, role-based access controls ensure that only authorized users can view or edit sensitive information.`
        },
        {
            id: 6,
            question: `Can I upgrade or downgrade my plan?`,
            answer: `Yes! Graft offers flexible pricing plans, allowing you to upgrade or downgrade at any time. You can adjust your subscription based on your needs, ensuring you only pay for the features and capacity that suit your business.`
        },
    ]

    return (
        <section className='py-[80px]'>
            <Container>
                <div className='flex justify-center mb-12 items-center'>
                    <p className='text-sm lg:text-base text-text w-fit'>
                        Frequently Asked Questions
                    </p>
                </div>

                <h2 className='text-text text-[34px] lg:text-[40px] text-center font-bold mt-6'>
                    Got Questions? We've Got Answers
                </h2>

                <div className='mt-6 lg:mt-[68px] '>
                    {
                        faqs.map((faq, _) => (
                            <div key={faq.id} className={` pb-4 px-6 mb-[32px] ${active === _ ? "bg-[#0e0e0e] rounded-[6px] py-8" : ""} `}>
                                <div className="flex items-center justify-between">
                                    <p className="text-text text-lg lg:text-[20px] font-semibold">
                                        <p
                                            dangerouslySetInnerHTML={{ __html: faq.question }}
                                        />
                                    </p>

                                    {
                                        active === _ ?
                                            <IoMdClose onClick={() => handleActive(_)} className='text-[32px] cursor-pointer' />
                                            :
                                            <LuPlus onClick={() => handleActive(_)} className='text-[32px] cursor-pointer' />
                                    }
                                </div>

                                {
                                    active === _ ? (
                                        <motion.p
                                            initial={{
                                                y: 100,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                // damping: 70,
                                                duration: 4,
                                            }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1
                                            }}
                                            className='mt-6 text-base lg:text-[17px] font-normal text-text'
                                        >
                                            <p
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </motion.p>
                                    ) :
                                        null
                                }

                            </div>
                        ))
                    }

                </div>
            </Container>
        </section>
    )
}

export default Faq