import type { NextPage } from 'next';
import NotFoundTemplate from '../components/templates/NotFound';

const NotFound: NextPage = () => {
	return <NotFoundTemplate title="Server error, please try again!" />;
};

export default NotFound;
