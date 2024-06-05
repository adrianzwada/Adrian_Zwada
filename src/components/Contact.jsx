import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { publicKey } from '../constants/config.js'
import { motion } from 'framer-motion'
const ContactMe = () => {
	const form = useRef()
	const contactRef = useRef()
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
			ref={contactRef}
			className='container mx-auto px-4 py-16'
		>
			<h2 className='my-20 text-center text-4xl uppercase'>
				Contact
				<span className='text-center text-neutral-500'> Me</span>
			</h2>
			<div className='flex flex-wrap items-center justify-center w-full '>
				<form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 text-black '>
					<input
						type='text'
						placeholder='Full Name'
						name='user_name'
						required
						className='px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-2 focus:ring-1 bg-black'
					/>
					<input
						type='email'
						placeholder='Email address'
						name='user_email'
						required
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[blue-800] ring-0 outline-0 transition-all duration-300 px-4 py-3 '
					/>
					<input
						type='text'
						placeholder='Subject'
						name='Subject'
						required
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
					/>
					<textarea
						name='message'
						cols='30'
						rows='10'
						className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 '
						placeholder='Message'
					></textarea>
					<button
						type='submit'
						// className='px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 '
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
