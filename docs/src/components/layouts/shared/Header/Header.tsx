import {Card, PanelHeader, useAdaptivity} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, {FC, useState} from 'react';

import {LogoIcon} from '@/shared/content/icons';

import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	return (
		<Card mode="shadow">
			<PanelHeader separator={false}>
				<div
					className={clsx(
						'flex items-center',
						isTablet ? 'justify-between' : 'justify-center',
					)}
				>
					<div className="flex items-center">
						<LogoIcon />
					</div>
					<Navigation
						isTablet={isTablet}
						mobileMenuOpen={mobileMenuOpen}
						toggleMobileMenu={toggleMobileMenu}
					/>
				</div>
			</PanelHeader>
		</Card>
	);
};

export default Header;
