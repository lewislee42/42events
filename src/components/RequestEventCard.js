import { TbHandFinger } from 'react-icons/tb'
import { useState, useEffect } from 'react'
import { BiMessageDetail } from 'react-icons/bi';
import VoteBar from './VoteBar';


function boxColor(event) {
	switch (event) {
		case 'sports':
			return 'm-[8px] mr-0 border-emerald-500 border-solid border-2 min-w-[280px]'; //Emerald-500
		case 'indoor hobby':
			return 'm-[8px] mr-0 border-purple-500 border-solid border-2 h-84 min-w-[280px]'; //Purple-500
		case 'upskilling':
			return 'm-[8px] mr-0 border-lime-500 border-solid border-2 h-84 min-w-[280px]'; //Lime-500
		case 'coallition':
			return 'm-[8px] mr-0 border-blue-500 border-solid border-2 h-84 min-w-[280px]'; //Blue-500
		default:
			return 'm-[8px] mr-0 border-zinc-500 border-solid border-2 h-84 min-w-[280px]'; //Zinc-500
	}
}

function indicatorColor(event) {
	switch (event) {
		case 'sports':
			return 'min-w-[40px] bg-emerald-500 dark:bg-emerald-500'; //Emerald-500
		case 'indoor hobby':
			return 'min-w-[40px] bg-purple-500 dark:bg-purple-500'; //Purple-500
		case 'upskilling':
			return 'min-w-[40px] bg-lime-500 dark:bg-lime-500'; //Lime-500
		case 'coallition':
			return 'min-w-[40px] bg-blue-500 dark:bg-blue-500'; //Blue-500
		default:
			return 'min-w-[40px] bg-zinc-500 dark:bg-zinc-500'; //Zinc-500
	}
}

export default function RequestEventCard(props) {
	const [comments, setComments] = useState([]);
	const [text, setText] = useState('');
	const [commentDisplay, setCommentDisplay] = useState(false);
	return (
		<>
			<div className={boxColor(props.obj.event)}>
				<div className="flex justify-normal">
					<div className={indicatorColor(props.obj.event)}></div>
					<div>
						<div className="px-2 my-[1px] text-slate-600 dark:text-slate-400 uppercase font-bold">Title: {props.obj.title}</div>
						<div className="px-2 my-[1px] text-sm text-black dark:text-white">Description: {props.obj.text}</div>
						<div className="flex px-2 my-2">
							<a href="/Proposal" className="px-2 rounded-sm border border-teal-400 text-teal-400 hover:border-neutral-950 hover:text-neutral-950 dark:hover:border-white dark:hover:text-white">Volunteer<TbHandFinger className="ml-2 inline"/></a>
							<button type="button" onClick={()=>commentDisplay?setCommentDisplay(false): setCommentDisplay(true)}className="ml-2" title="Click Here"><BiMessageDetail/></button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-black">
				<VoteBar/>
			</div>
			{commentDisplay? (
			<div className="m-[8px] mt-[-8px] min-h-[50px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
				<p class="text-gray-500 dark:text-gray-400">
					Comments:
				</p>
				{comments.map((comment)=> (
				<div className="my-2 text-gray-500 border-b-gray-300 dark:border-gray-600 dark:text-gray-400 p-2">
					{comment}
				</div>))}
				<div class="relative z-0 w-full mb-6 group mt-2">
					<label for="message" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Leave your comments:</label>
					<textarea value={text} onChange={(e)=>setText(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Comments..."></textarea>
				</div>
				<button type="button" onClick={(e)=>{setComments([...comments, text]); setText('');}} className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Post</button>
			</div>
			):''}

			
		</>
	)
}