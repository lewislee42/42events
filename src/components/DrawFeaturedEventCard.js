import { evtColor } from '/src/components/DrawEventCard.js'
import Date from '/src/components/Date'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';

export default function DrawFeaturedEventCard({ props }) {
	const ClassBox = 'w-[45%] min-w-[280px] max-w-[420px] ' +
		             'h-84 m-[8px] p-0 ' +
		             'border-solid border-2 ' +
		             'flex justify-normal'
	const ClassDate = 'w-[20%] h-full ' +
		              'm-0 pt-[10px] pb-[15px] ' +
		              'text-white text-xs text-center align-middle'
	const ClassDay = 'text-4xl font-bold'
	const ClassTitle = 'm-0 px-2 ' +
		               'text-slate-600 dark:text-slate-400 ' +
		               'uppercase font-bold'
	const ClassDesc = 'px-[8px] text-sm text-black dark:text-white'
	const ClassIcon = 'inline align-text-bottom ' +
		              'mt-0 mr-[4px] mb-0 ml-[4px] ' +
		              'text-slate-700 dark:text-slate-300 ' +
					  'text-[125%]'
	const ClassReward = 'text-xl'
	console.log(props.title)
	return (
		<>
			<div className={ClassBox}
				style={{borderColor: evtColor(props)}}>
				<div className={ClassDate}
					style={{backgroundColor: evtColor(props)}}>
					<div className={ClassDay}>
						<Date dateString={props.when} want='day' />
					</div>
					<div>
						<Date dateString={props.when} want='mon' />
					</div>
				</div>
				<div>
					<h4 className={ClassTitle}>{props.title}</h4>
					<div className={ClassDesc}>
						<AiOutlineClockCircle 
							className={ClassIcon} />
						<Date dateString={props.when} want='hmb' />
						<span className='ml-4' />
						<MdOutlineLocationOn
							className={ClassIcon} /> {props.where}
						<br />
						<span className={ClassReward}>
						<GiBlackHoleBolas
							className={ClassIcon} /> {props.bh}
						<span className='ml-8' />
						<Si42
							className={ClassIcon} /> {props.ep}
						<span className='ml-8' />
						<span className={ClassIcon}>₳</span> {props.ad}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
