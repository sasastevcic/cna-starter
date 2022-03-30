import { keyframes as sKeyframes } from 'styled-components';

const wiggle = sKeyframes`
	0% { transform: rotate(1.5deg); }
	10% { transform: rotate(-1.5deg); }
	20% { transform: rotate(1deg); }
	30% { transform: rotate(-1deg); }
	40% { transform:rotate(0.7deg); }
	50% { transform: rotate(-0.7deg); }
	60% { transform:rotate(0.5deg); }
	70% { transform: rotate(-0.4deg); }
	80% { transform:rotate(0.2deg); }
	90% { transform:rotate(-0.1deg); }
	100% { transform: rotate(0deg); }
`;

export const keyframes = {
	wiggle,
};
