import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/config/theme';
import GlobalStyle from '../styles/GlobalStyles';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import { Breakpoints } from '../styles/config/variables';
import { MotionConfig } from 'framer-motion';
import { getTransition } from '../styles/config/framer';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const viewports = [
	{
		key: 'xs',
		name: 'Phone',
		width: 375,
		type: 'mobile',
	},
	{
		key: 'sm',
		name: 'Small',
		width: Breakpoints.Small,
		type: 'mobile',
	},
	{
		key: 'md',
		name: 'Medium',
		width: Breakpoints.Medium,
		type: 'tablet',
	},
	{
		key: 'lg',
		name: 'Large',
		width: Breakpoints.Large,
		type: 'tablet',
	},
	{
		key: 'xl',
		name: 'X Large',
		width: Breakpoints.XLarge,
		type: 'desktop',
	},
	{
		key: 'xxl',
		name: 'XX Large',
		width: Breakpoints.XxLarge,
		type: 'desktop',
	},
	{
		key: 'xxxl',
		name: 'XXX Large',
		width: Breakpoints.XxxLarge,
		type: 'desktop',
	},
];

export const decorators = [
	(Story) => (
		<MotionConfig transition={getTransition()}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Page>
					<Container>
						<Story />
					</Container>
				</Page>
				<div id="modal"></div>
			</ThemeProvider>
		</MotionConfig>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: {
			order: ['About', 'Styles', 'Theme', 'Types', 'Vector', 'Form Elements', 'UI Elements'],
		},
	},
	viewport: {
		viewports: viewports.reduce(
			(acc, { key, name, width, type }) => ({
				...acc,
				[key]: {
					type,
					name,
					styles: {
						width: `${width}px`,
						height: '100%',
					},
				},
			}),
			{},
		),
	},
};
