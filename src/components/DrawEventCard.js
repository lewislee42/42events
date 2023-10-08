import FormatDate from '/src/components/FormatDate'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';

export function evtColor({ type }) {
	switch (type.toLowerCase()) {
		case 'sports':
			return '#10b981'; //Emerald-500
		case 'indoor hobby':
			return '#a855f7'; //Purple-500
		case 'upskilling':
			return '#84cc16'; //Lime-500
		case 'coallition':
			return '#3b82f6'; //Blue-500
		default:
			return '#71717a'; //Zinc-500
	}
}

export default function DrawEventCard({ id, title, type, when, where, bh, ep, ad }) {
	const ClassBox = 'w-full min-w-[280px] ' +
		             'h-84 m-[8px] p-0 ' +
		             'border-solid border-2 ' +
		             'flex justify-normal'
	const ClassDate = 'w-[20%] h-full ' +
		              'm-0 pt-[10px] pb-[15px] ' +
		              'text-white text-xs text-center align-middle'
	const ClassDay = 'text-4xl font-bold'
	const ClassTitle = 'm-0 px-2 ' +
		               'text-slate-600 ' +
		               'uppercase font-bold'
	const ClassDesc = 'px-[8px] ' +
					  'text-xs sm:text-sm text-black dark:text-slate-600'
	const ClassIcon = 'inline align-text-bottom ' +
		              'mt-0 mr-[4px] mb-0 ml-[4px] ' +
		              'text-slate-700 dark:text-slate-600 ' +
					  'text-[125%]'
	const ClassReward = 'text-xl'
	return (
		<>
			<div className={ClassBox}
				style={{borderColor: evtColor({type})}}>
				<div className={ClassDate}
					style={{backgroundColor: evtColor({type})}}>
					<div className={ClassDay}>
						<FormatDate dateString={when} want='day' />
					</div>
					<div>
						<FormatDate dateString={when} want='mon' />
					</div>
				</div>
				<div>
					<h4 className={ClassTitle}>{title}</h4>
					<div className={ClassDesc}>
						<AiOutlineClockCircle 
							className={ClassIcon} />
						<FormatDate dateString={when} want='hmb' />
						<span className='block sm:inline m-0 ml-2 sm:ml-4' />
						<MdOutlineLocationOn
							className={ClassIcon} /> {where}
						<br />
						<span className={ClassReward}>
							<GiBlackHoleBolas
								className={ClassIcon} /> {bh}
							<span className='m-0 sm:ml-6' />
							<Si42
								className={ClassIcon} /> {ep}
							<span className='m-0 sm:ml-6' />
							<span className={ClassIcon}>₳</span> {ad}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
