import React from "react";

export default function ExperienceCard({ exp }) {
	return (
		<div className='bg-gray-800 text-white p-5 rounded-lg shadow-lg mb-6 hover:shadow-xl hover:scale-103 hover:-translate-y-1 transform duration-500 ease-out'>
			<h3 className='font-bold text-xl'>{exp.role}</h3>
			<p className='italic text-gray-400'>
				{exp.company} | {exp.date}
			</p>
			<p className='mt-2'>{exp.description}</p>
		</div>
	);
}
