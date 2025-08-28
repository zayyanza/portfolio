import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o3c17r7', 'template_sntq7ko', form.current, {
                publicKey: 'uWPr406tRNA9FzEmP',
            })
    };

    return (
        <section id='contact' className='p-24'>
            <div className='mb-25'>
                <h2 className='text-4xl text-primary mb-8'>Contact</h2>
                <div className='flex gap-4 items-center'>
                    <MdOutlineMail className='text-3xl'></MdOutlineMail>
                    <p className='text-xl'>zayyanrahmady@gmail.com</p>
                </div>
                
            </div>

            <div className=''>
                <div className='text-2xl mb-8'>Or, send a message</div>
                <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-8'>
                    <input type="text" name="name" placeholder="Name" id="" className='p-3 border-2 border-solid border-primary-variant rounded-2xl ' />
                    <input type="email" name="email" placeholder="Email" id="" className='p-3 border-2 border-solid border-primary-variant rounded-2xl' />
                    <textarea name="message" id="" placeholder='Message' className='h-40 p-3 border-2 border-solid border-primary-variant rounded-2xl'></textarea>
                    <button className='btn' type='submit'>Send</button>
                </form>
            </div>

        </section>
    )
}

export default Contact