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

	const ClassH2 = 'text-xl 2xl:text-2xl text-center font-bold dark:text-white'
	const ClassHr = 'w-[100%] my-[14px] ' +
					'border-b-2 ' +
					'border-b-gray-50 dark:border-b-slate-700'
	const ClassBox = 'w-[95%] min-w-[280px] 2xl:min-w-[280px] max-w-[840px] ' +
		             'min-h-[168px] max-h-[248px] mt-[4px] mb-[8px] mx-auto p-[8px] ' +
		             'rounded-lg bg-opacity-75 ' +
		             'flex justify-normal ' +
					 'text-slate-600'
	const ClassReward = 'w-[25%] min-w-[50px] 2xl:min-w-[126px] 2xl:min-w-[150px] 2xl:max-w-[168px] 2xl:h-full ' +
						'm-0 2xl:py-[8px] 2xl:px-[4px] ' +
						'text-slate-600 text-normal 2xl:text-4xl font-bold align-middle'
	const ClassRewardIcon = 'inline align-text-center ' +
							'mt-0 mr-[10px] 2xl:mr-[16px] mb-0 ml-[2px] ' +
							'text-slate-700 text-[100%] 2xl:text-[100%]'
	const ClassButton0 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-950 ' +
						 'text-xs 2xl:text-base border ' +
						 'text-neutral-950 ' +
						 'hover:border-neutral-50 hover:text-neutral-50 z-10 rounded-md'
	const ClassButton1 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-50 ' +
						 'bg-red-500 ' +
						 'text-xs 2xl:text-base text-neutral-50 ' +
						 ' hover:bg-red-600 z-10 rounded-md'
	const ClassTitle = '2xl:flex flex-col 2xl:flex-row m-0 px-2 ' +
		               'text-2xl text-slate-700 ' +
		               'uppercase font-bold'
	const ClassTimer = 'text-white drop-shadow-md text-sm 2xl:text-2xl'
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
							<GiBlackHoleBolas className={`mt-1 2xl:mt-0 ${ClassRewardIcon}`}/>
							<div>{props.bh}</div>
						</div>
						<div className="w-[100%] flex pt-2 justify-center">
							<Si42 className={`mt-1 ${ClassRewardIcon}`}/>
							<div >{props.ep}</div>
						</div>
						<div className="w-[100%] flex pt-2 justify-center">
							<span className={`ml-[6px] 2xl:ml-0 2xl:pt-0 2xl:pl-[8px] pr-[2px] text-[100%] ${ClassRewardIcon}`}>₳</span>
							<div>{props.ad}</div>
						</div>
					</div>
					<div className='w-full text-center flex justify-start 2xl:justify-center pt-[125px] 2xl:pt-[14px] z-10 rounded-md'>
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
						<span className='block 2xl:inline ml-4 2xl:m-0' />
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
