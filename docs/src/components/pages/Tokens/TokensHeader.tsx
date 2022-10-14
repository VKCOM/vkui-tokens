import {Icon16Linked} from '@vkontakte/icons';
import {Link, Title, useAdaptivity} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, {FC} from 'react';

// TODO: Заменить href и контент ссылки на правильную версию
const version = {
	href: 'https://github.com/VKCOM/vkui-tokens',
	text: 'v.4.3434',
};

const styles = {
	linkContainer: {
		padding: '5px 8px',
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
