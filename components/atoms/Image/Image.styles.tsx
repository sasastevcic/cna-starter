import styled from 'styled-components';
import { aspectRatio } from '../../../styles/helpers/aspectRatio';
import type { StyledAspectRatioProps } from './Image.data';

export const StyledAspectRatio = styled.div<StyledAspectRatioProps>`
	${({ $aspectRatio }) => aspectRatio($aspectRatio)};
`;
