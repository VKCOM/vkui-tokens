import { Button } from '@vkontakte/vkui';
import React, { FC } from 'react';

import { navigation } from './Navigation.content';

type Props = {
	isTablet: boolean;
	mobileMenuOpen: boolean;
	toggleMobileMenu: () => void;
};

const styles = {
	selected: {
		background: 'rgba(0, 0, 0, 0.04)',
		opacity: '100',
	},
};

const Navigation: FC<Props> = ({ isTablet }) => {
	if (!isTablet) {
		return null;
	}

	if (isTablet) {
		return (
			<div className="flex space-x-1px">
				{navigation.map((item) => (
					<Button
						key={item.text}
						href={item.href ?? ''}
						target="_blank"
						appearance="neutral"
						mode="tertiary"
						size="l"
						disabled={!item.href}
						style={!item.href ? styles.selected : {}}
					>
						{item.text}
					</Button>
				))}
			</div>
		);
	}
};

export default Navigation;
