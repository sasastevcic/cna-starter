import { ReactElement } from 'react';
import { Path } from '../../../constants/path';
import { useSWR } from '../../../hooks/useSWR';
import { HelloData } from '../../../pages/api/hello';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph';
import { ParagraphType } from '../../atoms/Paragraph/Paragraph.data';
import Container from '../../layout/Container';
import Flex from '../../layout/Flex';
import Page from '../../layout/Page';

export const Home = (): ReactElement => {
	const { data: hello, mutate } = useSWR<HelloData>('/hello');

	return (
		<Page>
			<Container>
				<Flex flexDirection="column" justifyContent="center" alignItems="center">
					<Heading style={{ marginBottom: '1rem' }}>{hello?.title}</Heading>
					<Paragraph type={ParagraphType.Large}>
						Current time: <strong>{hello?.time}</strong>
						<Icon icon="close" />
					</Paragraph>
					<Button onClick={() => mutate()} style={{ marginBottom: '2rem' }}>
						Revalidate Time
					</Button>
					<Button href={Path.Styleguide}>Styleguide</Button>
				</Flex>
			</Container>
		</Page>
	);
};
