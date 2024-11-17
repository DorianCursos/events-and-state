import styled from 'styled-components';

const StyledCounterContainer = styled.div`
	text-align: center;
	width: 400px;
	margin-inline: auto;
`;

const StyledCounter = styled.h2`
	color: ${({ counter }) =>
		counter % 2 === 0 && counter !== 0 ? 'red' : 'black'};
`;

export { StyledCounterContainer, StyledCounter };
