import { RatingCard } from "./Rating-card";

const ratings = [
	" Calificado con 5 estrellas en las reseñas.",
	" Valorado con 5 estrellas en las opiniones.",
	" Con una calificación de 5 estrellas.",
];

export const RatingContainer = () => {
	return (
		<section className="flex flex-col gap-4">
			{ratings.map((rating) => {
				return <RatingCard key={rating} text={rating} />;
			})}
		</section>
	);
};
