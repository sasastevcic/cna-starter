import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { TemplateNameProps } from './TemplateName.data';

const DynamicTemplateName = dynamic(async () => {
	const { TemplateName } = await import('./TemplateName');
	return TemplateName;
});

export const TemplateName = (props: TemplateNameProps): ReactElement => (
	<DynamicTemplateName {...props} />
);
