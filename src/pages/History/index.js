import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Statistic from '../../components/Statistic'
import DrawEventCard from '../../components/DrawEventCard'
import DrawEventCardModal from '../../components/DrawEventCardModal'
import Rating from '../../components/Rating'
import { useState } from 'react'

var arr = [
	{id:'hello',title:'Badminton',type:'sports',when:'2023-09-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.',rating:'2'},
	{id:'hello1',title:'Coalition',type:'coallition',when:'2023-08-12T16:30:00',where:'Campus',bh:'1',ep:'5',ad:'-',contentHTML:'Steamboat fest!', rating:'3'},
	{id:'hello2',title:'Board Game',type:'indoor hobby',when:'2023-08-10T16:30:00',where:'Campus',bh:'-',ep:'-',ad:'-',contentHTML:'Settlers with our GameMaster Boon Han!',rating:'4'},
	{id:'hello3',title:'Hackathon',type:'upskilling',when:'2023-07-12T16:30:00',where:'Campus',bh:'20',ep:'10',ad:'200',contentHTML:'Create a card game and host it online',rating:'5'},
	{id:'hello4',title:'ETHKL Talk',type:'upskilling',when:'2023-06-15T16:30:00',where:'Online',bh:'5',ep:'5',ad:'-',contentHTML:'Googlemeet Online ETHKL',rating:'3'},
	{id:'hello5',title:'Khazanah',type:'upskilling',when:'2023-05-12T16:30:00',where:'Campus',bh:'10',ep:'30',ad:'-',contentHTML:'Meeting Khazanah C-levels', rating:'5'},
	{id:'hello6',title:'Board Game',type:'indoor hobby',when:'2023-05-10T16:30:00',where:'Mcdonald',bh:'-',ep:'-',ad:'-',contentHTML:'Settlers with our GameMaster Boon Han!',rating:'5'},
	{id:'hello7',title:'Badminton',type:'sports',when:'2023-04-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.',rating:'5'},
	{id:'hello8',title:'Badminton',type:'sports',when:'2023-03-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.',rating:'4'},
	{id:'hello9',title:'Badminton',type:'sports',when:'2023-02-12T16:30:00',where:'Optimum Train',bh:'-',ep:'-',ad:'-',contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.',rating:'5'},
]

let filterClassActive = {position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(-0px, 38px, 0px)"};
let filterClassDisabled = {display:"none", position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(-0px, 38px, 0px)"};


export default function History() {
	const [event, changeEvent] = useState('');
	const [filter, changeFilter] = useState(false);
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
				<div className="relative">
					<button onClick={()=>filter? changeFilter(false):changeFilter(true)} class="focus:outline-none font-light mt-2 text-sm border border-teal-400 text-teal-400 px-2 py-[3px] hover:border-neutral-950 hover:text-neutral-950 mr-3 dark:hover:border-white dark:hover:text-white" type="button">Filters ↓ 
					</button>
					{/* <!-- Dropdown menu --> */}
					<div class="text-left z-10 text-sm bg-white rounded-sm shadow w-44 dark:bg-gray-700" style={filter?filterClassActive:filterClassDisabled }>
						<button onClick={()=>{changeEvent('');changeFilter(false)}} class="text-left block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Events</button>
						<button onClick={()=>{changeEvent('coallition');changeFilter(false)}} class="text-left block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Coalition Events</button>
						<button onClick={()=>{changeEvent('sports');changeFilter(false)}} class="text-left block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sports Events</button>
						<button onClick={()=>{changeEvent('indoor hobby');changeFilter(false)}} class="text-left block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Indoor Hobby Events</button>
						<button onClick={()=>{changeEvent('upskilling');changeFilter(false)}} class="text-left block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upskilling Events</button>
					</div>
				</div>
				{/* <label for="event_select" class="sr-only">Select Event</label>
				<select onChange={(e)=>changeEvent(e.target.value)}
				id="event_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
					<option value = '' selected>Show All Events (Change to Filter) </option>
					<option value="coallition">Coalition Events</option>
					<option value="sports">Sports Events</option>
					<option value="indoor hobby">Indoor Hobby Events</option>
					<option value="upskilling">Upskilling Events</option>
				</select> */}
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
					<div className="overflow-y-scroll">
						<div className="max-h-[510px] md:max-h-[700px]">
							{event? arr.map((obj)=>{
								if (obj.type == event)
								{
									return (
									<div>
										<div className="flex">
											<DrawEventCard  key={obj.id} id={obj.id} title={obj.title} type={obj.type} when={obj.when} where={obj.where} bh={obj.bh} ep={obj.ep} ad={obj.ad}/>
											<DrawEventCardModal key={obj.id} obj={obj}/>
										</div>
										<Rating obj={obj}/>
									</div>
									)
								}
								else
									return ''
							}) : arr.map((obj)=>(
							<div>
								<div className="flex">
									<DrawEventCard  key={obj.id} id={obj.id} title={obj.title} type={obj.type} when={obj.when} where={obj.where} bh={obj.bh} ep={obj.ep} ad={obj.ad}/>
									<DrawEventCardModal key={obj.id}obj={obj}/>
								</div>
								<Rating obj={obj}/>
							</div>
							))}
						</div>
					</div>
					
				
			</div>
		</div>
	</>
			

		
  )
}
