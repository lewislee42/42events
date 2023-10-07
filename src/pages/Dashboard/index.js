import Head from 'next/head'
import Navbar from '/src/components/Navbar'
import { getSortedEvtsData } from '/src/components/EventDataReader'
import DrawFeaturedEventCard from '/src/components/DrawFeaturedEventCard'
import DrawEventCard from '/src/components/DrawEventCard'
import DrawEventCardModal from '/src/components/DrawEventCardModal'
import VoteBar from '../../components/VoteBar'

export async function getStaticProps() {
	const EventsData = await getSortedEvtsData({ path: '/data/events' });
	let Featured = await getSortedEvtsData({ path: '/data/featured' });
	Featured = Featured[0]
	const Votables = await getSortedEvtsData({ path: '/data/votable' });
	return {
		props: {
			EventsData,
			Featured,
			Votables,
		},
	};
}

export default function Dashboard({ EventsData, Featured, Votables }) {
	let yes = 10;
	let no = 16;
	let yesPercent = (yes / (yes + no)) * 100;
	yesPercent = yesPercent.toString() + '%';
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className='sm:ml-64 h-screen bg-zinc-100'>
				<div className='z-0 w-full sm:h-[400px] p-0 m-0 sm:flex p-10 bg-gray-200 dark:bg-gradient-to-r from-gray-500 from-10% via-gray-400 via-30% to-gray-500 to-90%'>
					<div className='grid grid-rows-2 gap-x-[11%] sm:gap-y-[11%] h-full sm:w-2/4 sm:mr-5'>
						<div className='w-full rounded-md bg-gray-50 dark:bg-gray-800 p-2 px-5 mb-3 sm:mb-0 h-full'>
							<div className='dark:text-gray-100 my-auto font-bold text-[20px] text-xl sm:text-2xl text-center pb-2'>Next Coalition Event</div>
							<div className='justify-center flex mt-0 p-0 border-t h-2/3'>
								<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-xl sm:text-2xl'>Currently in session</div>
							</div>
						</div>
						<div className='w-full rounded-md bg-gray-50 dark:bg-gray-800 p-2 px-5 mt-3 sm:mt-0 mb-3 sm:mb-0 h-full'>
							<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-xl sm:text-2xl text-center pb-2'>Latest proposed Event</div>
							<div className='justify-center flex m-0 p-0 border-t h-2/3'>
								<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-xl sm:text-2xl'>Badminton</div>
							</div>
						</div>
					</div>
					<div className='bg-gray-50 dark:bg-gray-800 mt-6 sm:mt-0 rounded-md px-5 py-2 sm:w-2/4'>
						<section id='featured'>
							<DrawFeaturedEventCard props={ Featured } />
						</section>
					</div>
				</div>
				<div className='h-2/3 sm:h-[65%] p-0 sm:p-6 sm:flex'>
					<div className='sm:w-2/4 sm:p-4 bg-white border border-zinc-100 sm:mr-3 h-2/4 sm:h-full'>
						<div className='h-[60px] w-auto justify-center flex p-1 py-4 sm:mb-3'>
							<div className='font-bold w-2/4 text-sm py-1 px-3 sm:text-xl sm:pt-0'>Events</div>
							<div className='w-2/4 flex justify-end'>
								<button className='font-light text-sm border border-teal-400 text-teal-400 px-2 py-[3px] h-full m-0 hover:border-neutral-950 hover:text-neutral-950'>Event's Marks</button>
								<button className='font-light ml-1 text-sm border border-teal-400 text-teal-400 px-2 py-[3px] h-full hover:border-neutral-950 hover:text-neutral-950 mr-3'>Filters ↓</button>
							</div>
						</div>
						<div className='overflow-scroll h-[75%] sm:h-[85%] p-2 mb-4 border-t sm:border-b'>
							<section>
								{EventsData.map((props) => (
									<div className='flex'>
										<DrawEventCard key={props.id} id={props.id} title={props.title} type={props.type} when={props.when} where={props.where} bh={props.bh} ep={props.ep} ad={props.ad} />
										<DrawEventCardModal obj={props} />
									</div>
								))}
							</section>
						</div>
					</div>
					<div className='sm:w-2/4 sm:p-4 bg-white border border-zinc-100 sm:ml-3 h-2/4 sm:h-full'>
						<div className='h-[60px] w-auto justify-center flex p-1 py-4 sm:mb-3'>
							<div className='font-bold w-2/4 text-sm py-1 px-3 sm:text-xl sm:pt-0'>Voting required Events</div>
							<div className='w-2/4 flex justify-end'>
								<button className='font-light text-sm border border-teal-400 text-teal-400 px-2 py-[3px] h-full m-0 hover:border-neutral-950 hover:text-neutral-950'>Event's Marks</button>
								<button className='font-light ml-1 text-sm border border-teal-400 text-teal-400 px-2 py-[3px] h-full hover:border-neutral-950 hover:text-neutral-950 mr-3'>Filters ↓</button>
							</div>
						</div>
						<div className='overflow-scroll h-[75%] sm:h-[85%] p-2 mb-4 border-t sm:border-b'>
							<section className='w-full'>
								{Votables.map(({ id, title, type, when, where, bh, ep, ad }) => (
									<div className='pr-4'>
										<DrawEventCard key={id} id={id} title={title} type={type} when={when} where={where} bh={bh} ep={ep} ad={ad} />
										<VoteBar/>
									</div>
								))}
							</section>
						</div>
					</div>
				</div>
				<footer className="bg-white shadow dark:bg-zinc-100">
					<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
						<div className="sm:flex items-center justify-center">
							<ul className="flex mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
								<li>
									<a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
								</li>
								<li>
									<a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
								</li>
								<li>
									<a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
								</li>
								<li>
									<a href="#" className="hover:underline">Contact</a>
								</li>
							</ul>
						</div>
						<hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 my-8" />
					</div>
				</footer>
			</div>
		</>
	)
}
