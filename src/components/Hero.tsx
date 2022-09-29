/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

export default function Hero() {
	const [text, count] = useTypewriter({
		words: [
			"Hello, I'm a Frontend Developer.",
			'My name is Beardev.',
			'Let me show you my work.',
			'<MyPortfolio /> ',
		],
		loop: true,
		delaySpeed: 1000,
	})
	return (
		<div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden">
			<BackgroundCircle />
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Creative-Tail-Animal-dog.svg"
				className="rounded-full object-cover h-32 w-32 mx-auto"
				alt=""
			/>
			<div className="z-20">
				<h2 className="text-sm tracking-[15px] ml-2 uppercase text-gray-400">
					Software Engineer
				</h2>
				<h1 className="text-5xl font-semibold px-5">
					<p className="mr-3">
						{text}
						<Cursor cursorColor="#F7AB0A" />
					</p>
				</h1>
			</div>
			<div className="flex gap-2 pt-3 z-20">
				<Link href="#about">
					<p className="hero-button scroll-smooth">About</p>
				</Link>
				<Link href="#experience">
					<button className="hero-button">Experience</button>
				</Link>
				<Link href="#skills">
					<button className="hero-button">Skills</button>
				</Link>
				<Link href="#projects">
					<button className="hero-button">Projects</button>
				</Link>
			</div>
		</div>
	)
}
