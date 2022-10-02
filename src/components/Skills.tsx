import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
	return (
		<motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] mx-auto items-center justify-center h-screen">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500	text-sm">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
				Hover over a skill for currency properties.
			</h3>
		</motion.div>
	)
}

export default Skills
