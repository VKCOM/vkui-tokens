import {useAdaptivity} from '@vkontakte/vkui';
import React, {FC, useState} from 'react';

import tokensData from '../../public/static/data/tokensData.json';
import {
	TokensActions,
	TokensContent,
	TokensHeader,
} from '../components/pages/Tokens';
import {Tokens as TokensType, ValueType} from '../shared/types';

type ChipValue = string | number;

export interface ChipOption {
	value?: ChipValue;
	label?: string;
	[otherProp: string]: any;
}

const themes = Object.keys(tokensData);

function transformTags(tokens: TokensType) {
	const tokensKeys = Object.keys(tokens);
	const tags = tokensKeys.map((t) => tokens[t].tags);
	const flatTags = tags.reduce((acc, curr) => acc.concat(curr), []);
	const sortedTagsWithQuantity = flatTags
		.reduce(
			(acc, curr, i, arr) =>
				acc.concat([
					[curr, arr.filter((curr1) => curr1 === curr).length],
				]),
			[],
		)
		.sort((a, b) => b[1] - a[1]);
	return sortedTagsWithQuantity
		.map((tuple) => tuple[0])
		.filter((key, index, arr) => arr.indexOf(key) === index);
}

const Tokens: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const [themeTags] = useState<Array<string>>(
		transformTags(tokensData[themes[0]]),
	);
	const [selectedTags, setSelectedTags] = useState<Array<ChipOption>>([]);
	const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);
	const [selectedValueType, setSelectedValueType] =
		useState<ValueType>('compact');
	const [searchValue, setSearchValue] = useState('');

	const searchChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchValue(event.target.value);
	};

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
				tagsProps={{
					options: themeTags.map((tag) => ({
						label: tag,
						value: tag,
					})),
					value: selectedTags,
					onChange: setSelectedTags,
				}}
				themesProps={{
					options: themes,
					value: selectedTheme,
					onChange: changeThemeHandler,
				}}
				valueTypesProps={{
					value: selectedValueType,
					onChange: setSelectedValueType,
				}}
				searchProps={{
					value: searchValue,
					onChange: searchChangeHandler,
				}}
			/>
			<TokensContent
				tokens={tokensData[selectedTheme]}
				selectedTags={selectedTags.map((tagOption) =>
					String(tagOption.value),
				)}
				selectedValueType={selectedValueType}
				searchValue={searchValue}
			/>
		</div>
	);
};

export default Tokens;
