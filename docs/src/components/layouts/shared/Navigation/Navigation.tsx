import { Button } from '@vkontakte/vkui';
import React, { FC } from 'react';

import { navigation } from './Navigation.content';

const styles = {
	selected: {
		background: 'rgba(0, 0, 0, 0.04)',
		opacity: '100',
	},
};

const Navigation: FC = () => (
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

export default Navigation;
