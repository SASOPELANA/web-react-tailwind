import { ReviewCard } from "./Review-card";
import JuanImg from "../assets/juan-perez.webp";
import MariaImg from "../assets/maria-garcia.webp";
import CarlosImg from "../assets/carlos-rodrigues.webp";
import AnaImg from "../assets/ana-martinez.webp";

const reviews = [
	{
		id: 1,
		name: "Juan Perez",
		imgUrl: JuanImg,
		buyerType: "Verificado",
		review: "¡Excelente producto! Cumplió con todas mis expectativas. 👍",
	},
	{
		id: 2,
		name: "María García",
		imgUrl: MariaImg,
		buyerType: "Verificado",
		review: "Me encantó la calidad y el diseño. Lo recomiendo totalmente. 😉",
	},
	{
		id: 3,
		name: "Carlos Rodríguez",
		imgUrl: CarlosImg,
		buyerType: "Verificado",
		review:
			"El envío fue muy rápido y el artículo es tal como se describe. Muy satisfecho.",
	},
	{
		id: 4,
		name: "Ana Martínez",
		imgUrl: AnaImg,
		buyerType: "Verificado",
		review: "Buena relación calidad-precio. Funciona perfectamente.",
	},
];

export const ReviewContainer = () => {
	return (
		<div>
			{reviews.map(({ id, name, buyerType, review, imgUrl }) => {
				return (
					<ReviewCard
						key={id}
						name={name}
						imgUrl={imgUrl}
						buyerType={buyerType}
						review={review}
					/>
				);
			})}
		</div>
	);
};
