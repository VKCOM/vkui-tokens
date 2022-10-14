import {PanelHeader, Tappable, Text} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {LogoIcon} from '../../../shared/content/icons';
import {menuItems} from './Header.content';

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

const Header: FC = () => (
	<PanelHeader separator={false}>
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

export default Header;
