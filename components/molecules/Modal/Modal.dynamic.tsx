import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { ModalProps } from './Modal.data';

const DynamicComponent = dynamic(async () => {
	const { Modal } = await import('./Modal');
	return Modal;
});

export const Modal = (props: ModalProps): ReactElement => <DynamicComponent {...props} />;
