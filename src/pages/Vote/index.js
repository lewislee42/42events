import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'

export default function Vote() {
	let yes = 10;
	let no = 1;
	let yesPercent = (yes / (yes + no)) * 100;
	yesPercent = yesPercent.toString() + '%';
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className="ml-64 h-screen">
				<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-red-500">
  					<div className="bg-green-500 h-2.5 rounded-full" style={{width: yesPercent}}></div>
				</div>
			</div>
			
		</>
	)
}