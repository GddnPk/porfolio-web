// components/DesignCard.jsx
export default function DesignCard({ src, alt }) {
	return (
		<div>
			<h1 className="text-xl mb-5">{alt}</h1>
			<img
				src={src}
				alt={alt}
				className='w-80 h-80 rounded-4xl bg-white shadow-lg hover:scale-105 transition-transform duration-300 object-contain border-3'
			/>
		</div>
	);
}
