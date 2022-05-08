import { css, FlattenSimpleInterpolation } from 'styled-components';
import { pseudo } from './pseudo';

export type AspectRatio = readonly [number, number];

const calculateRatio = ([width, height]: AspectRatio): number => (height / width) * 100;

export const aspectRatio = (
	aspectRatio: AspectRatio,
	position = 'relative',
): FlattenSimpleInterpolation => css`
	position: relative;

	&::before {
		${pseudo('block', position)};
		padding-top: ${calculateRatio(aspectRatio)}%;
	}
`;
