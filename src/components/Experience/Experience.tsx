import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1.5,
			}}
			viewport={{ once: true }}
			className="flex flex-col relative mt-56  h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center"
		>
			<h3 className="z-20 absolute top-32 pl-4 uppercase tracking-[20px] text-gray-400 text-xl">
				experience
			</h3>
			{/* flex w-full overflow-x-scrollで右スクロール */}
			<div className="flex w-full p-10 snap-x snap-mandatory overflow-x-scroll">
				{/* experience card */}
				<ExperienceCard />
				{/* experience card */}
				<ExperienceCard />
				{/* experience card */}
				<ExperienceCard />
			</div>
		</motion.div>
	)
}
