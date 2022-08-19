import { useCallback, useState } from 'react';
import { createStore } from '../utils/createStore';

type GlobalStore = {
	counter: number;
	increment: () => void;
	decrement: () => void;
};

type GlobalStoreProps = {
	initialCount?: number;
};

export const [GlobalStoreProvider, useGlobalStore] = createStore<GlobalStore, GlobalStoreProps>(
	'GlobalStore',
	({ initialCount }) => {
		const [counter, setCounter] = useState(initialCount ?? 0);

		const increment = useCallback(() => {
			setCounter((prev) => prev + 1);
		}, []);

		const decrement = useCallback(() => {
			setCounter((prev) => prev - 1);
		}, []);

		return {
			counter,
			increment,
			decrement,
		};
	},
);
