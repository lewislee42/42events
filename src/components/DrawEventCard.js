import Date from '/src/components/Date'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';

function evtColor({ type }) {
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
	const ClassBox = 'w-[45%] min-w-[252px] max-w-[420px] ' +
		             'h-84 m-[8px] p-0 ' +
		             'border-solid border-2 ' +
		             'flex justify-normal'
	const ClassDate = 'w-[20%] h-full ' +
		              'm-0 pt-[10px] pb-[15px] ' +
		              'text-white text-xs text-center align-middle'
	const ClassDay = 'text-3xl font-bold'
	const ClassTitle = 'm-0 px-2 ' +
		               'text-slate-600 dark:text-slate-400 ' +
		               'uppercase font-bold'
	const ClassDesc = 'px-[8px] text-sm text-black dark:text-white'
	const ClassIcon = 'inline align-text-bottom ' +
		              'mt-0 mr-[4px] mb-[2px] ml-[4px]'
	const ClassReward = 'text-2xl'
	return (
		<>
			<div key={id} className={ClassBox}
				style={{borderColor: evtColor({type})}}>
				<div className={ClassDate}
					style={{backgroundColor: evtColor({type})}}>
					<div className={ClassDay}>
						<Date dateString={when} want='day' />
					</div>
					<div>
						<Date dateString={when} want='mon' />
					</div>
				</div>
				<div>
					<h4 className={ClassTitle}>{title}</h4>
					<div className={ClassDesc}>
						<AiOutlineClockCircle 
							className={ClassIcon} />
						<Date dateString={when} want='hmb' />
						<span className='ml-4' />
						<MdOutlineLocationOn
							className={ClassIcon} /> {where}
						<br />
						<span className={ClassReward}>
						<GiBlackHoleBolas
							className={ClassIcon} /> {bh}
						<span className='ml-8' />
						<Si42
							className={ClassIcon} /> {ep}
						<span className='ml-8' />
						₳ {ad}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
