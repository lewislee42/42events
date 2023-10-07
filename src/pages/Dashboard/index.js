import Head from 'next/head'
import Navbar from '/src/components/Navbar'
import { getSortedEvtsData, getEvtData } from '/src/components/EventDataReader';
import DrawFeaturedEventCard from '/src/components/DrawFeaturedEventCard'
import DrawEventCard from '/src/components/DrawEventCard'
import DrawEventCardModal from '../../components/DrawEventCardModal'

export async function getStaticProps() {
	const EventsData = await getSortedEvtsData({ path: '/data/events' });
	let Featured = await getSortedEvtsData({ path: '/data/featured' });
	Featured = Featured[0]
	return {
		props: {
			EventsData,
			Featured,
		},
	};
}

export default function Dashboard({ EventsData, Featured, ftData }) {
	const ftEvent = Featured[0]
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className='p-8 sm:ml-64 pt-20 sm:pt-8 h-screen dark:bg-gray-900'>
				<section id='featured'>
					<DrawFeaturedEventCard props={ Featured } />
				</section>
				<section className=''>
				{EventsData.map((props) => (
					<div className='flex'>
						<DrawEventCard key={props.id}
							id={props.id} title={props.title}
							type={props.type} when={props.when}
							where={props.where} bh={props.bh}
							ep={props.ep} ad={props.ad} />
						<DrawEventCardModal obj={props} />
					</div>
				))}
				</section>
			</div>
		</>
	)
}
