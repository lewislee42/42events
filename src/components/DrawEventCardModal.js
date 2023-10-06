import Date from '/src/components/Date'
import { Si42 } from 'react-icons/si';
import { GiBlackHoleBolas } from 'react-icons/gi';

function evtColor(type) {
	switch (type.toLowerCase()) {
		case 'sports':
			return 'text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:outline-none focus:ring-emerald-300 px-2 md:px-6 border-emerald-500 border-solid border-2 h-84 ml-[-8px] my-[8px]'; //Emerald-500
		case 'indoor hobby':
			return 'text-white bg-purple-500 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 px-2 md:px-6 border-purple-500 border-solid border-2 h-84 ml-[-8px] my-[8px]'; //Purple-500
		case 'upskilling':
			return 'text-white bg-lime-500 hover:bg-lime-800 focus:ring-1 focus:outline-none focus:ring-lime-300 px-2 md:px-6 border-lime-500 border-solid border-2 h-84 ml-[-8px] my-[8px]'; //Lime-500
		case 'coallition':
			return 'text-white bg-blue-500 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 px-2 md:px-6 border-blue-500 border-solid border-2 h-84 ml-[-8px] my-[8px]'; //Blue-500
		default:
			return 'text-white bg-zinc-500 hover:bg-zinc-800 focus:ring-1 focus:outline-none focus:ring-zinc-300 px-2 md:px-6 border-zinc-500 border-solid border-2 h-84 ml-[-8px] my-[8px]'; //Zinc-500
	}
}

function modalColor(type) {
	switch (type.toLowerCase()) {
		case 'sports':
			return 'text-white bg-emerald-500 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'; //Emerald-500
		case 'indoor hobby':
			return 'text-white bg-purple-500 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'; //Purple-500
		case 'upskilling':
			return 'text-white bg-lime-500 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'; //Lime-500
		case 'coallition':
			return 'text-white bg-blue-500 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'; //Blue-500
		default:
			return 'text-white bg-zinc-500 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'; //Zinc-500
	}
}

function buttonColor(type) {
	switch (type.toLowerCase()) {
		case 'sports':
			return 'text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'; //Emerald-500
		case 'indoor hobby':
			return 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'; //Purple-500
		case 'upskilling':
			return 'text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800'; //Lime-500
		case 'coallition':
			return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'; //Blue-500
		default:
			return 'text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800'; //Zinc-500
	}
}

export default function DrawEventCardModal({obj}) {
	return (
		<>
			<button type="button" data-modal-target={obj.id} data-modal-toggle={obj.id} className={evtColor(obj.type)}>More</button>
			<div id={obj.id} tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
			<div class="relative w-full max-w-2xl max-h-full">
				{/* <!-- Modal content --> */}
				<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
					{/* <!-- Modal header --> */}
					<div class={modalColor(obj.type)}>
						<h3 class="text-xl font-semibold dark:text-white">
							{obj.title}
						</h3>
						<p className="ml-4">{obj.type}</p>
						<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={obj.id}>
							<svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
							</svg>
							<span class="sr-only">Close modal</span>
						</button>
					</div>
					{/* <!-- Modal body --> */}
					<div class="p-6 space-y-6">
						<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Date: <Date dateString={obj.when} want='day' /> <Date dateString={obj.when} want='mon' /> <Date dateString={obj.when} want='hmb' />
						</p>
						<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Location: {obj.where}
						</p>
						<p class="text-base text-xl leading-relaxed font-extrabold text-gray-500 dark:text-gray-400">
							<span className="mr-6"><GiBlackHoleBolas className="inline mr-2"/> BlackHole Days: {obj.bh}</span>
							<span className="mr-6"><Si42 className="inline mr-2"/> Eval Points: {obj.ep}</span>
							<span>₳ Alterian: {obj.ad}</span>
						</p>
						<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							Description: {obj.contentHTML}
						</p>
						
					</div>
					{/* <!-- Modal footer --> */}
					<div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
						<button data-modal-hide={obj.id} type="button" class={buttonColor(obj.type)}>I accept</button>
						<button data-modal-hide={obj.id} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}