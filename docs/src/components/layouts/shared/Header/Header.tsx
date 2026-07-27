import {
	Card,
	Flex,
	PanelHeader,
	useAdaptivityWithJSMediaQueries,
	ViewWidth,
} from '@vkontakte/vkui';
import React, { FC } from 'react';

import { LogoIcon } from '../../../../shared/content/icons';
import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > ViewWidth.SMALL_TABLET;

	return (
		<Card mode="shadow">
			<PanelHeader delimiter="none">
				<Flex align="center" justify={isTabletPlus ? 'space-between' : 'center'}>
					<Flex align="center">
						<LogoIcon />
					</Flex>
					{isTabletPlus && <Navigation />}
				</Flex>
			</PanelHeader>
		</Card>
	);
};

export default Header;
