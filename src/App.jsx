// Importamos componentes en react
import { Hero } from "./components/Hero.jsx";
import { RatingContainer } from "./components/Rating-container.jsx";
import { ReviewContainer } from "./components/Review-container.jsx";

import { Background } from "./components/Background.jsx";

function App() {
	return (
		// Aqui se usa la fuente con Tailwindcss
		<main className="font-League-Spartan px-6 py-20 relative xl:px-[165px] ">
			<h1 className="flex justify-center text-center text-3xl font-semibold xl:text-5xl">
				React + Tailwindcss
			</h1>
			<Background />
			<div className="mb-12 xl:flex ">
				<Hero />
				<RatingContainer />
			</div>
			<ReviewContainer />
		</main>
	);
}

export default App;
