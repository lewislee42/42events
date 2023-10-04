import Head from 'next/head'
import Navbar from '/src/components/Navbar'
import Date from '/src/components/Date'
import utilStyles from '/src/styles/utils.module.css';
import { getSortedEvtsData } from '/src/components/EventDataReader';
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export async function getStaticProps() {
	const allEvtsData = getSortedEvtsData();
	return {
		props: {
			allEvtsData,
		},
	};
}

function evtColor({ type }) {
	switch (type.toLowerCase()) {
		case 'sports':
			return '#10b981'; //Emerald-500
		case 'indoor hobby':
			return '#84cc16'; //Lime-500
		case 'upskilling':
			return '#3b82f6'; //Blue-500
		case 'coallition':
			return '#a855f7'; //Purple-500
		default:
			return '#71717a'; //Zinc-500
	}
}

export default function Dashboard({ allEvtsData }) {
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className='ml-64 h-screen'>
				<section>
				{allEvtsData.map(({ id, title, type, when, where }) => (
					<div key={id} className="w-4/5 h-20 m-2 p-0 border-2 flex justify-normal"
						style={{borderColor: evtColor({type})}}>
						<div className="w-1/5 h-full m-0 px-0 pt-2.5 pb-3.5"
							style={{backgroundColor: evtColor({type})}}>
							<div className={utilStyles.evdday}>
								<Date dateString={when} want='day' />
							</div>
							<div>
								<Date dateString={when} want='mon' />
							</div>
						</div>
						<div>
							<h4 className={utilStyles.evtitle}>{title}</h4>
							<div className={utilStyles.evdesc}>
								<AiOutlineClockCircle 
									className={utilStyles.evico} />
								<Date dateString={when} want='hmb' />
								<MdOutlineLocationOn
									className={utilStyles.evico} /> {where}
							</div>
						</div>
					</div>
				))}
				</section>
			</div>
		</>
	)
}
//			<main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
//				
//			</main>
//				<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
//
//				{/*<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//					<Image
//						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//						src="/next.svg"
//						alt="Next.js Logo"
//						width={180}
//						height={37}
//						priority
//					/>
//				</div>*/}
//				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//					<a
//						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//						target="_blank"
//						rel="noopener noreferrer"
//					>
//						<h2 className={`mb-3 text-2xl font-semibold`}>
//							Docs{' '}
//							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//								-&gt;
//							</span>
//						</h2>
//						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//							Find in-depth information about Next.js features and API.
//						</p>
//					</a>
//
//					<a
//						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//						target="_blank"
//						rel="noopener noreferrer"
//					>
//						<h2 className={`mb-3 text-2xl font-semibold`}>
//							Learn{' '}
//							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//								-&gt;
//							</span>
//						</h2>
//						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//							Learn about Next.js in an interactive course with&nbsp;quizzes!
//						</p>
//					</a>
//
//					<a
//						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//						target="_blank"
//						rel="noopener noreferrer"
//					>
//						<h2 className={`mb-3 text-2xl font-semibold`}>
//							Templates{' '}
//							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//								-&gt;
//							</span>
//						</h2>
//						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//							Discover and deploy boilerplate example Next.js&nbsp;projects.
//						</p>
//					</a>
//
//					<a
//						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//						target="_blank"
//						rel="noopener noreferrer"
//					>
//						<h2 className={`mb-3 text-2xl font-semibold`}>
//							Deploy{' '}
//							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//								-&gt;
//							</span>
//						</h2>
//						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//							Instantly deploy your Next.js site to a shareable URL with Vercel.
//						</p>
//					</a>
//				</div>
