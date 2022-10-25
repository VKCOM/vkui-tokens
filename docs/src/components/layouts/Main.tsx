import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Panel,
	SizeType,
	View,
	WebviewType,
} from '@vkontakte/vkui';
import React, {FC} from 'react';

import Header from './shared/Header/Header';

type Props = {
	children: React.ReactNode;
};

const Main: FC<Props> = ({children}) => (
	<ConfigProvider webviewType={WebviewType.INTERNAL}>
		<AdaptivityProvider sizeX={SizeType.COMPACT}>
			<AppRoot>
				<View activePanel="main">
					<Panel id="main">
						<Header />
						<div className="container">{children}</div>
					</Panel>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	</ConfigProvider>
);

export default Main;
