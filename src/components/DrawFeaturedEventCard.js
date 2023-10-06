import { evtColor } from '/src/components/DrawEventCard.js'
import Date from '/src/components/Date'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';

export default function DrawFeaturedEventCard({ props }) {
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
	const ClassButton = ' px-2 py-[3px] h-full ' +
						'border border-neutral-950 ' +
						'text-sm border ' +
						'text-neutral-950 ' +
						'hover:border-neutral-50 hover:text-neutral-50'
	const ClassTitle = 'm-0 px-2 ' +
		               'text-2xl text-slate-700 ' +
		               'uppercase font-bold'
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
						<button className={ClassButton}>Join</button>
					</div>
				</div>
				<div>
					<h4 className={ClassTitle}>{props.title}</h4>
					<div className={ClassDesc}>
						<AiOutlineClockCircle 
							className={ClassIcon} />
						<Date dateString={props.when} want='' />
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
