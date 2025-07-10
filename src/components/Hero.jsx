export const Hero = () => {
	return (
		// Dentro de cada componente solo debe haber un etiqueta padre, no permite dos react

		<section className="mb-10">
			<h1
				className="text-Very-Dark-Magenta text-[2.5rem] leading-8 font-bold
        px-8 text-center mb-4 mt-6 
        "
			>
				Mas de 10,000 usuarios calificaron nuestros productos.
			</h1>
			<p
				className="text-Dark-Grayish-Magenta text-center font-medium text-[17.5px] 
        leading-[1.5625rem]
        "
			>
				Descubre lo que nuestros clientes opinan. En esta sección de reseñas,
				encontrarás testimonios honestos de compradores verificados que han
				experimentado la calidad de nuestros productos de primera mano. Sus
				comentarios te darán la confianza que necesitas para tomar la decisión
				correcta y unirte a nuestra comunidad de clientes satisfechos.
			</p>
		</section>
	);
};
