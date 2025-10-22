import React from "react";
import HomeHero from "../components/HomeHero";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";

// Datos
import { skills } from "../data/skills";
import { experience } from "../data/experience";
import { projects } from "../data/projects";

export default function Home() {
	return (
		<div className='bg-gray-900 text-white'>
			{/* Hero */}
			<HomeHero />

			{/* Skills */}
			<section id='skills' className='py-20 px-4 md:px-0 mx-auto border-b-1'>
				<h2 className='text-3xl font-bold text-center mb-12'>Skills</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10 mb-0 md:m-20 md:mt-5'>
					{skills.map((skill, i) => (
						<SkillCard key={i} skill={skill} />
					))}
				</div>
			</section>

			{/* Experiencia */}
			<section id='experience' className='py-20 px-4 md:px-0 mx-auto border-b-1'>
				<h2 className='text-3xl font-bold text-center mb-12'>Experiencia</h2>
				<div className='space-y-6 m-10 md:m-20 mt-0 mb-0'>
					{experience.map((exp, i) => (
						<ExperienceCard key={i} exp={exp} />
					))}
				</div>
			</section>

			{/* Proyectos */}
			<section id='projects' className='py-20 px-4 md:px-0 mx-auto'>
				<div>
					<h2 className='text-3xl font-bold text-center mb-12'>Proyectos</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 md:m-20 mt-0 mb-0'>
						{projects.map((project, i) => (
							<ProjectCard key={i} project={project} />
						))}
					</div>
				</div>
			</section>

			{/* Contacto */}
			<ContactSection />
		</div>
	);
}
