
import { useState } from 'react'
import { IoIosGitPullRequest } from 'react-icons/io';
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import RequestForm from '../../components/RequestForm'
import RequestEventCard from '../../components/RequestEventCard'

export default function Request() {
	const [title, setTitle] = useState('');
	const [event, setEvent] = useState('');
	const [text, setText] = useState('');
	const [post, setPost] = useState([
		{title:'Game of Volleyball anyone?',event:'sports',text:'Anyone interested to host the game? Suggest Game venue and date and budget and submit a form'},
		{title:'Looking for boardgames kaki',event:'indoor hobby',text:'Boon Han pls volunteer, Boon Han pls volunteer, Boon Han pls volunteer, Boon Han pls volunteer'}
]);
	
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<Navbar/>
		<div className="p-2 sm:ml-64 pt-20 sm:pt-8 sm:p-6 lg:p-8 grid md:grid-cols-2 md:gap-4 lg:gap-6 lg:gap-8 xl:gap-16 dark:bg-gray-900 dark:text-white min-h-screen">
			<div className="px-2 py-4 md:px-6 mb-4 border border-solid border-gray-300 rounded-sm max-h-[710px] md:max-h-[900px]">
				<h2 className="text-2xl">Create Request
					<IoIosGitPullRequest className="inline ml-2"/>
				</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<div className="overflow-y-scroll">
					<div className="max-h-[510px] md:max-h-[700px]">
						<RequestForm title={title} setTitle={setTitle} event={event} setEvent={setEvent} text={text} setText={setText} post={post} setPost={setPost}/>
					</div>
				</div>
			</div>
			<div className="px-2 py-4 md:px-6 mb-4 border border-solid border-gray-300 rounded-sm max-h-[710px] md:max-h-[900px]">
				<h2 className="text-2xl">Opened Requests</h2>
				<hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
				<div className="overflow-y-scroll">
					<div className="max-h-[510px] md:max-h-[700px]">
						{post.map((obj)=><RequestEventCard obj={obj}/>)}
					</div>
				</div>
				
			</div>
			
			
		</div>
	</>
			

		
  )
}
