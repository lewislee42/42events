import { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';

export default function RatingModal({obj}) {
	const [comments, setComments] = useState([]);
	const [text, setText] = useState('');
	return (
		<>
			<button type="button" data-modal-target={obj.id + "comment"} data-modal-toggle={obj.id + "comment"} className="ml-2" title="Click Here"><BiMessageDetail/></button>
			<div id={obj.id + "comment"} tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="text-white bg-gray-400 dark:bg-gray-600 flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold dark:text-white">
                                {obj.title}
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={obj.id+"comment"}>
                                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Comments:
                            </p>
                            {comments.map((comment)=> (
                            <div className="rounded-lg border-[1px] text-gray-500 border-gray-300 dark:border-gray-600 dark:text-gray-400 p-2">
                                {comment}
                            </div>))}
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
							<div class="relative z-0 w-full mb-6 group">
								<label for="message" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Leave your comments:</label>
								<textarea value={text} onChange={(e)=>setText(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Comments..."></textarea>
							</div>
                            <button type="button" onClick={(e)=>{setComments([...comments, text]); setText('');}} className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Post</button>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

