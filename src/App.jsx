import { GlobalStyles } from './styles/GlobalStyles';
import Counter from './components/counter/Counter';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Counter />
		</>
	);
};

export default App;
