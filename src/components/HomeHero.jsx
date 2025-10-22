import React from "react";

export default function HomeHero() {
	return (
		<section
			id='home'
			className='relative py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden border-b-1'
		>
			<div className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 border-white md:gap-10'>
				{/* Texto */}
				<div className='text-center md:text-left md:mr-12 animate-fadeIn'>
					<h1 className='text-4xl md:text-5xl font-bold mb-5'>Hola, soy José Miguel</h1>
					<p className='text-xl md:text-2xl mb-15'>Desarrollador Full Stack | Diseñador Gráfico</p>
					
					<a
						href='/cv.pdf'
						download
						className='bg-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-700 transition transform hover:scale-105'
					>
						Descargar CV
					</a>
				</div>

				{/* Foto */}
				<div className='mb-5 mt-5 md:mt-0 relative md:mb-0 animate-fadeIn'>
					<div className='flex items-center justify-center w-48 h-48 md:w-70 md:h-70 rounded-full overflow-hidden mx-auto md:mx-0 shadow-2xl transform hover:scale-105 transition duration-500 grayscale hover:grayscale-0'>
						<img
							src='/perfil.jpeg'
							alt='Treecko'
							className="mx-auto w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
