import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Image from './index';

const imageProps = {
	alt: 'background',
	src: 'https://picsum.photos/200',
};

describe('Image', () => {
	describe('Render', () => {
		it('should render', () => {
			const { getByTestId } = renderWithTheme(
				<Image src={imageProps.src} alt={imageProps.alt} layout="fill" />,
			);

			const element = getByTestId('NextImage');

			expect(element).toBeInTheDocument();
		});

		it('should render correctly', () => {
			const tree = renderer
				.create(<Image src={imageProps.src} alt={imageProps.alt} layout="fill" />)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Attributes', () => {
		it('should have correct alt text', () => {
			const { getByTestId } = renderWithTheme(
				<Image src={imageProps.src} alt={imageProps.alt} layout="fill" />,
			);

			const element = getByTestId('NextImage');

			expect(element).toHaveAttribute('alt', imageProps.alt);
		});
	});
});
