import { ReactElement } from 'react';
import Page from '../../layout/Page';
import { StyledTemplateName } from './TemplateName.styles';

export const TemplateName = (): ReactElement => {
	return (
		<Page>
			<StyledTemplateName>TemplateName</StyledTemplateName>
		</Page>
	);
};
