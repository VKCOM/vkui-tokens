import './TokensActions.css';

import {Icon20Search} from '@vkontakte/icons';
import {
	CustomSelect,
	Input,
	SegmentedControl,
	useAdaptivity,
} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, {FC, useRef, useState} from 'react';

import {tags, themes, valueTypes} from './TokensActions.content';

const TokensActions: FC = () => {
	const [selectedTags, setSelectedTags] = useState(tags[0].id);
	const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
	const [valueType, changeValueType] = useState('compact');
	const textInput = useRef(null);
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const onSelectTagsChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedTags(event.target.value);
	};

	const onSelectThemeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedTheme(event.target.value);
	};

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
				<CustomSelect
					className={clsx(isTablet && 'my-tags-select')}
					multiple
					placeholder="Выберите тэги"
					options={tags.map((tag) => ({
						label: tag.name,
						value: tag.id,
					}))}
					value={selectedTags}
					onChange={onSelectTagsChange}
				/>
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
				<SegmentedControl
					className={clsx(isTablet && 'my-segmentedControl')}
					size="l"
					value={valueType}
					onChange={(value: string) => changeValueType(value)}
					options={valueTypes}
				/>
			</div>
			<Input
				getRef={textInput}
				type="text"
				placeholder="Поиск"
				after={<Icon20Search />}
			/>
		</div>
	);
};

export default TokensActions;
