import styled from 'styled-components';
import { StyledHeadingProps } from './Heading.data';

export const StyledHeading = styled.h1<StyledHeadingProps>`
	${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
	${({ $textTransform }) => $textTransform && `text-transform:  ${$textTransform}`};
	${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
	${({ theme, $color }) => $color && `color:  ${theme.color[$color]}`};
`;
