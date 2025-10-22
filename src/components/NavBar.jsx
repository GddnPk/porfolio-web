import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // iconos Feather

export default function Navbar() {
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [open, setOpen] = useState(false);

	// Controla la visibilidad del nav con el scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				setVisible(false);
				setOpen(false)
			} else {
				setVisible(true);
				setOpen(false)
			}
			setLastScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<nav
			className={`bg-gray-900 text-white font-bold p-4 flex justify-between items-center border-b fixed w-full h-20 top-0 z-50 transition-transform duration-300 ${
				visible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			{/* Logo */}
			<div className='font-bold text-2xl'>JMHG - Portfolio</div>

			{/* Menú Desktop */}
			<div className='space-x-6 hidden md:flex'>
				<a href='#home' className='hover:text-cyan-500 transition'>
					Home
				</a>
				<a href='#skills' className='hover:text-cyan-500 transition'>
					Skills
				</a>
				<a href='#experience' className='hover:text-cyan-500 transition'>
					Experiencia
				</a>
				<a href='#projects' className='hover:text-cyan-500 transition'>
					Proyectos
				</a>
				<a href='#contact' className='hover:text-cyan-500 transition'>
					Contacto
				</a>
			</div>

			{/* Botón Hamburguesa en móvil */}
			<button className='md:hidden' onClick={() => setOpen(!open)}>
				{open ? <FiX size={28} /> : <FiMenu size={28} />}
			</button>

			{/* Sidebar móvil */}
			<div
				className={`fixed top-0 right-0 h-full w-80 bg-gray-800 text-white font-bold transform transition-transform duration-300 md:hidden z-40 ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className='flex justify-between items-center h-20 p-4 border border-t-transparent border-r-transparent border-t-4'>
					<span className='font-bold text-xl'>Menú</span>
					<button onClick={() => setOpen(false)}>
						<FiX size={28} />
					</button>
				</div>

				<div className='flex flex-col p-6 space-y-6 bg-gray-900 border-1 border-t-0 border-r-transparent'>
					<a href='#home' onClick={() => setOpen(false)} className='hover:text-cyan-500 transition'>
						Home
					</a>
					<a href='#skills' onClick={() => setOpen(false)} className='hover:text-cyan-500 transition'>
						Skills
					</a>
					<a href='#experience' onClick={() => setOpen(false)} className='hover:text-cyan-500 transition'>
						Experiencia
					</a>
					<a href='#projects' onClick={() => setOpen(false)} className='hover:text-cyan-500 transition'>
						Proyectos
					</a>
					<a href='#contact' onClick={() => setOpen(false)} className='hover:text-cyan-500 transition'>
						Contacto
					</a>
				</div>
			</div>

		</nav>
	);
}
