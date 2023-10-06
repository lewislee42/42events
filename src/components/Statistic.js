import { GiBlackHoleBolas } from 'react-icons/gi';
import { Si42 } from 'react-icons/si';
import { useState } from 'react';

export default function Statistics() {
	const [engagement, setEngagement] = useState(false);
	return(
		<>
			<h4 className="text-l"> Most Events Proposed</h4>
			<div class="my-2 p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
				<div className="flex gap-2 md:gap-4 lg:gap-16 xl:gap-20 flex-wrap">
					<a href="https://profile.intra.42.fr/users/booi" title="click for intra link" target="blank">
						<img class="w-16 h-16 md:w-24 md:h-24 rounded-full" src="https://cdn.intra.42.fr/users/63c402ecbf814223574b3bad15ca8038/booi.jpg" alt="Rounded avatar"/>
					</a>
					<div>
						<h5 class="font-bold font-mb-3 text-gray-700 dark:text-gray-400">Total Events</h5>
						<p class="text-center mb-3 font-normal text-gray-700 dark:text-white">58</p>
					</div>
					<div>
						<h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">BreakDown</h5>
						<p class="text-white px-2 text-sm rounded-sm bg-blue-500">Coalition 5</p>
						<p class="text-white px-2 text-sm rounded-sm bg-emerald-500">Sports 0</p>
						<p class="text-white px-2 text-sm rounded-sm bg-purple-500">Indoor 50</p>
						<p class="text-white px-2 text-sm rounded-sm bg-lime-500">Upskilling 3</p>
					</div>
				</div>
			</div>
			<h4 className="text-l"> Most Events Participation</h4>
			<div class="my-2 p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
				<div className="flex gap-2 md:gap-4 lg:gap-16 xl:gap-20 flex-wrap">
					<a href="https://profile.intra.42.fr/users/thilvija" title="click for intra link" target="blank">
						<img class= "w-16 h-16 md:w-24 md:h-24 rounded-full" src="https://media.licdn.com/dms/image/C5603AQHDrRhTUyf6Iw/profile-displayphoto-shrink_800_800/0/1592055289594?e=2147483647&v=beta&t=Mx0Ps0Z2ellGJ2E0IQMSFVijI1xUEL67dAJti-quUXg" alt="Rounded avatar"/>
					</a>
					<div>
						<h5 class="font-bold font-mb-3 text-gray-700 dark:text-gray-400">Total Events</h5>
						<p class="text-center mb-3 font-normal text-gray-700 dark:text-white">200</p>
					</div>
					<div>
						<h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">BreakDown</h5>
						<p class="text-white px-2 text-sm rounded-sm bg-blue-500">Coalition 50</p>
						<p class="text-white px-2 text-sm rounded-sm bg-emerald-500">Sports 50</p>
						<p class="text-white px-2 text-sm rounded-sm bg-purple-500">Indoor 50</p>
						<p class="text-white px-2 text-sm rounded-sm bg-lime-500">Upskilling 50</p>
					</div>
				</div>
			</div>
			<button onClick={()=>{if (engagement === false) setEngagement(true); else setEngagement(false)}} className="my-4 block rounded-sm w-full text-left hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-600 bg-gray-400 focus:outline-none">
				<h3 className="text-xl text-white p-2">Engagement Awards
					<svg class="w-3 h-3 shrink-0 rotate-180 inline ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
					</svg>
				</h3>
			</button>
			{engagement? 
			(<>
			<h4 className="text-l font-extrabold"> Most BlackHole(days) Awarded</h4>
			<div class="my-2 p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
				<div className="flex gap-2 md:gap-4 lg:gap-16 xl:gap-20 flex-wrap">
					<a href="https://profile.intra.42.fr/users/jthor" title="click for intra link" target="blank">
						<img class="w-16 h-16 md:w-24 md:h-24 rounded-full" src="https://cdn.intra.42.fr/users/7bb36419409f3e533c4cb3f553895b1b/jthor.jpg" alt="Rounded avatar"/>
					</a>
					<div>
						<h5 class="font-bold font-mb-3 text-gray-700 dark:text-gray-400"><GiBlackHoleBolas className="mx-2 inline"/>BlackHole</h5>
						<p class="text-center mb-3 font-normal text-gray-700 dark:text-white">60</p>
					</div>
					<div>
						<h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">BreakDown</h5>
						<p class="text-white px-2 text-sm rounded-sm bg-blue-500">Coalition 15</p>
						<p class="text-white px-2 text-sm rounded-sm bg-emerald-500">Sports 15</p>
						<p class="text-white px-2 text-sm rounded-sm bg-purple-500">Indoor 20</p>
						<p class="text-white px-2 text-sm rounded-sm bg-lime-500">Upskilling 10</p>
					</div>
				</div>
			</div>
			<h4 className="text-l font-extrabold"> Most Evaluation Points Awarded</h4>
			<div class="my-2 p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
				<div className="flex gap-2 md:gap-4 lg:gap-16 xl:gap-20 flex-wrap">
					<a href="https://profile.intra.42.fr/users/schuah" title="click for intra link" target="blank">
						<img class="w-16 h-16 md:w-24 md:h-24 rounded-full" src="https://cdn.intra.42.fr/users/0301d17483cad0b30615aabb7f96c559/schuah.jpg" alt="Rounded avatar"/>
					</a>
					<div>
						<h5 class="font-bold font-mb-3 text-gray-700 dark:text-gray-400"><Si42 className="mr-2 inline"/>Eval Points</h5>
						<p class="text-center mb-3 font-normal text-gray-700 dark:text-white">50</p>
					</div>
					<div>
						<h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">BreakDown</h5>
						<p class="text-white px-2 text-sm rounded-sm bg-blue-500">Coalition 5</p>
						<p class="text-white px-2 text-sm rounded-sm bg-emerald-500">Sports 20</p>
						<p class="text-white px-2 text-sm rounded-sm bg-purple-500">Indoor 5</p>
						<p class="text-white px-2 text-sm rounded-sm bg-lime-500">Upskilling 20</p>
					</div>
				</div>
			</div>
			<h4 className="text-l font-extrabold"> Most Alterian ₳ awarded</h4>
			<div class="my-2 p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
				<div className="flex gap-2 md:gap-4 lg:gap-16 xl:gap-20 flex-wrap">
					<a href="https://profile.intra.42.fr/users/bshamsid" title="click for intra link" target="blank">
						<img class="w-16 h-16 md:w-24 md:h-24 rounded-full" src="https://cdn.intra.42.fr/users/15dff9281140bdfe37fd150b61936695/bshamsid.jpeg" alt="Rounded avatar"/>
					</a>
					<div>
						<h5 class="font-bold font-mb-3 text-gray-700 dark:text-gray-400">₳ Alterian </h5>
						<p class="text-center mb-3 font-normal text-gray-700 dark:text-white">1000</p>
					</div>
					<div>
						<h5 class="mb-3 font-bold text-gray-700 dark:text-gray-400">BreakDown</h5>
						<p class="text-white px-2 text-sm rounded-sm bg-blue-500">Coalition 250</p>
						<p class="text-white px-2 text-sm rounded-sm bg-emerald-500">Sports 250</p>
						<p class="text-white px-2 text-sm rounded-sm bg-purple-500">Indoor 250</p>
						<p class="text-white px-2 text-sm rounded-sm bg-lime-500">Upskilling 250</p>
					</div>
				</div>
			</div>
			</>):''}
		</>
	)
}