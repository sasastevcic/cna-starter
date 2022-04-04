import styled from 'styled-components';
import { StyledParagraphProps } from './Paragraph.data';

export const StyledParagraph = styled.p<StyledParagraphProps>`
	${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
	${({ $textTransform }) => $textTransform && `text-transform:  ${$textTransform}`};
	${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
	${({ theme, $color }) => $color && `color:  ${theme.color[$color]}`};
`;
