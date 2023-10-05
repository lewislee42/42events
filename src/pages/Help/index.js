import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function Help() {
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
		<div className="p-8 sm:ml-64 pt-20 sm:pt-8 h-screen">
			<Image 
				src="/keep-calm.jpg"
				className="mx-auto"
				width={500}
				height={500}
			/>
			<p className="mt-6 mx-auto w-[500px] text-center text-3xl">Meanwhile, RTFM!</p>
			
		</div>
	</>
			

		
  )
}
