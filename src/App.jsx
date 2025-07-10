// Importamos componentes en react
import { Hero } from "./components/Hero.jsx";
import { RatingContainer } from "./components/Rating-container.jsx";
import { ReviewContainer } from "./components/Review-container.jsx";

function App() {
	return (
		// Aqui se usa la fuente con Tailwindcss
		<main className="font-League-Spartan px-6 py-20 ">
			<h className="flex justify-center text-center text-3xl font-semibold">
				React + Tailwindcss
			</h>
			<Hero />
			<RatingContainer />
			<ReviewContainer />
		</main>
	);
}

export default App;
