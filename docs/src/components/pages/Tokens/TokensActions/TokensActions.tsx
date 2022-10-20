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
import React, {FC} from 'react';

import {ChipOption, ValueType} from '@/shared/types';

import {valueTypes} from './TokensActions.content';

type Props = {
	tagsProps: {
		options: Array<ChipOption>;
		value: Array<ChipOption>;
		onChange: (option: ChipOption) => void;
	};
	themesProps: {
		options: Array<string>;
		value: string;
		onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	};
	valueTypesProps: {
		value: string;
		onChange: (value: ValueType) => void;
	};
	searchProps: {
		value: string;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	};
};

const TokensActions: FC<Props> = ({
	tagsProps,
	themesProps,
	valueTypesProps,
	searchProps,
}) => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

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
					placeholder="Выберите тэги"
					emptyText="Ничего не найдено"
					creatable={false}
					showSelected={false}
					closeAfterSelect={false}
					{...tagsProps}
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
					type="text"
					placeholder="Поиск"
					after={<Icon20Search />}
					{...searchProps}
				/>
			</div>
		</div>
	);
};

export default TokensActions;
