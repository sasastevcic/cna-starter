import { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Modal as ModalEnum } from '../../../constants/modal';
import { useModal } from '../../../hooks/useModal';
import { theme } from '../../../styles/config/theme';
import { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';
import Button from '../../atoms/Button';
import { ButtonTheme } from '../../atoms/Button/Button.data';
import Heading from '../../atoms/Heading';
import { HeadingType } from '../../atoms/Heading/Heading.data';
import { Icon } from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph';
import { ParagraphType } from '../../atoms/Paragraph/Paragraph.data';
import Container from '../../layout/Container';
import Flex from '../../layout/Flex';
import Page from '../../layout/Page';
import Modal from '../../molecules/Modal';
import { StyledBlock, StyledColorPalette } from './Styleguide.styles';
import { Path } from '../../../constants/Path';
import Logo from '../../atoms/Icon/svg/logo.svg';

const ColorPalette = (): ReactElement => {
	const colors = Object.entries(theme.color).map(([name, color]) => (
		<div key={name}>
			<Paragraph textAlign={TextAlign.Center}>{name}</Paragraph>
			<StyledColorPalette $color={color} />
		</div>
	));
	return <Flex flexWrap="wrap">{colors}</Flex>;
};

export const Styleguide = (): ReactElement => {
	const { modal, openModal, closeModal } = useModal();

	return (
		<Page>
			<Container>
				<Button href={Path.Home}>Back</Button>
				<Heading type={HeadingType.H2}>Color Palette:</Heading>
				<StyledBlock>
					<ColorPalette />
				</StyledBlock>
				<Heading type={HeadingType.H2}>Types:</Heading>
				<StyledBlock>
					<Heading>Heading H1</Heading>
					<Heading type={HeadingType.H2}>Heading H2</Heading>
					<Heading type={HeadingType.H3} as={HeadingType.H2}>
						Heading H3 as H2
					</Heading>
					<Heading
						type={HeadingType.H4}
						textAlign={TextAlign.Center}
						textTransform={TextTransform.UpperCase}
						fontWeight={FontWeight.Normal}
					>
						Heading H4 - center, uppercase, font weight normal
					</Heading>
					<Heading type={HeadingType.H5} color="blackFaded">
						Heading H5 - faded
					</Heading>
					<Heading type={HeadingType.H6}>Heading H6</Heading>
					<Paragraph>Paragraph Default</Paragraph>
					<Paragraph type={ParagraphType.Small}>Paragraph Small</Paragraph>
					<Paragraph type={ParagraphType.Large}>Paragraph Large</Paragraph>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Buttons:</Heading>
				<StyledBlock>
					<div style={{ background: '#f2f2f2', padding: '2rem 5rem' }}>
						<Flex alignItems="center">
							<Button>Default</Button>
							<Button icon={<Icon.Logo />}>Default With Icon</Button>
							<Button icon={<Icon.Logo />} />
						</Flex>
					</div>
					<div style={{ background: 'black', padding: '2rem 5rem' }}>
						<Flex alignItems="center">
							<Button buttonTheme={ButtonTheme.Light}>Light</Button>
							<Button buttonTheme={ButtonTheme.Light} icon={<Icon.Logo />}>
								Light With Icon
							</Button>
							<Button buttonTheme={ButtonTheme.Light} icon={<Icon.Logo />} />
						</Flex>
					</div>
				</StyledBlock>
				<Heading type={HeadingType.H2}>Modal:</Heading>
				<StyledBlock>
					<Button onClick={() => openModal(ModalEnum.Test)}>Toggle Modal</Button>
					<AnimatePresence>
						{modal === ModalEnum.Test && (
							<Modal onClose={closeModal}>
								<Paragraph>Modal content</Paragraph>
							</Modal>
						)}
					</AnimatePresence>
				</StyledBlock>
			</Container>
		</Page>
	);
};
