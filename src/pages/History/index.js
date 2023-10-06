import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Statistic from '../../components/Statistic'
import DrawEventCard from '../../components/DrawEventCard'
import DrawEventCardModal from '../../components/DrawEventCardModal'
import { useState } from 'react'

var arr = [
	{id:'hello',title:'Badminton',type:'sports',when:'2023-09-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.'},
	{id:'hello1',title:'Coalition',type:'coallition',when:'2023-08-12T16:30:00',where:'Campus',bh:'1',ep:'5',ad:'-',contentHTML:'Steamboat fest!'},
	{id:'hello2',title:'Board Game',type:'indoor hobby',when:'2023-08-10T16:30:00',where:'Campus',bh:'-',ep:'-',ad:'-',contentHTML:'Settlers with our GameMaster Boon Han!'},
	{id:'hello3',title:'Hackathon',type:'upskilling',when:'2023-07-12T16:30:00',where:'Campus',bh:'20',ep:'10',ad:'200',contentHTML:'Create a card game and host it online'},
	{id:'hello4',title:'ETHKL Talk',type:'upskilling',when:'2023-06-15T16:30:00',where:'Online',bh:'5',ep:'5',ad:'-',contentHTML:'Googlemeet Online ETHKL'},
	{id:'hello5',title:'Khazanah',type:'upskilling',when:'2023-05-12T16:30:00',where:'Campus',bh:'10',ep:'30',ad:'-',contentHTML:'Meeting Khazanah C-levels'},
	{id:'hello6',title:'Board Game',type:'indoor hobby',when:'2023-05-10T16:30:00',where:'Mcdonald',bh:'-',ep:'-',ad:'-',contentHTML:'Settlers with our GameMaster Boon Han!'},
	{id:'hello7',title:'Badminton',type:'sports',when:'2023-04-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.'},
	{id:'hello8',title:'Badminton',type:'sports',when:'2023-03-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.'},
	{id:'hello9',title:'Badminton',type:'sports',when:'2023-02-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.'},
]

export default function History() {
	const [event, changeEvent] = useState('');
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
		<div className="p-2 sm:ml-64 pt-20 sm:pt-8 sm:p-6 lg:p-8 grid md:grid-cols-2 md:gap-4 lg:gap-6 lg:gap-8 xl:gap-16 dark:bg-gray-900 dark:text-white min-h-screen">
			<div className="px-2 py-4 md:px-6 mb-4 border border-solid border-gray-300 rounded-sm max-h-[710px] md:max-h-[900px]">
				<h2 className="text-2xl">Top Stats</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<div className="overflow-y-scroll">
					<div className="max-h-[510px] md:max-h-[700px]">
						<Statistic/>
					</div>
				</div>
			</div>
			<div className="px-2 py-4 md:px-6 mb-4 border border-solid border-gray-300 rounded-sm max-h-[710px] md:max-h-[900px]">
				<h2 className="text-2xl">Past Events</h2>
				<label for="event_select" class="sr-only">Select Event</label>
				<select onChange={(e)=>changeEvent(e.target.value)}
				id="event_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
					<option value = '' selected>Show All Events (Change to Filter) </option>
					<option value="coallition">Coalition Events</option>
					<option value="sports">Sports Events</option>
					<option value="indoor hobby">Indoor Hobby Events</option>
					<option value="upskilling">Upskilling Events</option>
				</select>
				<hr class="h-px my-4 border-0"></hr>
					<div className="overflow-y-scroll">
						<div className="max-h-[510px] md:max-h-[700px]">
							{event? arr.map((obj)=>{
								if (obj.type == event)
								{
									return (
									<div className="flex">
										<DrawEventCard  key={obj.id} id={obj.id} title={obj.title} type={obj.type} when={obj.when} where={obj.where} bh={obj.bh} ep={obj.ep} ad={obj.ad}/>
										<DrawEventCardModal key={obj.id} obj={obj}/>
									</div>
									)
								}
								else
									return ''
							}) : arr.map((obj)=>(<div className="flex">
							<DrawEventCard  key={obj.id} id={obj.id} title={obj.title} type={obj.type} when={obj.when} where={obj.where} bh={obj.bh} ep={obj.ep} ad={obj.ad}/>
							<DrawEventCardModal key={obj.id}obj={obj}/>
							</div>))}
						</div>
					</div>
					
				
			</div>
		</div>
	</>
			

		
  )
}
