import Link from 'next/link';
import { forwardRef } from 'react';
import { ElementType, NativeProps } from './AbstractButton.data';

export const AbstractButton = forwardRef<ElementType, NativeProps>(
	({ children, ...props }, ref) => {
		let Component: 'a' | 'button' | typeof Link = 'button';

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const componentProps = { ...props } as any;

		if (props.href && !props.href.startsWith('/')) {
			Component = 'a';

			componentProps.target = '_blank';
			componentProps.rel = 'noopener noreferrer';
		} else if (props.href) {
			componentProps.href = props.href;
			Component = Link;
		} else if (props.type == null) {
			componentProps.type = 'button';
		}

		return (
			<Component data-testid="AbstractButton" ref={ref} {...componentProps}>
				<a>{children}</a>
			</Component>
		);
	},
);
