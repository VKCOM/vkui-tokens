import {useAdaptivity} from '@vkontakte/vkui';
import React, {FC, useState} from 'react';

import docs from '../../public/static/data/docs.json';
import {
	TokensActions,
	TokensContent,
	TokensHeader,
} from '../components/pages/Tokens';

const themes = Object.keys(docs);

const Tokens: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);

	const changeThemeHandler = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedTheme(event.target.value);
	};

	return (
		<div className={isTablet ? 'space-y-24px' : 'space-y-16px'}>
			<TokensHeader />
			<TokensActions
				themesProps={{
					options: themes,
					value: selectedTheme,
					onChange: changeThemeHandler,
				}}
			/>
			<TokensContent />
		</div>
	);
};

export default Tokens;
