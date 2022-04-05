import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageComponent from './index';

export default {
	title: 'UI Elements/Image',
	component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent {...args} />;

export const Cover = Template.bind({});
Cover.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	objectFit: 'cover',
	layout: 'fill',
};

export const Contain = Template.bind({});
Contain.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	objectFit: 'contain',
	width: 240,
	height: 160,
};

export const AspectRatio = Template.bind({});
AspectRatio.args = {
	src: 'https://via.placeholder.com/150',
	alt: 'Placeholder',
	aspectRatio: [16, 9],
	layout: 'fill',
	objectFit: 'cover',
};
