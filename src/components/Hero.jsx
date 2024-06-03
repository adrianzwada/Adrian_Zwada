import { HERO_CONTENT } from '../constants/index.js'
import profileremovebg from '../assets/profile-v3.jpg'
const Hero = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<div className='flex flex-wrap'>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col items-center lg:items-start'>
						<h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Adrian Zwada</h1>
						<span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'>
							Web Publisher / Front End Developer
						</span>
						<p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
					</div>
				</div>
				<div className='w-full lg:w-1/3 lg:p-2 ml-10'>
					<div className='flex justify-center'>
						<img className='rounded-2xl' src={profileremovebg} alt='Adrian Zwada' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero
