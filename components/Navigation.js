import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';

const Navigation = () => {
	return (
		<div class="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
			<div class="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
				<a class="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white">
					Luke Mico
				</a>
				<div class="flex items-center">
					<div class="md:flex lg:flex space-x-4 font-medium text-gray-800 hidden sm:block dark:text-white">
						<a
							class="transition-colors hover:text-sky-500"
							target=""
							rel="noreferrer"
							href="/#about"
						>
							<div>About</div>
						</a>
						<a
							class="transition-colors hover:text-sky-500"
							target=""
							rel="noreferrer"
							href="/blog"
						>
							<div>Blog</div>
						</a>
						<a
							class="transition-colors hover:text-sky-500"
							target=""
							rel="noreferrer"
							href="/projects"
						>
							<div>Projects</div>
						</a>
					</div>
					<div class="flex item-center">
						<ThemeSwitch />
						<button
							type="button"
							class="sm:hidden w-8 h-8 ml-1 mr-1 rounded"
							aria-label="Toggle Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="text-gray-900 dark:text-gray-100"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>

						<div class="fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 overflow-y-auto translate-x-full">
							<button
								type="button"
								aria-label="toggle modal"
								class="fixed w-full h-full cursor-auto focus:outline-none"
							></button>
							<nav class="fixed h-full mt-8">
								<div class="px-12 py-4">
									<a href="/#about"> About </a>
								</div>
								<div class="px-12 py-4">
									<a href="/#blog"> Blog </a>
								</div>
								<div class="px-12 py-4">
									<a href="/#projects"> Projects </a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
