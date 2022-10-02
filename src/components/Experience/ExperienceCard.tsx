/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { motion } from 'framer-motion'

function ExperienceCard() {
	return (
		<article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[500px] h-[540px] md:w-[600px] xl:w-[700px] snap-center bg-[#282828] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-scroll mt-40">
			<motion.img
				initial={{ x: -200, opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 1.5,
				}}
				viewport={{ once: true }}
				src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				alt=""
				className="-mt-2 rounded-full object-cover object-centers xl:w-[200px] xl:h-[200px] h-40 w-40 flex md:-mt-80 md:h-[520px] md:w-[520px] items-center justify-center"
			/>
			<div className="md:px-10">
				<h4 className="text-2xl font-light">FRONTEND ENGINEER</h4>
				<p className="flex space-x-2 my-2">Olive Inc.</p>
				<div className="flex space-x-4 my-2">
					<img
						src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						className="h-10 w-10 rounded-full"
					/>
					<img
						src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						className="h-10 w-10 rounded-full"
					/>
					<img
						src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						className="h-10 w-10 rounded-full"
					/>
				</div>
				<p className="text-left">Started work... </p>
				<ul className="list-disc space-y-4 ml-5 mt-3">
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
