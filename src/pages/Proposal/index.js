
import { useState } from 'react'
import { MdOutlineEmojiEvents } from 'react-icons/md';
import CoalitionForm from '../../components/CoalitionForm';
import Navbar from '../../components/Navbar'
import Head from 'next/head'

export default function Proposal() {

	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
			<div className="p-8 sm:ml-64 pt-20 sm:pt-8 h-screen bg-white">
			<h2 className="text-2xl">Create Event
				<MdOutlineEmojiEvents className="inline ml-2"/>
			</h2>
			<hr class="h-px my-4 bg-gray-800 border-0 dark:bg-gray-700"></hr>
			<label for="event_select" class="sr-only">Select Event</label>
			<select id="event_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
				<option selected>Choose events</option>
				<option value="coalition">Coalition Events</option>
				<option value="sports">Sports Events</option>
				<option value="indoor">Indoor Hobby Events</option>
				<option value="upskill">Upskilling Events</option>
			</select>

			<CoalitionForm/>
		</div>
	</>
			

		
  )
}
