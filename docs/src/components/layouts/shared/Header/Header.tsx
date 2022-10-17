import {Icon24MenuOutline, Icon24SearchOutline} from '@vkontakte/icons';
import {Card, IconButton, PanelHeader, useAdaptivity} from '@vkontakte/vkui';
import React, {FC, useState} from 'react';

import {LogoIcon} from '../../../../shared/content/icons';
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
				<div className="flex items-center justify-between">
					{!isTablet && (
						<IconButton onClick={toggleMobileMenu}>
							<Icon24MenuOutline />
						</IconButton>
					)}
					<div className="flex items-center">
						<LogoIcon />
					</div>
					{!isTablet && (
						<IconButton
							style={{userSelect: 'none', opacity: 0}}
							disabled
						>
							<Icon24SearchOutline />
						</IconButton>
					)}
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
