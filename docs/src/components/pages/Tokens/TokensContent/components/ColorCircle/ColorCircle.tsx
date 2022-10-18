import './ColorCircle.css';

import {useAdaptivity} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {TokenItemValue} from '../../../../../../shared/types';
import {isString} from '../../../../../../shared/utils';

type Props = {
	value: TokenItemValue;
};

const isColor = (color: string) => {
	const s = new Option().style;
	s.color = color;
	return s.color !== '';
};

const ColorCircle: FC<Props> = ({value}) => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	if (isTablet || (isString(value) && isColor(value))) {
		return (
			<div>
				<div
					className="color-circle"
					style={{
						...(isString(value) ? {backgroundColor: value} : {}),
					}}
				/>
			</div>
		);
	}

	return null;
};

export default ColorCircle;
