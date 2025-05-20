export const HomePage = () => {
	return (
		<main>
			{/* Hero */}
			<section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to sample SSR Website</h1>
				<p className="text-lg text-gray-600 max-w-xl">
					This landing page is rendered on the server using React, Vite, and Express.
				</p>
			</section>
			<section id="about" className="h-[50vh]">
				Streamline everything martech.
			</section>
			<section className="h-screen bg-gray-200">animated scroll</section>
			<section id="technologies">Technologies List</section>
			<section id="tagline" className="relative py-64">
				<div
					className="flare-1 animate-drift absolute left-10 top-0 -z-10 size-96 rounded-full"
					style={
						{
							"--x-start": "2px",
							"--y-start": "26px",
							"--x-25": "80px",
							"--y-25": "-9px",
							"--x-50": "-25px",
							"--y-50": "15px",
							"--x-75": "50px",
							"--y-75": "10px",
							"--x-end": "-5px",
							"--y-end": "-3px",
							animationDuration: "10s",
						} as React.CSSProperties
					}
				></div>

				<div
					className="flare-1 animate-drift absolute bottom-0 right-10 -z-10 size-96 rounded-full"
					style={
						{
							"--x-start": "-8px",
							"--y-start": "4px",
							"--x-25": "-20px",
							"--y-25": "20px",
							"--x-50": "24px",
							"--y-50": "-12px",
							"--x-75": "-3px",
							"--y-75": "5px",
							"--x-end": "8px",
							"--y-end": "-10px",
							animationDuration: "15s",
						} as React.CSSProperties
					}
				></div>

				<div className="flex flex-col items-center gap-2 text-center text-4xl font-bold">
					<h1 className="text-[#8248e5]">We do not just implement.</h1>
					<h1 className="bg-[#8248e5] p-2 text-white">We elevate.</h1>
				</div>
			</section>
		</main>
	);
};
