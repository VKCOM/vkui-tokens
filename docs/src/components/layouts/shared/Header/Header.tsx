import { Card, PanelHeader, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import clsx from 'clsx';
import React, { FC } from 'react';

import { LogoIcon } from '@/shared/content/icons';

import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	return (
		<Card mode="shadow">
			<PanelHeader delimiter="none">
				<div
					className={clsx('flex items-center', isTabletPlus ? 'justify-between' : 'justify-center')}
				>
					<div className="flex items-center">
						<LogoIcon />
					</div>
					{isTabletPlus && <Navigation />}
				</div>
			</PanelHeader>
		</Card>
	);
};

export default Header;
