import logo from '../assets/Logo/logo-no-background-v2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

const NavBar = () => {
	return (
		<nav className='mb-4 flex items-center justify-between py-6 bgc:red w-full '>
			<div className='flex flex-shrink-0 items-center'>
				<img className='w-100 rounded-sm object-cover h-12 mx-2' src={logo} alt='Logo' />
			</div>
			<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
				<FaLinkedin className='' />
				<FaGithub />
				<SiCodewars />
			</div>
		</nav>
	)
}
export default NavBar
