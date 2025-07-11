import { ReviewCard } from "./Review-card";
import JuanImg from "../assets/juan-perez.webp";
import MariaImg from "../assets/maria-garcia.webp";
import CarlosImg from "../assets/carlos-rodrigues.webp";
import AnaImg from "../assets/ana-martinez.webp";

const reviews = [
	{
		id: 1,
		name: "Juan Ignacio Perez",
		imgUrl: JuanImg,
		buyerType: "Usuario Verificado",
		review: "¡Excelente producto! Cumplió con todas mis expectativas. 👍",
	},
	{
		id: 2,
		name: "María Angeles García",
		imgUrl: MariaImg,
		buyerType: "Usuario Verificado",
		review: "Me encantó la calidad y el diseño. Lo recomiendo totalmente. 😉",
	},
	{
		id: 3,
		name: "Carlos Duran Rodríguez",
		imgUrl: CarlosImg,
		buyerType: "Usuario Verificado",
		review:
			"El envío fue muy rápido y el artículo es tal como se describe. Muy satisfecho. 😀",
	},
	{
		id: 4,
		name: "Ana Tamara Martínez",
		imgUrl: AnaImg,
		buyerType: "Usuario Verificado",
		review: "Buena relación calidad-precio. Funciona perfectamente. 😎",
	},
];

export const ReviewContainer = () => {
	return (
		<div className="flex flex-col gap-4">
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
