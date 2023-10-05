import Date from '/src/components/Date'
import utilStyles from '/src/styles/utils.module.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

function evtColor({ type }) {
	switch (type.toLowerCase()) {
		case 'sports':
			return '#10b981'; //Emerald-500
		case 'indoor hobby':
			return '#84cc16'; //Lime-500
		case 'upskilling':
			return '#3b82f6'; //Blue-500
		case 'coallition':
			return '#a855f7'; //Purple-500
		default:
			return '#71717a'; //Zinc-500
	}
}

export default function DrawEventCard({ id, title, type, when, where }) {
	const ClassBox = 'w-9/20 min-w-[252px] max-w-[420px] ' +
		             'h-84 m-[8px] p-0 ' +
		             'border-solid border-2 ' +
		             'flex '
	const ClassTitle = 'm-0 px-2 ' +
		               'text-slate-700 dark:text-slate-300 ' +
		               'uppercase font-bold'
	return (
		<>
			<div key={id} className={`${utilStyles.evbox}`}
				style={{borderColor: evtColor({type})}}>
				<div className={utilStyles.evdate}
					style={{backgroundColor: evtColor({type})}}>
					<div className={utilStyles.evdday}>
						<Date dateString={when} want='day' />
					</div>
					<div>
						<Date dateString={when} want='mon' />
					</div>
				</div>
				<div>
					<h4 className={ClassTitle}>{title}</h4>
					<div className={utilStyles.evdesc}>
						<AiOutlineClockCircle 
							className={utilStyles.evico} />
						<Date dateString={when} want='hmb' />
						<span className='ml-4' />
						<MdOutlineLocationOn
							className={utilStyles.evico} /> {where}
					</div>
				</div>
			</div>
		</>
	)
}
