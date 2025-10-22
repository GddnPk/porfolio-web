import React from "react";

export default function ContactSection() {
	return (
		<section id='contact' className='py-20 bg-gray-900 text-white text-center border-t-1 '>
			<h2 className='text-3xl font-bold mb-6'>Contacto</h2>
			<p className='mb-2'>
				Email:{" "}
				<a href='mailto:tuemail@example.com' className='text-cyan-500'>
					giddonjobspk@gmail.com

				</a>
			</p>
			<p className='mb-2'>
				LinkedIn:{" "}
				<a href='https://linkedin.com/in/tuusuario' target='_blank' className='text-cyan-500'>
					linkedin.com/in/
				</a>
			</p>
			<p>
				GitHub:{" "}
				<a href='https://github.com/GddnPk' target='_blank' className='text-cyan-500'>
					https://github.com/GddnPk	
				</a>
			</p>
		</section>
	);
}
