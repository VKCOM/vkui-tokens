import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Panel,
	SizeType,
	SplitCol,
	SplitLayout,
	View,
	WebviewType,
} from '@vkontakte/vkui';
import React, {FC} from 'react';

import Header from './shared/Header';

type Props = {
	children: React.ReactNode;
};

const Main: FC<Props> = ({children}) => (
	<ConfigProvider webviewType={WebviewType.INTERNAL}>
		<AdaptivityProvider sizeX={SizeType.COMPACT}>
			<AppRoot>
				<SplitLayout>
					<SplitCol>
						<View activePanel="main">
							<Panel id="main">
								<Header />
								<div className="container">{children}</div>
							</Panel>
						</View>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
		</AdaptivityProvider>
	</ConfigProvider>
);

export default Main;
