import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { mainStore } from '../stores';

type Props = {
	children: ReactNode;
}

export const MainProviders = ({ children }: Props) => {
	return (
		<Provider store={mainStore}>
			{children}
		</Provider>
	)
}
