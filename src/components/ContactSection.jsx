import React from "react";

import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function ContactSection() {
	return (
		<section id='contact' className='py-20 bg-gray-900 text-white text-center border-t border-white'>
			<h2 className='flex items-center justify-center gap-3 text-3xl font-bold mb-6'>
				<Send className='w-8 h-8 text-pink-400' />
				Contacto | Enlaces
			</h2>

			<p className='mb-2 flex items-center justify-center gap-2'>
				<Mail className='w-5 h-5 text-cyan-500' />
				<a href='mailto:giddonpk@gmail.com' className='text-cyan-500 hover:underline'>
					giddonpk@gmail.com
				</a>
			</p>

			<p className='mb-2 flex items-center justify-center gap-2'>
				<Linkedin className='w-5 h-5 text-cyan-500' />
				<a href='https://linkedin.com/in/jmhpk' target='_blank' className='text-cyan-500 hover:underline'>
					linkedin.com/in/jmhpk
				</a>
			</p>

			<p className='flex items-center justify-center gap-2'>
				<Github className='w-5 h-5 text-cyan-500' />
				<a href='https://github.com/GddnPk' target='_blank' className='text-cyan-500 hover:underline'>
					github.com/GddnPk
				</a>
			</p>
		</section>
	);
}
