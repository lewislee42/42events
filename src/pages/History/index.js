import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Statistic from '../../components/Statistic'

export default function History() {
	
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
		<div className="p-8 sm:ml-64 pt-20 sm:pt-8 h-screen grid md:grid-cols-2 md:gap-6 lg:gap-12 xl:gap-32">
			<div>
				<h2 className="text-2xl">Top Stats</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<Statistic/>
			</div>
			<div>
				<h2 className="text-2xl">Past Events</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
			</div>
			
			
		</div>
	</>
			

		
  )
}
