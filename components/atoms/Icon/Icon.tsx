import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
	icon: string;
}

export const Icon = ({ icon, ...props }: IconProps) => {
	return (
		<svg height="24" width="24" viewBox="0 0 24 24" {...props}>
			<use href={`/sprite.svg#ico-${icon.toLocaleLowerCase()}`} />
		</svg>
	);
};
