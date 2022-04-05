import { ImageProps as NextImageProps } from 'next/image';

export type AspectRatio = [number, number];

export type AspectRatioProps = Pick<NextImageProps, 'layout' | 'width' | 'height'>;

export interface ImageProps extends NextImageProps {
	aspectRatio?: AspectRatio;
}

export interface StyledImageProps {
	$aspectRatio?: AspectRatio;
	$hasFit?: boolean;
}
