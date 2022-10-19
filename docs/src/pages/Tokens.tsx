import {useAdaptivity} from '@vkontakte/vkui';
import React, {FC, useState} from 'react';

import tokensData from '../../public/static/data/tokensData.json';
import {
	TokensActions,
	TokensContent,
	TokensHeader,
} from '../components/pages/Tokens';
import {ValueType} from '../shared/types';

const themes = Object.keys(tokensData);

const Tokens: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);
	const [selectedValueType, setSelectedValueType] =
		useState<ValueType>('compact');

	const changeThemeHandler = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedTheme(event.target.value);
	};

	return (
		<div
			className={isTablet ? 'space-y-24px' : 'space-y-16px'}
			style={{height: '100%'}}
		>
			<TokensHeader />
			<TokensActions
				themesProps={{
					options: themes,
					value: selectedTheme,
					onChange: changeThemeHandler,
				}}
				valueTypesProps={{
					value: selectedValueType,
					onChange: setSelectedValueType,
				}}
			/>
			<TokensContent
				tokens={tokensData[selectedTheme]}
				selectedValueType={selectedValueType}
			/>
		</div>
	);
};

export default Tokens;
