import { HERO_CONTENT } from '../constants/index.js'
import profileremovebg from '../assets/profileremovebg-v2.png'
import { motion } from 'framer-motion'

const containerDelay = (delay, x =-200) => ({
	hidden: { x: x, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, delay: delay },
	},
})

const Hero = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<div className='flex flex-wrap'>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col items-center lg:items-start'>
						<motion.h1
							variants={containerDelay(0.5)}
							initial='hidden'
							animate='visible'
							className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
						>
							Adrian Zwada
						</motion.h1>
						<motion.span
							variants={containerDelay(1)}
							initial='hidden'
							animate='visible'
							className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'
						>
							Front End Developer / Web Publisher
						</motion.span>
						<motion.p
							variants={containerDelay(1)}
							initial='hidden'
							animate='visible'
							className='my-2 max-w-xl py-6 font-light tracking-tighter'
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				<motion.div
					variants={containerDelay(1.1, 200)}
					initial='hidden'
					animate='visible'
					className='w-full lg:w-1/3 lg:p-2 ml-10'
				>
					<div className='flex justify-center'>
						<img className='rounded-2xl' src={profileremovebg} alt='Adrian Zwada' />
					</div>
				</motion.div>
			</div>
		</div>
	)
}
export default Hero
