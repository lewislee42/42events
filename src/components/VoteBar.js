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
				<div className='w-[100%] flex'>
					<button className='w-[18%] hover:text-green-500 hover:bg-gray-100 flex' onClick={()=>changeYes(yes+1)}>
						<div className='grow m-0 p-0' />
						<div className='ml-1 sm:ml-3 sm:mt-[2px] text-[10px] sm:text-base' suppressHydrationWarning>{yes}</div>
						<div className='text-xs sm:text-xl font-bold sm:font-extrabold'>↑</div>
					</button>
					
				<div className="grow h-2 sm:h-3 bg-red-500 rounded-full dark:bg-red-500 mt-[4px] sm:mt-[8px] mx-1 sm:mx-2">
					<div className="bg-green-500 h-2 sm:h-3 rounded-full" style={{width: calPerc(yes, no)}}></div>
				</div>
	
	
					<button className='w-[18%] hover:text-red-500 hover:bg-gray-100 flex' onClick={()=>changeNo(no+1)}>
						<div className='text-xs sm:text-xl font-bold sm:font-extrabold'>↓</div>
						<div className='mr-1 sm:mr-3 sm:mt-[2px] text-[10px] sm:text-base' suppressHydrationWarning>{no}</div>
						<div className='grow m-0 p-0' />
					</button>
				</div>
				
				
			</div>
		</div>
	)
}
