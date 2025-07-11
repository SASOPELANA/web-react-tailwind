import starImg from "../assets/estrella.png";

export const RatingCard = ({ text }) => {
	return (
		<div className="bg-Light-Grayish-Magenta rounded-lg p-4">
			<div className="flex gap-2 place-content-center mb-4">
				<img className="size-5" src={starImg} alt="Icon Star" />
				<img className="size-5" src={starImg} alt="Icon Star " />
				<img className="size-5" src={starImg} alt="Icon Star " />
				<img className="size-5" src={starImg} alt="Icon Star " />
				<img className="size-5" src={starImg} alt="Icon Star " />
			</div>

			<p className="text-center text-[17px] text-Very-Dark-Magenta font-bold">
				{text}
			</p>
		</div>
	);
};
