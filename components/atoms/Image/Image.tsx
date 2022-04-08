import { ComponentType, ReactElement } from 'react';
import NextImage from 'next/image';
import { ImageProps } from 'next/image';
import { AspectRatioImageProps } from './Image.data';
import { StyledAspectRatio } from './Image.styles';

const withAspectRatio =
	(Component: ComponentType<ImageProps>) =>
	({ aspectRatio, ...props }: AspectRatioImageProps) => {
		if (aspectRatio) {
			return (
				<StyledAspectRatio $aspectRatio={aspectRatio}>
					<Component layout="fill" objectFit="cover" {...props} />
				</StyledAspectRatio>
			);
		}

		return <Component {...props} />;
	};

const Image = (props: AspectRatioImageProps): ReactElement => (
	<NextImage data-testid="NextImage" quality={100} {...props} />
);

export default withAspectRatio(Image);
