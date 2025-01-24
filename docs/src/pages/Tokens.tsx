import { useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TokensActions, TokensContent, TokensHeader } from '@/components/pages/Tokens';
import tokensData from '@/public/static/data/tokensData.json';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { ChipOption, Tokens as TokensType, ValueType } from '@/shared/types';

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
	const flatTags = tags.reduce((acc, curr) => acc.concat(curr), []);
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

enum QueryParam {
	theme = 'theme',
	adaptivityMode = 'adaptivityMode',
}

const Tokens: FC = () => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useCallback((queryParamsDiff: Record<string, string>) => {
		setSearchParams(
			(prev) => {
				Object.entries(queryParamsDiff).forEach(([name, value]) => {
					prev.set(name, value);
				});

				return prev;
			},
			{ replace: true },
		);
	}, []);

	const themeTags = useMemo(() => findThemeTags(themes), [themes]);
	const [selectedTags, setSelectedTags] = useState<Array<ChipOption>>([]);
	const [selectedTheme, setSelectedTheme] = useState<string>(() => {
		const themeQueryParam = searchParams.get(QueryParam.theme);

		return themeQueryParam && themes.includes(themeQueryParam) ? themeQueryParam : themes[0];
	});
	const [selectedValueType, setSelectedValueType] = useState<ValueType>(() => {
		const adaptivityModeQueryParam = searchParams.get(QueryParam.adaptivityMode);

		return adaptivityModeQueryParam === 'regular' || adaptivityModeQueryParam === 'compact'
			? adaptivityModeQueryParam
			: 'regular';
	});
	const [searchValue, setSearchValue] = useState('');
	const searchValueDebounced = useDebounce(searchValue, 500);

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const changeThemeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newTheme = event.target.value;

		setSelectedTheme(newTheme);
		navigate({ [QueryParam.theme]: newTheme });
	};

	const changeAdaptivityMode = (newAdaptivityMode: ValueType) => {
		setSelectedValueType(newAdaptivityMode);
		navigate({ [QueryParam.adaptivityMode]: newAdaptivityMode });
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
					onChange: changeAdaptivityMode,
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
