import './TokensActions.css';

import {Icon20Search} from '@vkontakte/icons';
import {
	CustomSelect,
	Input,
	SegmentedControl,
	useAdaptivity,
} from '@vkontakte/vkui';
import {ChipsSelect} from '@vkontakte/vkui/dist/unstable';
import clsx from 'clsx';
import React, {FC, useEffect, useState} from 'react';

import {tags, themes, valueTypes} from './TokensActions.content';

const TokensActions: FC = () => {
	const [selectedTags, setSelectedTags] = useState([]);
	const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
	const [valueType, changeValueType] = useState('compact');
	const [searchValue, setSearchValue] = useState('');
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const onSelectThemeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedTheme(event.target.value);
	};

	const searchChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		console.log({selectedTags});
		console.log({selectedTheme});
		console.log({valueType});
		console.log({searchValue});
	}, [selectedTags, selectedTheme, valueType, searchValue]);

	return (
		<div
			className={clsx(
				'flex flex-col justify-between',
				!isTablet && 'space-y-32px',
				isTablet && 'flex-row',
			)}
		>
			<div
				className={clsx(
					'flex flex-col',
					!isTablet && 'space-y-12px',
					isTablet && 'flex-row space-x-20px',
				)}
			>
				<ChipsSelect
					className={clsx(isTablet && 'my-tags-select')}
					value={selectedTags}
					onChange={setSelectedTags}
					options={tags.map((tag) => ({
						label: tag.name,
						value: tag.id,
					}))}
					placeholder="Выберите тэги"
					emptyText="Ничего не найдено"
					creatable={false}
					showSelected={false}
					closeAfterSelect={false}
				/>
				<div>
					<CustomSelect
						className={clsx(isTablet && 'my-theme-select')}
						placeholder="Выберите тему"
						options={themes.map((theme) => ({
							label: theme.name,
							value: theme.id,
						}))}
						value={selectedTheme}
						onChange={onSelectThemeChange}
					/>
				</div>
				<SegmentedControl
					className={clsx(isTablet && 'my-segmentedControl')}
					size="l"
					value={valueType}
					onChange={(value: string) => changeValueType(value)}
					options={valueTypes}
				/>
			</div>
			<div>
				<Input
					value={searchValue}
					onChange={searchChangeHandler}
					type="text"
					placeholder="Поиск"
					after={<Icon20Search />}
				/>
			</div>
		</div>
	);
};

export default TokensActions;
