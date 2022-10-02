import { RefObject, useCallback, useRef } from 'react';
import { Keyboard } from '../constants/keyboard';
import { useEventListener } from './useEventListener';

/**
 * @description a hook for handling click outside of the component
 * @param callback callback function that gets called if the click outside of the ref component
 * @returns a ref from the component, that we want to listen for an outside click
 * @example const modalRef = useOutsideClick(() => {
 * onClose();
 * });
 */
export const useOutsideClick = <T extends Element>(
	callback: (event?: Event) => void,
): RefObject<T> => {
	const ref = useRef<T>(null);

	const handleEvent = useCallback(
		(event: Event): void => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			callback(event);
		},
		[ref, callback],
	);

	const handleKeydown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === Keyboard.Escape) {
				callback(event);
			}
		},
		[callback],
	);

	useEventListener('mousedown', handleEvent);
	useEventListener('touchstart', handleEvent);
	useEventListener('keydown', handleKeydown);

	return ref;
};
