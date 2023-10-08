import Head from 'next/head'
import Image from 'next/image'
import Router  from 'next/router'

export default function Login() {
	return (
	<>
		<Head>
			<title>42 Events</title>
		</Head>
		<div className="min-h-screen dark:bg-gray-900 bg-gray-400">
			<div className="py-10 md:py-20 md:w-[70%] md:w-[50%] lg:w-[40%] mx-auto bg-white min-h-screen">
				<Image
					src="/42_logo.svg"
					className="mx-auto"
					width={150}
					height={150}
				/>
				<h1 className="text-center text-3xl text-gray-400 mb-10 md:mb-20">Events</h1>
				<div class="my-4 flex justify-center mb-5">
					<label for="username" class="sr-only"></label>
					<input type="text" id="username" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Login" required/>
				</div>
				<div class="my-4 flex justify-center">
					<label for="password" class="sr-only"></label>
					<input type="password" id="password" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-gray-400 focus:border-gray-400 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required/>
				</div>
				<div class="flex my-6 justify-center">
					<input id="remember" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
					<label for="remember" class="ml-2 text-sm font-medium text-gray-700">Remember Me</label>
				</div>
				<div className="flex my-4 justify-center text-center">
					<a href="/Dashboard" class="w-[50%] focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">SIGN IN</a>
				</div>
				<div class="flex my-4 justify-center text-gray-700">
					<a href="">Forgot or change your password?</a>
				</div>
				<div class="flex my-4 justify-center text-gray-700">
					<a href="">Sign in as staff</a>
				</div>
				<div class="flex my-4 justify-center text-gray-700">
					<a href="">Read our terms and condition</a>
				</div>
			</div>
		</div>
		
	</>
			

		
  )
}
