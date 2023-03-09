import './TokensActions.css';

import { Icon20Search } from '@vkontakte/icons';
import {
	CustomSelect,
	Input,
	SegmentedControl,
	unstable_ChipsSelect as ChipsSelect,
	useAdaptivityWithJSMediaQueries,
} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, { FC } from 'react';

import { ChipOption, ValueType } from '@/shared/types';

import { valueTypes } from './TokensActions.content';

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

const TokensActions: FC<Props> = ({ tagsProps, themesProps, valueTypesProps, searchProps }) => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	return (
		<div
			className={clsx(
				'flex flex-col justify-between',
				!isTabletPlus && 'space-y-32px',
				isTabletPlus && 'flex-row',
			)}
		>
			<div
				className={clsx(
					'flex flex-col',
					!isTabletPlus && 'space-y-12px',
					isTabletPlus && 'flex-row space-x-20px',
				)}
			>
				<ChipsSelect
					className={isTabletPlus && 'my-tags-select'}
					placeholder="Выберите теги"
					emptyText="Ничего не найдено"
					creatable={false}
					showSelected={false}
					closeAfterSelect={false}
					{...tagsProps}
				/>
				<div>
					<CustomSelect
						className={isTabletPlus && 'my-theme-select'}
						placeholder="Выберите тему"
						{...themesProps}
						options={themesProps.options.map((value) => ({
							label: value,
							value,
						}))}
					/>
				</div>
				<SegmentedControl
					className={isTabletPlus && 'my-segmentedControl'}
					size="l"
					options={valueTypes}
					{...valueTypesProps}
				/>
			</div>
			<div>
				<Input type="text" placeholder="Поиск" after={<Icon20Search />} {...searchProps} />
			</div>
		</div>
	);
};

export default TokensActions;
