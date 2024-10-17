import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { publicKey } from '../constants/config.js';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaPublicKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactMe = ({ contactRef }) => {
  const form = useRef();
  const [formContent, setFormContent] = useState({
    user_name: '',
    user_email: '',
    Subject: '',
    message: '',
    captcha: ''
  });
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormContent({ ...formContent, [name]: value });
    setRecaptchaNeeded(true);
  };

  const sendEmail = e => {
    e.preventDefault();

    if (!formContent.captcha) {
      alert('Please complete the CAPTCHA');
      return;
    }

    emailjs
      .sendForm('service_l26gxcl', 'template_o7b4b76', form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('SUCCESS! Email sent');
        },
        error => {
          alert('FAILED...', error.text);
        }
      );
    e.target.reset();
    setRecaptchaNeeded(true);
  };

  const onReCAPTCHAChange = async captchaCode => {
    if (!captchaCode) {
      return;
    }
    setFormContent({ ...formContent, captcha: captchaCode });
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='container mx-auto px-4 py-16'
    >
      <h2 className='my-20 text-center text-4xl uppercase'>
        Contact
        <span className='text-center text-neutral-500'> Me</span>
      </h2>
      <div ref={contactRef} className='flex flex-wrap items-center justify-center w-full'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 text-black'>
          <input
            type='text'
            placeholder='Full Name'
            name='user_name'
            value={formContent.user_name}
            onChange={handleChange}
            required
            className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-blue-300'
          />
          <input
            type='email'
            placeholder='Email address'
            name='user_email'
            value={formContent.user_email}
            onChange={handleChange}
            required
            className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-blue-300'
          />
          <input
            type='text'
            placeholder='Subject'
            name='Subject'
            value={formContent.Subject}
            onChange={handleChange}
            required
            className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-blue-300'
          />
          <textarea
            name='message'
            cols='30'
            rows='10'
            value={formContent.message}
            onChange={handleChange}
            className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-blue-300'
            placeholder='Message'
          ></textarea>

          <div className='flex justify-center'>
            {recaptchaNeeded && (
              <ReCAPTCHA
                sitekey={recaptchaPublicKey}
                onChange={onReCAPTCHAChange}
                theme='dark'
              />
            )}
          </div>

          <button
            type='submit'
            className='rounded-full bg-gradient-to-r from-pink-300 to-purple-500 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold'
            disabled={formContent.captcha === ''}
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
