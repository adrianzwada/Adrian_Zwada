import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function Technologies() {
	return (
		<div className='border-b border-neutral-800 pb-24'>
			<h2 className='my-20 text-center text-4xl'>Technologies</h2>
			<div className=' flex flex-warp items-center justify-center gap-4'>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<RiReactjsLine className='text-7xl text-cyan-400' />
				</div>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<TbBrandNextjs className='text-7xl' />
				</div>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<RiJavascriptFill className='text-7xl text-yellow-400' />
				</div>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<FaHtml5 className='text-7xl text-orange-600' />
				</div>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<FaCss3Alt className='text-7xl text-blue-600' />
				</div>
				<div className=' rounded-2xl border-4 border-neutral-800 p4'>
					<RiTailwindCssFill className='text-7xl text-blue-300' />
				</div>
			</div>
		</div>
	)
}

export default Technologies
