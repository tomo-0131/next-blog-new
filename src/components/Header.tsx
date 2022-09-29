import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

export default function Header() {
	return (
		<header className="sticky top-0 p-5 flex  items-start justify-between  mx-auto z-20 max-w-7xl xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center gap-4"
			>
				<SocialIcon
					url="https://twitter.com"
					fgColor="white"
					className="hover:animate-spin transition duration-500 ease-in-out"
				/>
				<SocialIcon
					url="https://github.com"
					bgColor="white"
					className="hover:animate-spin transition duration-500 ease-in-out"
				/>
				<SocialIcon
					url="https://zenn.dev"
					fgColor="white"
					className="hover:animate-spin transition duration-500 ease-in-out"
				/>
			</motion.div>

			<div className="flex flex-row items-center cursor-pointer gap-3">
				<SocialIcon
					network="email"
					className="cursor-pointer hover:animate-ping transition duration-500 ease-in-out"
					fgColor="white"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:animate-pulse transition duration-500 ease-in-out">
					Contact Me
				</p>
			</div>
		</header>
	)
}
