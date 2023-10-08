import { useState, useEffect } from 'react'

function calPerc(yes, no) {
	if (yes + no == 0)
		return "50%";
	
	let yesPercent = Math.floor((yes * 100) / (yes + no));
	console.log(yes, no, yesPercent)
	return yesPercent + '%';
}


export default function VoteBar() {
	let [yes, changeYes] = useState(0);
	let [no, changeNo] = useState(0);
	
	useEffect(() => {
		// Generate random values for yes and no after component mounts
		changeYes(Math.floor(Math.random() * 50));
		changeNo(Math.floor(Math.random() * 50));
	}, []);
	
	return (
		<div className='ml-2 mb-4 text-center mx-auto' style={{marginTop: "-8px"}}>
			<div className='flex overflow-hidden border border-gray-400 rounded-b-lg bg-white align-center justify-start'>
				<div className='w-[20%] 2xl:w-[20.1%] flex justify-between'>
					<button className='hover:text-green-500 hover:bg-gray-100 px-2 2xl:px-6 flex w-2/4 justify-center' onClick={()=>changeYes(yes+1)}>
						<div className='text-xs 2xl:text-xl font-bold 2xl:font-extrabold'>↑</div>
						<div className='ml-1 2xl:ml-3 2xl:mt-[2px] text-[10px] 2xl:text-base' suppressHydrationWarning>{yes}</div>
					</button>
					<button className='hover:text-red-500 hover:bg-gray-100 px-2 2xl:px-6 flex w-2/4 justify-center border-r border-gray-400' onClick={()=>changeNo(no+1)}>
						<div className='mr-1 2xl:mr-3 2xl:mt-[2px] text-[10px] 2xl:text-base' suppressHydrationWarning>{no}</div>
						<div className='text-xs 2xl:text-xl font-bold 2xl:font-extrabold'>↓</div>
					</button>
				</div>
				
				<div className="w-[80%] h-2 2xl:h-3 bg-red-500 rounded-full dark:bg-red-500 mt-[4px] 2xl:mt-[8px] mx-1 2xl:mx-2">
					<div className="bg-green-500 h-2 2xl:h-3 rounded-full" style={{width: calPerc(yes, no)}}></div>
				</div>
			</div>
		</div>
	)
}
