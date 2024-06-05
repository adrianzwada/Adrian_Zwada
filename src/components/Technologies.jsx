import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const icon = duration => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: { duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
	},
})

function Technologies() {
	return (
		<div className='border-b border-neutral-800 pb-24 uppercase'>
			<motion.h2
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
				className='my-20 text-center text-4xl'
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className=' flex flex-wrap items-center justify-center gap-4'
			>
				<motion.div
					variants={icon(2.5)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<RiReactjsLine className='text-7xl text-cyan-400' />
				</motion.div>
				<motion.div
					variants={icon(3)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<TbBrandNextjs className='text-7xl' />
				</motion.div>
				<motion.div
					variants={icon(1.5)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<RiJavascriptFill className='text-7xl text-yellow-400' />
				</motion.div>
				<motion.div
					variants={icon(2.5)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<FaHtml5 className='text-7xl text-orange-600' />
				</motion.div>
				<motion.div
					variants={icon(3)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<FaCss3Alt className='text-7xl text-blue-600' />
				</motion.div>
				<motion.div
					variants={icon(2.5)}
					initial='initial'
					animate='animate'
					className=' rounded-2xl border-4 border-neutral-800 p4'
				>
					<RiTailwindCssFill className='text-7xl text-blue-300' />
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Technologies
