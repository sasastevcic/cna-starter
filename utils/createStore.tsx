import { createContext, FunctionComponent, PropsWithChildren, ReactNode, useContext } from 'react';

/**
 * Creates a context for the store created by the passed `store`.
 * Additionally returns the `Provider` component and the hook for the created store's context.
 *
 * @param name - name of the store
 * @param store - a function that returns an object representing the store
 */
export const createStore = <
	TStore extends Record<string, unknown>,
	TStoreProps extends Record<string, unknown>,
>(
	name: string,
	store: (props: TStoreProps) => TStore,
): [FunctionComponent<TStoreProps & { children: ReactNode }>, () => TStore] => {
	const StoreContext = createContext<TStore | null>(null);

	const StoreProvider = ({ children, ...rest }: PropsWithChildren<TStoreProps>): JSX.Element => {
		const storeValue = store(rest as unknown as TStoreProps);

		return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>;
	};

	const useStore = (): TStore => {
		const store = useContext(StoreContext);

		if (store) {
			return store;
		}

		throw new ReferenceError(
			`${name} is not initialized, make sure that your component is wrapped in the 'Provider' of the store.`,
		);
	};

	return [StoreProvider, useStore];
};
