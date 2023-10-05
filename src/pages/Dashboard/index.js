import Head from 'next/head'
import Navbar from '/src/components/Navbar'
import { getSortedEvtsData } from '/src/components/EventDataReader';
import DrawEventCard from '/src/components/DrawEventCard'

export async function getStaticProps() {
	const EventsData = getSortedEvtsData({ path: '/data/events' });
	return {
		props: {
			EventsData,
		},
	};
}

export default function Dashboard({ EventsData }) {
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className='p-8 sm:ml-64 pt-20 sm:pt-8 h-screen dark:bg-gray-900'>
				<section className='flex flex-wrap'>
				{EventsData.map(({ id, title, type, when, where, bh, ep, ad }) => (
					<DrawEventCard key={id} id={id} title={title} type={type} when={when} where={where} bh={bh} ep={ep} ad={ad} />
				))}
				</section>
			</div>
		</>
	)
}
