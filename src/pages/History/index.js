import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Statistic from '../../components/Statistic'
import DrawEventCard from '../../components/DrawEventCard'
import DrawEventCardModal from '../../components/DrawEventCardModal'

var obj = {
	id:'hello',
	title:'Badminton',
	type:'sports',
	when:'2023-10-12T16:30:00',
	where:'Optimum Train',
	bh:'20',
	ep:'10',
	ad:'10',
	contentHTML:'Two racquets and a shuttlecock, trip, fall, and shoot cock.'
}

export default function History() {
	
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
		<div className="p-8 sm:ml-64 pt-20 sm:pt-8 grid md:grid-cols-2 md:gap-6 lg:gap-12 xl:gap-32">
			<div>
				<h2 className="text-2xl">Top Stats</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<Statistic/>
			</div>
			<div>
				<h2 className="text-2xl">Past Events</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<div className="flex">
					<DrawEventCard  key={obj.id} id={obj.id} title={obj.title} type={obj.type} when={obj.when} where={obj.where} bh={obj.bh} ep={obj.ep} ad={obj.ad}/>
					<DrawEventCardModal obj={obj}/>
				</div>
			</div>


		</div>
	</>
			

		
  )
}
