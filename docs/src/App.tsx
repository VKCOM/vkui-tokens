import '@vkontakte/vkui/dist/vkui.css';
import './styles/index.css';

import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Panel,
	SplitCol,
	SplitLayout,
	View,
	WebviewType,
} from '@vkontakte/vkui';
import React, {FC} from 'react';

import Header from './components/Header';
import Tokens from './components/Tokens/Tokens';
// import docs from './data/docs.json';

const App: FC = () => {
	// console.log({docs});
	return (
		<ConfigProvider webviewType={WebviewType.INTERNAL}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel="main">
								<Panel id="main">
									<Header />
									<div className="container">
										<Tokens />
									</div>
								</Panel>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
};

export default App;
