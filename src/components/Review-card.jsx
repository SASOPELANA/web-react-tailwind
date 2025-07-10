export const ReviewCard = ({ name, imgUrl, buyertype, review }) => {
	return (
		<div>
			<div>
				<img src={imgUrl} className="size-18" />

				<div>
					<p>{name}</p>
					<p>{buyertype}</p>
				</div>
			</div>

			<p>{review}</p>
		</div>
	);
};
