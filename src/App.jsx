// Importamos componentes en react
import { Hero } from "./components/Hero.jsx";
import { RatingContainer } from "./components/Rating-container.jsx";

function App() {
	return (
		<main>
			<h1>React desde cero + Tailwindcss</h1>
			<Hero />
			<RatingContainer />
		</main>
	);
}

export default App;
