import starImg from "../assets/estrella.png";

export const RatingCard = ({ text }) => {
	return (
		<div>
			<div className="flex">
				<img className="size-5" src={starImg} alt="" />
				<img className="size-5" src={starImg} alt="" />
				<img className="size-5" src={starImg} alt="" />
				<img className="size-5" src={starImg} alt="" />
				<img className="size-5" src={starImg} alt="" />
			</div>

			<p>{text}</p>
		</div>
	);
};
