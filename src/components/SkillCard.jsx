import React from "react";

export default function SkillCard({ skill }) {
	
	const categoryColors = {
		programacion: "bg-gray-800 hover:bg-gray-700",
        diseño: "bg-gray-600 hover:bg-gray-500",
	};

	return (
		<div
			className={`text-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-xl ${
				categoryColors[skill.category] || "bg-gray-800"
			}`}
		>
			<h3 className='font-bold text-lg'>{skill.name}</h3>
			<p className='text-sm text-gray-300'>{skill.level}</p>
		</div>
	);
}
