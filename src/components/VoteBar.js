import { useState } from 'react'

function calPerc(yes, no) {
	if (yes === 0 && no === 0)
		return "50%";
	
	let yesPercent = (yes / (yes + no)) * 100;
	return yesPercent.toString() + '%';
}


export default function VoteBar() {
	const [yes, changeYes] = useState(Math.floor(Math.random() * 50));
	const [no, changeNo] = useState(Math.floor(Math.random() * 50));
	
	return (
		<div className='w-full ml-2 mb-4 text-center mx-auto' style={{marginTop: "-8px"}}>
			<div className='flex overflow-hidden border border-gray-400 rounded-b-lg bg-white align-center justify-between'>
				<button className='w-1/12 hover:text-green-500 hover:bg-gray-100' onClick={()=>changeYes(yes+1)}>
					<div className='text-xs sm:text-xl font-bold sm:font-extrabold'>↑</div>
					<div className='text-[10px] sm:text-sm' suppressHydrationWarning>{yes}</div>
				</button>
				<div className="w-[80%] h-2.5 sm:h-3 bg-red-500 rounded-full dark:bg-red-500 mt-[10px]">
					<div className="bg-green-500 h-2.5 sm:h-3 rounded-full" style={{width: calPerc(yes, no)}}></div>
				</div>
				<button className='w-1/12 hover:text-red-500 hover:bg-gray-100' onClick={()=>changeNo(no+1)}>
					<div className='text-xs sm:text-xl font-bold sm:font-extrabold'>↓</div>
					<div className='text-[10px] sm:text-sm' suppressHydrationWarning>{no}</div>
				</button>
			</div>
		</div>
	)
}