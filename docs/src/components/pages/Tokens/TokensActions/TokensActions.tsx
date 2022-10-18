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
import React, {FC, useState} from 'react';

import {ValueType} from '../../../../shared/types';
import {tags, valueTypes} from './TokensActions.content';

type Props = {
	themesProps: {
		options: Array<string>;
		value: string;
		onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	};
	valueTypesProps: {
		value: string;
		onChange: (value: ValueType) => void;
	};
};

const TokensActions: FC<Props> = ({themesProps, valueTypesProps}) => {
	const [selectedTags, setSelectedTags] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	const searchChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchValue(event.target.value);
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
						{...themesProps}
						options={themesProps.options.map((value) => ({
							label: value,
							value,
						}))}
					/>
				</div>
				<SegmentedControl
					className={clsx(isTablet && 'my-segmentedControl')}
					size="l"
					options={valueTypes}
					{...valueTypesProps}
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
