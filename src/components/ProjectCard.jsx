import React from "react";

export default function ProjectCard({ project }) {
	return (
		<div className='bg-gray-800 text-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
			<h3 className='font-bold text-xl mb-2'>{project.name}</h3>
			<p className='text-gray-400 mb-3'>{project.description}</p>
			<a href={project.url} target='_blank' className='text-cyan-500 hover:underline'>
				Ver repositorio
			</a>
		</div>
	);
}
