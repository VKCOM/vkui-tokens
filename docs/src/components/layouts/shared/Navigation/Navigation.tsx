import {Tappable, Text} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {navigation} from './Navigation.content';

type Props = {
	isTablet: boolean;
	mobileMenuOpen: boolean;
	toggleMobileMenu: () => void;
};

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

const Navigation: FC<Props> = ({isTablet}) => {
	if (!isTablet) {
		return null;
	}

	if (isTablet) {
		return (
			<div className="flex space-x-1px">
				{navigation.map((item) => {
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
							style={{
								...styles.tappable,
								...styles.selected,
							}}
						>
							{item.text}
						</Text>
					);
				})}
			</div>
		);
	}
};

export default Navigation;
