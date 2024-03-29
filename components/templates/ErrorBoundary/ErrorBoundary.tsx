import { Component, ReactNode } from 'react';
import NotFound from '../NotFound';

type DerivedState = {
	hasError: boolean;
};

export class ErrorBoundary extends Component<{ children: ReactNode }> {
	state = {
		error: '',
		hasError: false,
	};

	static getDerivedStateFromError(): DerivedState {
		return { hasError: true };
	}

	componentDidCatch(error: Error): void {
		this.setState({
			error: error.message,
		});
	}

	render(): ReactNode {
		const { hasError, error } = this.state;
		const { children } = this.props;

		return hasError ? <NotFound title="Ooops, something went wrong..." copy={error} /> : children;
	}
}
