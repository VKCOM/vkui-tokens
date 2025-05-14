import { Icon16Linked, Icon16HelpOutline } from '@vkontakte/icons';
import { Link, Title, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import React, { FC } from 'react';

import packageJson from '@/../../package.json';

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
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	return (
        <div
			className={clsx(
				!isTabletPlus && 'space-y-12px',
				isTabletPlus && 'flex items-center justify-between',
			)}
		>
			<Title level="1" Component="h1">VKUI Tokens</Title>
			<div className="flex space-x-1px">
				<div
					style={{
						...styles.linkContainer,
						...(isTabletPlus ? undefined : { paddingLeft: 0 }),
					}}
				>
					<Link href={version.href} target="_blank">
						{version.text}
					</Link>
				</div>
				<div className="flex items-center" style={styles.linkContainer}>
					<Icon16HelpOutline  style={{ color: '#99A2AD', marginRight: 6 }}/>
					<RouterLink to="/vkui-tokens/articles/new-theme" style={{textDecoration: 'none'}}>
						<Link>
							Документация
						</Link>
					</RouterLink>
				</div>
				<div className="flex items-center" style={styles.linkContainer}>
					<Icon16Linked style={{ color: '#99A2AD', marginRight: 6 }} />
					<Link href="https://github.com/VKCOM/vkui-tokens" target="_blank">
						Github
					</Link>
				</div>
			</div>
		</div>
    );
};

export default TokensHeader;
