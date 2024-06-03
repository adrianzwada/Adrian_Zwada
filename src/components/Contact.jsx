import React from 'react'
import { useRef } from 'react'
import { CONTACT } from '../constants/index.js' // Assuming CONTACT object exists

const ContactMe = () => {
	const form = useRef()
	const sendEmail = () => {
		// Implement email sending logic here
		console.log('Form submitted!')
	}

	return (
		<div className='container mx-auto px-4 py-16'>
			<h2 className='my-20 text-center text-4xl '>
				Contact
				<span className='text-center text-neutral-500'> Me</span>
			</h2>
			<div className='flex flex-wrap items-center justify-center w-full'>
				<form onSubmit={sendEmail} className='flex flex-col space-y-4'>
					<input
						type='text'
						placeholder='Full Name'
						name='user_name'
						required
						className='px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1'
					/>
					<input
						type='email'
						placeholder='Email address'
						name='user_email'
						required
						className='px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1'
					/>
					<input
						type='text'
						placeholder='Subject'
						name='Subject'
						required
						className='px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1'
					/>
					<textarea
						name='message'
						cols='30'
						rows='10'
						className='px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1'
						placeholder='Message'
					></textarea>
					<button
						type='submit'
						className='px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
					>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
