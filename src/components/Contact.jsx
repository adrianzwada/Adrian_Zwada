import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { publicKey } from '../constants/config.js'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactMe = ({ contactRef }) => {
	const form = useRef()
	const [capVal, setCapVal] = useState(null)
	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm('service_l26gxcl', 'template_o7b4b76', form.current, {
				publicKey: publicKey,
			})
			.then(
				() => {
					alert('SUCCESS! email sended')
				},
				error => {
					alert('FAILED...', error.text)
				}
			)
		e.target.reset()
	}
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
			<div ref={contactRef} className='flex flex-wrap items-center justify-center w-full '>
				<form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 text-black '>
					<input
						type='text'
						placeholder='Full Name'
						name='user_name'
						required
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-blue-300'
					/>
					<input
						type='email'
						placeholder='Email address'
						name='user_email'
						required
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-blue-300 '
					/>
					<input
						type='text'
						placeholder='Subject'
						name='Subject'
						required
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-blue-300'
					/>
					<textarea
						name='message'
						cols='30'
						rows='10'
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-cyan-500 ring-0 outline-0 transition-all duration-300 px-3 py-2  text-blue-300'
						placeholder='Message'
					></textarea>
					<ReCAPTCHA sitekey='6LeodvcpAAAAAG4aLE-MFO1kVepA7sTe15mDNTri' onChange={val => setCapVal(val)} theme='dark' />
					<button
						disabled={!capVal}
						type='submit'
						className='rounded-full bg-gradient-to-r from-pink-300  to-purple-500 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold'
						value='Send'
					>
						Send
					</button>
				</form>
			</div>
		</motion.div>
	)
}
export default ContactMe
