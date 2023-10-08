import { GiBlackHoleBolas } from 'react-icons/gi';
import { LuCalendarDays } from 'react-icons/lu';
import { GiSkills } from 'react-icons/gi';
import { useState } from 'react'

export default function UpskillingForm() {
	const [engagement,setEngagement] = useState(false);
	return (
		<form className="mt-6 border-2 p-4 rounded-sm border-lime-500 max-w-3xl mx-auto">
			<h5 className="text-xl my-3 bg-lime-500 text-white p-2 rounded-sm">Upskilling Events Form<GiSkills className="inline ml-2"/></h5>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<select id="event_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
						<option selected>Choose Upskilling events</option>
						<option value="tutoring">Tutoring group</option>
						<option value="hackathon">Hackathon</option>
						<option value="techtalk">Tech Talks</option>
						<option value="lepak">Lepak (Suggested by YT)</option>
						<option value="other">Others</option>
					</select>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
					<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
				</div>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input type="text" name="title" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
					<label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input type="date" name="date" id="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
					<label for="date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
				</div>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input type="text" name="location" id="location" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
					<label for="location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Description</label>
					<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Additional info..."></textarea>
				</div>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input type="number" name="pax" id="pax" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
					<label for="pax" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pax</label>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input type="number" name="duration" id="duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
					<label for="duration" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Duration(Hours)</label>
				</div>
			</div>
			
			<div className="my-6">
				<h3 className="text-2xl">
					<button type="button" onClick={()=>{if (engagement === false) setEngagement(true); else setEngagement(false)}} class="bg-lime-500 text-white rounded-sm flex items-center justify-between w-full py-3 px-3 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700" data-accordion-target="#accordion-engagement">
						<span>Want to increase ENGAGEMENT?</span>
						<svg data-accordion-icon class="w-3 h-3 shrink-0 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
						</svg>
					</button>
				</h3>
				{engagement? (
				<div>
					<div class="p-1 my-2 text-sm text-red-800 rounded-sm bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
						<span class="font-medium">ALERT!</span> Need BOCAL Approval
					</div>
					<div class="grid md:grid-cols-3 md:gap-6 py-3 border-b border-gray-200 dark:border-gray-700">
						<div class="relative z-0 w-full mb-6 group">
							<input type="number" name="blackhole" id="blackhole" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
							<label for="blackhole" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><GiBlackHoleBolas className="inline mr-2" size="25px"/>Blackhole(Days)</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="number" name="eval" id="eval" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
							<label for="eval" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><LuCalendarDays className="inline mr-2" size="25px"/>Evaluation Points</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="number" name="alterian" id="alterian" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-500 peer" placeholder=" "  />
							<label for="alterian" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">₳ Alterian Dollars</label>
						</div>
					</div>
				</div>): ''}
			</div>
			<button type="submit" class="mt-3 text-white bg-lime-500 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-sm text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-lime-500 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Submit</button>
		</form>
	)
}
