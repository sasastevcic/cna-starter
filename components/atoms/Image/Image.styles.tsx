import { size } from 'polished';
import styled from 'styled-components';
import { aspectRatio } from '../../../styles/helpers/aspectRatio';
import type { StyledImageProps } from './Image.data';

export const StyledImage = styled.div<StyledImageProps>`
	${size('auto', '100%')};

	${({ $aspectRatio }) => $aspectRatio && aspectRatio($aspectRatio)};
`;
