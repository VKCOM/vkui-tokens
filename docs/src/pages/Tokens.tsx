import { useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import React, { FC, useMemo, useState } from 'react';

import tokensData from '../../public/static/data/tokensData.json';
import { TokensActions, TokensContent, TokensHeader } from '../../src/components/pages/Tokens';
import { useDebounce } from '../../src/shared/hooks/useDebounce';
import { ChipOption, Tokens as TokensType, ValueType } from '../../src/shared/types';

function isBaseTheme(themeName: string): boolean {
	return themeName.startsWith('vkBase') || themeName.startsWith('paradigmBase');
}

const themes = Object.keys(tokensData);

themes.sort((first: string, second: string) => {
	const firstBase = isBaseTheme(first);
	const secondBase = isBaseTheme(second);

	if ((firstBase && secondBase) || (!firstBase && !secondBase)) {
		return first > second ? 1 : -1;
	}

	return firstBase ? -1 : 1;
});

function transformTags(tokens: TokensType) {
	const tokensKeys = Object.keys(tokens);
	const tags = tokensKeys.map((t) => tokens[t].tags);
	const flatTags = tags.flat();
	const sortedTagsWithQuantity = flatTags
		.reduce(
			(acc, curr, i, arr) => acc.concat([[curr, arr.filter((curr1) => curr1 === curr).length]]),
			[],
		)
		.sort((a, b) => b[1] - a[1]);
	return sortedTagsWithQuantity
		.map((tuple) => tuple[0])
		.filter((key, index, arr) => arr.indexOf(key) === index);
}

function findThemeTags(themeNames: string[]): string[] {
	const tags: Record<string, boolean> = {};

	for (const themeName of themeNames) {
		const themeTags = transformTags(tokensData[themeName]);

		for (const themeTag of themeTags) {
			tags[themeTag] = true;
		}
	}

	const tagsList = Object.keys(tags);
	tagsList.sort();

	return tagsList;
}

const Tokens: FC = () => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	const themeTags = useMemo(() => findThemeTags(themes), [themes]);
	const [selectedTags, setSelectedTags] = useState<Array<ChipOption>>([]);
	const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);
	const [selectedValueType, setSelectedValueType] = useState<ValueType>('regular');
	const [searchValue, setSearchValue] = useState('');
	const searchValueDebounced = useDebounce(searchValue, 500);

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const changeThemeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedTheme(event.target.value);
	};

	return (
		<div className={isTabletPlus ? 'space-y-24px' : 'space-y-16px'}>
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
				selectedTags={React.useMemo(
					() => selectedTags.map((tagOption) => String(tagOption.value)),
					[selectedTags.join(' ')],
				)}
				selectedValueType={selectedValueType}
				searchValue={searchValueDebounced}
			/>
		</div>
	);
};

export default Tokens;
