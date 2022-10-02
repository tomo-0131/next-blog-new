import { motion } from 'framer-motion'

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1.5,
			}}
			viewport={{ once: true }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center"
		>
			<h3 className="absolute pl-5 top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 1.5,
				}}
				viewport={{ once: true }}
				src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				alt=""
				className="mt-40 rounded-full object-cover h-96 w-96 flex md:-mt-80 md:h-[520px] md:w-[520px] items-center justify-center"
			/>

			<div className="mt-2 md:-mt-40 space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Hear is a little background</h4>
				<p className="text-base">
					While the "bout of the century" with Ali at Nippon Budokan in Tokyo
					was slammed as a stunt, the mere fact that Inoki was able to stage the
					event at all won the hearts of many. Over the years, his domestic
					popularity grew while a number of his catchy inane sayings became
					popular across the country. In 1989, Inoki was elected to Japan's
					House of Councillors as a member of the now-defunct Sports and Peace
					Party. He traveled to Iraq prior to the 1990 Gulf War to gain the
					release of Japanese being held hostage. He retired as a wrestler in
					1998 but was re-elected as an upper house member in 2013 running as a
					member of another opposition party. Having built a strong personal
					connection with North Korea over the years, Inoki traveled there
					repeatedly to help resolve the issue of that nation's past abductions
					of Japanese citizens, before ending his political career in 2019. In
					July 2020, Inoki announced he had been diagnosed with heart disease.
				</p>
			</div>
		</motion.div>
	)
}
