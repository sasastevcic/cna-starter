import { ImageProps } from 'next/image';
import { AspectRatio } from '../../../styles/helpers/aspectRatio';

export interface AspectRatioImageProps extends ImageProps {
	aspectRatio?: AspectRatio;
}

export interface StyledAspectRatioProps {
	$aspectRatio: AspectRatio;
}
