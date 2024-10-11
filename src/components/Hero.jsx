import { HERO_CONTENT } from '../constants/index.js'
import { motion } from 'framer-motion'
import { RiContactsFill } from 'react-icons/ri'
import { MdDownload } from 'react-icons/md'
import profileremovebg from '../assets/profileremovebg.png'
import resume from '../assets/Adrian_Zwada_CV.pdf'
const containerDelay = (delay, x = -200) => ({
	hidden: { x: x, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, delay: delay },
	},
})
function Hero({ contactRef }) {
	const scrollToContact = () => {
		contactRef?.current.scrollIntoView({
			behavior: 'smooth',
		})
	}
	return (
		<div className='border-b border-neutral-900 pb-2'>
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
							className='bg-gradient-to-r from-pink-300  to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'
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
						<div className='flex items-center gap-3'>
							<div className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600'>
								<button className='px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline   md:font-semibold flex items-center gap-1 hover:gap-3'>
									<span onClick={scrollToContact}>Contact me</span>
									<RiContactsFill size={16} />
								</button>
							</div>
							<a href={resume} download='Adrian_Zwada_CV'>
								<div className='flex items-center gap-1 hover:gap-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline hover:text-white hover:no-underline md:font-semibold'>
									<span>Get Resume</span>
									<MdDownload size={16} />
								</div>
							</a>
						</div>
					</div>
				</div>
				<motion.div
					variants={containerDelay(1.1, 200)}
					initial='hidden'
					animate='visible'
					className='w-full flex items-center justify-center lg:w-1/2 lg:p-8'
				>
					<div className='flex flex-col items-center justify-center sm:flex-row mt-6'>
						<img className='rounded-2xl sm:w-full md:w-full lg:w-full' src={profileremovebg} alt='Adrian Zwada' />
					</div>
				</motion.div>
			</div>
		</div>
	)
}
export default Hero
