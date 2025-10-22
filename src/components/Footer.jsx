import React from "react";

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white text-center p-6 border-t-white border-t-1 '>
			<p>&copy; {new Date().getFullYear()} GiddonPk. Todos los derechos reservados.</p>
		</footer>
	);
}
