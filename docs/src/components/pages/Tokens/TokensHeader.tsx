import {Icon16Linked} from '@vkontakte/icons';
import {Link, Title, useAdaptivity} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, {FC} from 'react';

import packageJson from '../../../../../package.json';

const version = {
	href: 'https://github.com/VKCOM/vkui-tokens/releases',
	text: `v.${packageJson.version}`,
};

const styles = {
	linkContainer: {
		paddingTop: 5,
		paddingRight: 8,
		paddingBottom: 5,
		paddingLeft: 8,
	},
};

const TokensHeader: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	return (
		<div
			className={clsx(
				!isTablet && 'space-y-12px',
				isTablet && 'flex items-center justify-between',
			)}
		>
			<Title level="1">VKUI Tokens</Title>
			<div className="flex space-x-1px">
				<div
					style={{
						...styles.linkContainer,
						...(!isTablet ? {paddingLeft: 0} : {}),
					}}
				>
					<Link href={version.href} target="_blank">
						{version.text}
					</Link>
				</div>
				<div className="flex items-center" style={styles.linkContainer}>
					<Icon16Linked style={{color: '#99A2AD', marginRight: 6}} />
					<Link
						href="https://github.com/VKCOM/vkui-tokens"
						target="_blank"
					>
						Github
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TokensHeader;
