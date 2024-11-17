import { useState } from 'react';
import { StyledCounter, StyledCounterContainer } from './counter.styles';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [increment, setIncrement] = useState(1);
	return (
		<>
			<ul>
				<li>
					Crea un componente Counter y añade 3 botones para que puedas sumar,
					restar y resetear el contador. Las funciones deben estar fuera del
					componente.
				</li>
				<li>Añade un segundo estado que controle el incremento del contador</li>
				<li>
					Desactiva el botón de reset si el contador está en 0 y desactiva el
					botón de reset increment si el incremento está en 1 (esta lógica
					puedes hacerla dentro del componente)
				</li>
				<li>
					Haz que el número del contador se ponga de color rojo si el número es
					par y no es 0
				</li>
			</ul>
			<StyledCounterContainer>
				<StyledCounter counter={counter}>{counter}</StyledCounter>
				<button onClick={() => setCounter(counter - 1)}>-1</button>
				<button onClick={() => setCounter(0)} disabled={counter === 0}>
					Reset
				</button>
				<button onClick={() => setCounter(counter + increment)}>+1</button>
				<h2>Incremento: {increment}</h2>
				<button onClick={() => setIncrement(increment + 1)}>+1</button>
				<button onClick={() => setIncrement(1)} disabled={increment === 1}>
					Reset increment
				</button>
			</StyledCounterContainer>
		</>
	);
};

export default Counter;
