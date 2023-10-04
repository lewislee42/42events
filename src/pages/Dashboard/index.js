import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
				
		</>
	)
}
