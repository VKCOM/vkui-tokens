import {PanelHeader, Tappable, Text} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {LogoIcon} from '../shared/content/icons';

type MenuItem = {
	text: string;
	href?: string;
};

const menuItems: Array<MenuItem> = [
	{
		text: 'Документация',
		href: 'https://vkcom.github.io/VKUI/',
	},
	{
		text: 'Компоненты',
		href: 'https://vkcom.github.io/VKUI/#/SplitLayout',
	},
	{
		text: 'Токены',
	},
	{
		text: 'Иконки',
		href: 'https://vkcom.github.io/icons/',
	},
	{
		text: 'Github',
		href: 'https://github.com/VKCOM/VKUI',
	},
];

const styles = {
	tappable: {
		padding: '8px 12px',
	},
	selected: {
		cursor: 'default',
		background: 'rgba(0, 0, 0, 0.04)',
		borderRadius: '8px',
	},
};

const Header: FC = () => {
	return (
		<PanelHeader>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<LogoIcon />
				</div>
				<div className="flex space-x-1px">
					{menuItems.map((item) => {
						if (item.href) {
							return (
								<a
									key={item.text}
									className="link-reset"
									href={item.href}
									target="_blank"
								>
									<Tappable>
										<Text style={styles.tappable}>
											{item.text}
										</Text>
									</Tappable>
								</a>
							);
						}
						return (
							<Text
								key={item.text}
								style={{...styles.tappable, ...styles.selected}}
							>
								{item.text}
							</Text>
						);
					})}
				</div>
			</div>
		</PanelHeader>
	);
};

export default Header;
