import '@vkontakte/vkui/dist/vkui.css';
import './styles/index.css';

import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	WebviewType,
} from '@vkontakte/vkui';
import React, {FC} from 'react';

import Header from './components/Header';
// import docs from './data/docs.json';

const App: FC = () => {
	// console.log({docs});
	return (
		<ConfigProvider webviewType={WebviewType.INTERNAL}>
			<AdaptivityProvider>
				<AppRoot>
					<Header />
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
};

export default App;
