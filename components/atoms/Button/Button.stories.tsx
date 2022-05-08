import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../atoms/Icon/Icon';
import { ButtonTheme } from './Button.data';
import Button from './index';

export default {
	title: 'Form Elements/Buttons',
	component: Button,
	args: {
		children: 'Button',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const darkTheme = {
	buttonTheme: ButtonTheme.Dark,
};

const lightTheme = {
	buttonTheme: ButtonTheme.Light,
};

export const Dark = Template.bind({});
Dark.args = darkTheme;

export const DarkWithIcon = Template.bind({});
DarkWithIcon.args = {
	...darkTheme,
	icon: <Icon icon="logo" />,
};

export const DarkIcon = Template.bind({});
DarkIcon.args = {
	...darkTheme,
	icon: <Icon icon="logo" />,
	children: null,
};

export const Light = Template.bind({});
Light.args = lightTheme;
Light.parameters = {
	backgrounds: { default: 'dark' },
};

export const LightWithIcon = Template.bind({});
LightWithIcon.args = {
	...lightTheme,
	icon: <Icon icon="logo" />,
};
LightWithIcon.parameters = {
	backgrounds: { default: 'dark' },
};

export const LightIcon = Template.bind({});
LightIcon.args = {
	...lightTheme,
	icon: <Icon icon="logo" />,
	children: null,
};
LightIcon.parameters = {
	backgrounds: { default: 'dark' },
};
