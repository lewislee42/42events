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

	const ClassH2 = 'text-3xl text-center font-bold dark:text-white'
	const ClassHr = 'w-[100%] my-[16px] ' +
					'border-b-2 ' +
					'border-b-slate-300 dark:border-b-slate-700'
	const ClassBox = 'w-[70%] min-w-[280px] max-w-[840px] ' +
		             'min-h-[168px] mt-[8px] mb-[8px] mx-auto p-[8px] ' +
		             'rounded-lg bg-opacity-75 ' +
		             'flex justify-normal' +
					 'text-slate-600'
	const ClassReward = 'w-[25%] min-w-[126px] max-w-[168px] h-full ' +
						'm-0 py-[8px] px-[12px] ' +
						'text-slate-600 text-4xl font-bold align-middle'
	const ClassRewardIcon = 'inline align-text-bottom ' +
							'mt-0 mr-[16px] mb-0 ml-[2px] ' +
							'text-slate-700 text-[125%]'
	const ClassButton0 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-950 ' +
						 'text-sm border ' +
						 'text-neutral-950 ' +
						 'hover:border-neutral-50 hover:text-neutral-50'
	const ClassButton1 = 'px-[8px] py-[3px] h-full ' +
						 'border border-neutral-300 ' +
						 'bg-slate-700 ' +
						 'text-sm text-neutral-300 font-normal ' +
						 'hover:border-neutral-50 hover:text-neutral-50'
	const ClassTitle = 'flex flex-row m-0 px-2 ' +
		               'text-2xl text-slate-700 ' +
		               'uppercase font-bold'
	const ClassTimer = 'text-white drop-shadow-md'
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
					<div>
						<GiBlackHoleBolas
							className={ClassRewardIcon} /> {props.bh}
						<br />
						<Si42
							className={ClassRewardIcon} /> {props.ep}
						<br />
						<span className={`pl-[8px] pr-[8px] ${ClassRewardIcon}`}>
							₳</span> {props.ad}
					</div>
					<div className='w-[100%] mt-[16px] text-center'>
						<button 
							onClick={()=>{join ? setJoin(false) : setJoin(true)}}
							className={join ? ClassButton1 : ClassButton0}>
							{join ? 'Unregister' : 'Join' }
						</button>
					</div>
				</div>
				<div>
					<div className={ClassTitle}>
						<span>{props.title}</span>
						<span className='grow' />
						<span className={ClassTimer}>{time}</span>
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
					<div className='overflow-scroll h-[168px]'>
						<div id='evcon' className={ClassContent}
							dangerouslySetInnerHTML={{ __html: props.contentsHtml }} />
					</div>
				</div>
			</div>
		</>
	)
}
