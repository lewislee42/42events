// import Head from 'next/head'
// import Navbar from '../../components/Navbar'
// import Image from 'next/image'

// export default function Vote() {
// 	let yes = 10;
// 	let no = 1;
// 	let yesPercent = (yes / (yes + no)) * 100;
// 	yesPercent = yesPercent.toString() + '%';
// 	return (
// 		<>
// 			<Head>
// 				<title>42 Events</title>
// 			</Head>
// 			<Navbar />
// 			<div className="ml-64 h-screen">
// 				<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-red-500">
//   					<div className="bg-green-500 h-2.5 rounded-full" style={{width: yesPercent}}></div>
// 				</div>
// 			</div>
			
// 		</>
// 	)
// }

import Head from 'next/head'
import Navbar from '/src/components/Navbar'
import { getSortedEvtsData } from '/src/components/EventDataReader';
import DrawEventCard from '/src/components/DrawEventCard'

export async function getStaticProps() {
	const EventsData = getSortedEvtsData();
	return {
		props: {
			EventsData,
		},
	};
}

export default function Vote({ EventsData }) {
	let nextCoalitionEvent = 0
	let UpcomingEvent = 0
	let lastestEvent = 0
	return (
		<>
			<Head>
				<title>42 Events</title>
			</Head>
			<Navbar />
			<div className='sm:ml-64 h-screen'>
				<div className=' z-0 w-full h-[200px] p-0 m-0 flex p-10 bg-gray-200 dark:bg-gradient-to-r from-gray-500 from-10% via-gray-400 via-30% to-gray-500 to-90%'>
					<div className='grid grid-row-2 gap-y-[11%] h-full w-2/4 mr-5'>
						<div className='w-full rounded-md bg-gray-50 dark:bg-gray-800 px-3 sm:px-4 drop-shadow-xl flex justify-normal'>
							<div className='dark:text-gray-100 my-auto font-bold text-[20px] text-sm sm:text-2xl w-[50%] text-center'>Upcoming Events:</div>
							<div className='justify-center flex m-0 p-0 w-[50%]'>
								<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-sm sm:text-2xl'>None</div>
							</div>
						</div>
						<div className='w-full rounded-md bg-gray-50 dark:bg-gray-800 px-3 sm:px-4 drop-shadow-xl flex justify-normal'>
							<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-sm sm:text-2xl w-[50%] text-center'>Latest proposed Event:</div>
							<div className='justify-center flex m-0 p-0 w-[50%]'>
								<div className='dark:text-gray-100 m-auto font-bold text-[20px] text-sm sm:text-2xl'>Badminton</div>
							</div>
						</div>
					</div>
					<div className='h-full w-2/4 ml-5 rounded-md bg-gray-50 dark:bg-gray-800 px-2 sm:px-4 sm:py-3 drop-shadow-xl'>
						<div className='dark:text-gray-100 font-bold text-[20px] m-2 sm:m-0 text-lg sm:text-3xl'>Next Coalition Event:</div>
						<div className='justify-center flex mt-2 sm:mt-4 w-full'>
							<div className='dark:text-gray-100 font-bold text-lg sm:text-3xl'>Currently in session</div>
						</div>
						
					</div>
				</div>
				<div className='h-2/5'>
					
				</div>
				<div className='h-2/5'>
					
				</div>
				{/* <section className='flex flex-wrap'>
					{EventsData.map(({ id, title, type, when, where }) => (
						<DrawEventCard key={id} id={id} title={title} type={type} when={when} where={where} />
					))}
				</section> */}
				
				
				{/* <div class ="p-4">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-[200px]">
      <div class="grid grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
// 			</div> 
//       </div>
//    </div>
			// </div> */}

			
<footer class="bg-white rounded-lg shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


			</div>
		</>
	)
}