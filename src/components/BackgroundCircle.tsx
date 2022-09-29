import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircle() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{ duration: 2.5 }}
			className="relative flex justify-center items-center"
		>
			<div className="absolute mt-52 border  border-white rounded-full h-[200px] w-[200px] animate-ping" />
			<div className="absolute mt-52 border  border-white rounded-full h-[300px] w-[300px]  opacity-20" />
			<div className="absolute mt-52 border  border-white rounded-full h-[500px] w-[500px] opacity-20" />

			<div className="border absolute mt-52 border-white rounded-full h-[650px] w-[650px] opacity-20 animate-ping" />
			<div className="border absolute mt-52 border-white rounded-full h-[800px] w-[800px]  opacity-20 " />
		</motion.div>
	)
}
