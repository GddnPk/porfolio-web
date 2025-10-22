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

import { Code2, Briefcase, FolderOpen, Sparkles } from "lucide-react";


export default function Home() {
	return (
		<div className='bg-gray-900 text-white'>
			{/* Hero */}
			<HomeHero />

			{/* Skills */}
			<section id='skills' className='py-20 px-4 md:px-0 mx-auto border-b-1'>
				<h2 className='flex items-center justify-center gap-2 text-3xl font-bold text-center mb-12'>
					<Code2 className='w-8 h-8 text-blue-400' />
					Skills
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10 mb-0 md:m-20 md:mt-5'>
					{skills.map((skill, i) => (
						<SkillCard key={i} skill={skill} />
					))}
				</div>
			</section>

			{/* Experiencia */}
			<section id='experience' className='py-20 px-4 md:px-0 mx-auto border-b-1'>
				<h2 className='flex items-center justify-center gap-2 text-3xl font-bold text-center mb-12'>
					<Briefcase className='w-8 h-8 text-amber-400' />
					Experiencia
				</h2>
				<div className='space-y-6 m-10 md:m-20 mt-0 mb-0'>
					{experience.map((exp, i) => (
						<ExperienceCard key={i} exp={exp} />
					))}
				</div>
			</section>

			{/* Proyectos */}
			<section id='projects' className='py-20 px-4 md:px-0 mx-auto'>
				<h2 className='flex items-center justify-center gap-2 text-3xl font-bold text-center mb-12'>
					<FolderOpen className='w-8 h-8 text-green-400' />
					Proyectos
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 md:m-20 mt-0 mb-0'>
					{projects.map((project, i) => (
						<ProjectCard key={i} project={project} />
					))}
				</div>
			</section>

			{/* Contacto */}
			<ContactSection />
		</div>
	);
}
