export default function RequestForm(props) {
	return (
		<form onSubmit={(e)=>{e.preventDefault();props.setPost([...props.post,{id:props.id,title:props.title,event:props.event,text:props.text}]);}}>
			<div class="mt-4 relative z-0 w-full mb-6 group">
				<input type="text" value={props.title} onChange={(e)=>props.setTitle(e.target.value)}name="title" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required/>
				<label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<select id="event_select" onChange={(e)=>props.setEvent(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-x-0 border-t-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
					<option selected>Choose events</option>
					<option value="coallition">Coalition Events</option>
					<option value="sports">Sports Events</option>
					<option value="indoor hobby">Indoor Hobby Events</option>
					<option value="upskilling">Upskilling Events</option>
				</select>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Description:</label>
				<textarea value={props.text} onChange={(e)=>props.setText(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Description..." required></textarea>
			</div>
			<button type='submit' class="mt-3 text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Post</button>
		</form>
	)
}