import { ReactElement } from 'react';
import NextImage from 'next/image';
import { ImageProps, AspectRatioProps } from './Image.data';
import { StyledImage } from './Image.styles';

export const Image = ({ aspectRatio, ...props }: ImageProps): ReactElement => {
	const [aspectWidth, aspectHeight] = aspectRatio ?? [];

	const aspectRatioProps: AspectRatioProps | false = !!aspectRatio && {
		layout: 'fill',
		width: aspectWidth,
		height: aspectHeight,
	};

	return (
		<StyledImage data-testid="Image" $aspectRatio={aspectRatio}>
			<NextImage data-testid="ImageElement" quality={100} {...aspectRatioProps} {...props} />
		</StyledImage>
	);
};
