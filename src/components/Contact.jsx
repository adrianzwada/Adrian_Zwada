import { CONTACT } from '../constants/index.js'
const ContactMe = () => {
	return (
		<div className='border-b border-neutral-900 pb-20'>
			<h2 className='my-10 text-center text-4xl'>Contact Me</h2>
			<div className='text-center tracking-tighter'>
				<a href='#' className='border-b'>
					Email: {CONTACT.email}
				</a>
			</div>
		</div>
	)
}
export default ContactMe
