import { isBrowser } from './isBrowser';

export const isTouchDevice = (): boolean => {
	if (isBrowser) {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	}

	return false;
};
