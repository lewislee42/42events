import { useState, useEffect } from "react";
import { parseISO, intervalToDuration } from 'date-fns';
import { evtColor } from '/src/components/DrawEventCard.js'
import FormatDate from '/src/components/FormatDate'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';

function Timer(EventDate) {
	let CountDown = { start: new Date(), end: parseISO(EventDate) }
	CountDown = intervalToDuration(CountDown)
	const days = CountDown.days
	let hrs = CountDown.hours
	hrs = (hrs < 10) ? '0' + hrs : '' + hrs;
	let mins = CountDown.minutes
	mins = (mins < 10) ? '0' + mins : '' + mins;
	let secs = CountDown.seconds
	secs = (secs < 10) ? '0' + secs : '' + secs;
	return days + 'D ' + hrs + 'H ' + mins + 'M ' + secs + 'S'
}

export default function DrawFeaturedEventCard({ props }) {
	const [join, setJoin] = useState(false);
	const [time, setTime] = useState(Timer(props.when));
	useEffect(() => {
    	setTimeout(() => {
      		setTime(Timer(props.when));
		}, 1000);
	});

	const ClassH2 = 'text-xl sm:text-2xl text-center font-bold dark:text-white'
	const ClassHr = 'w-[100%] my-[14px] ' +
					'border-b-2 ' +
					'border-b-gray-50 dark:border-b-slate-700'
	const ClassBox = 'w-[80%] min-w-[280px] sm:min-w-[280px] max-w-[840px] ' +
		             'min-h-[180px] mt-[8px] mb-[8px] mx-auto p-[8px] ' +
		             'rounded-lg bg-opacity-75 ' +
		             'flex justify-normal ' +
					 'text-slate-600'
	const ClassReward = 'w-[25%] min-w-[50px] sm:min-w-[126px] sm:min-w-[150px] sm:max-w-[168px] sm:h-full ' +
						'm-0 sm:py-[8px] sm:px-[4px] ' +
						'text-slate-600 text-normal sm:text-4xl font-bold align-middle'
	const ClassRewardIcon = 'inline align-text-center ' +
							'mt-0 mr-[10px] sm:mr-[16px] mb-0 ml-[2px] ' +
							'text-slate-700 text-[100%] sm:text-[100%]'
	const ClassButton0 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-950 ' +
						 'text-xs sm:text-base border ' +
						 'text-neutral-950 ' +
						 'hover:border-neutral-50 hover:text-neutral-50 z-10 rounded-md'
	const ClassButton1 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-50 ' +
						 'bg-red-500 ' +
						 'text-xs sm:text-base text-neutral-50 ' +
						 ' hover:bg-red-600 z-10 rounded-md'
	const ClassTitle = 'sm:flex flex-col sm:flex-row m-0 px-2 ' +
		               'text-2xl text-slate-700 ' +
		               'uppercase font-bold'
	const ClassTimer = 'text-white drop-shadow-md text-sm sm:text-2xl'
	const ClassDesc = 'px-[8px] text-sm text-slate-600'
	const ClassIcon = 'inline align-text-bottom ' +
		              'mt-0 mr-[4px] mb-0 ml-[4px] ' +
		              'text-slate-700 ' +
					  'text-[125%]'
	const ClassContent = 'text-slate-700'
	
	return (
		<>
			<h2 className={ClassH2}>Featured Event</h2>
			<hr className={ClassHr} />
			<div className={ClassBox}
				style={{backgroundColor: evtColor(props)}}>
				<div className={ClassReward}>
					<div className="">
						<div className="w-[100%] flex justify-center">
							<GiBlackHoleBolas className={`mt-1 sm:mt-0 ${ClassRewardIcon}`}/>
							<div>{props.bh}</div>
						</div>
						<div className="w-[100%] flex pt-2 justify-center">
							<Si42 className={`mt-1 ${ClassRewardIcon}`}/>
							<div >{props.ep}</div>
						</div>
						<div className="w-[100%] flex pt-2 justify-center">
							<span className={`ml-[6px] sm:ml-0 sm:pt-0 sm:pl-[8px] pr-[2px] text-[100%] ${ClassRewardIcon}`}>₳</span>
							<div>{props.ad}</div>
						</div>
					</div>
					<div className='w-full text-center flex justify-start sm:justify-center pt-[125px] sm:pt-[14px] z-10 rounded-md'>
						<button 
							onClick={()=>{join ? setJoin(false) : setJoin(true)}}
							className={join ? ClassButton1 : ClassButton0}>
							{join ? 'Leave' : 'Join' }
						</button>
					</div>
				</div>
				<div>
					<div className={ClassTitle}>
						<div>{props.title}</div>
						<div className='grow' />
						<div className={ClassTimer} suppressHydrationWarning>{time}</div>
					</div>
					<div className={ClassDesc}>
						<AiOutlineClockCircle 
							className={ClassIcon} />
						<FormatDate dateString={props.when} want='' />
						<span className='ml-4' />
						<MdOutlineLocationOn
							className={ClassIcon} /> {props.where}
						<br />
					</div>
					<div className='mt-2 overflow-scroll border-t border-slate-700 h-[140px] z-0'>
						<div id='evcon' className={ClassContent}
							dangerouslySetInnerHTML={{ __html: props.contentsHtml }} />
					</div>
				</div>
			</div>
		</>
	)
}
