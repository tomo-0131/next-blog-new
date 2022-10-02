import type { NextPage } from 'next'
import About from '../components/About'
import Experience from '../components/Experience/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

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
			<section id="experience" className="snap-center">
				<Experience />
			</section>
			{/* Experience */}
			<section id="skills" className="snap-center">
				<Skills />
			</section>
		</div>
	)
}

export default Home
