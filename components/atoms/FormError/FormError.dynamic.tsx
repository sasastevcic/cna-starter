import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { FormErrorProps } from './FormError.data';

const DynamicComponent = dynamic(async () => {
	const { FormError } = await import('./FormError');
	return FormError;
});

export const FormError = (props: FormErrorProps): ReactElement => <DynamicComponent {...props} />;
