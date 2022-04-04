import Link from 'next/link';
import { ComponentType, forwardRef } from 'react';
import { ElementType, NativeProps } from './AbstractButton.data';

const withNextLink = (Component: ComponentType) =>
	forwardRef<ElementType, NativeProps>((props, ref) => {
		const { href } = props;
		const isInnerLink = href && href.startsWith('/');

		if (isInnerLink) {
			return (
				<Link href={href}>
					<Component ref={ref} {...props} />
				</Link>
			);
		}

		return <Component ref={ref} {...props} />;
	});

const AbstractButton = forwardRef<ElementType, NativeProps>(({ children, ...props }, ref) => {
	let Component: 'a' | 'button' = 'button';
	const { href, type } = props;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const componentProps = { ...props } as any;

	if (href) {
		Component = 'a';

		if (!href.startsWith('/')) {
			componentProps.target = '_blank';
			componentProps.rel = 'noopener noreferrer';
		}
	} else if (type == null) {
		componentProps.type = 'button';
	}

	return (
		<Component data-testid="AbstractButton" ref={ref} {...componentProps}>
			{children}
		</Component>
	);
});

export default withNextLink(AbstractButton);
