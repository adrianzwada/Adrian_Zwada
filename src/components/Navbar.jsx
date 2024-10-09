import logo from '../../assets/Logo/logo-no-background-v2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { CONTACT } from '../constants'

const NavBar = () => {
	return (
		<nav className='mb-4 flex items-center justify-between py-6 bgc:red w-full '>
			<div className='flex flex-shrink-0 items-center'>
				<img className='w-100 rounded-sm object-cover h-12 mx-2' src={logo} alt='Logo' />
			</div>
			<div className='m-8 flex items-center justify-center gap-4 text-2xl '>
				<a href={CONTACT.linkedin} className='hover:text-cyan-300' aria-label='Visit my LinkedIn profile'>
					<FaLinkedin />
				</a>
				<a href={CONTACT.github} className='hover:text-cyan-300' aria-label='Visit my Github profile'>
					<FaGithub />
				</a>
				<a href={CONTACT.codewars} className='hover:text-cyan-300 ' aria-label='Visit my Codewars profile'>
					<SiCodewars />
				</a>
			</div>
		</nav>
	)
}
export default NavBar
