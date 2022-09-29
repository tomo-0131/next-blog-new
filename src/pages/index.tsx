import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
	return (
		<div className="bg-[rgb(36,36,36)] w-full h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
			{/* Header */}
			<Header />
			{/* Hero */}
			<section className="snap-start">
				<Hero />
			</section>
			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>
			{/* Experience */}
		</div>
	)
}

export default Home
