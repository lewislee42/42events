import '@/styles/globals.css'
import 'src/styles/featured_event_card.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
	<>
		<Head>
        	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link href="/images/icon.png" rel="icon" type="image/png" />
			<link href="/images/icon.png" rel="shortcut icon" type="image/png" />
      	</Head>
		<Component {...pageProps} />
	</>
	)
}
