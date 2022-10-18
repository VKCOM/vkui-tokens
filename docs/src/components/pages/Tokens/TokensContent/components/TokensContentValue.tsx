import {Paragraph} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {TokenItemValue, ValueType} from '../../../../../shared/types';
import {
	isNumber,
	isRegularCompactObj,
	isString,
} from '../../../../../shared/utils';
import ColorCircle from './ColorCircle/ColorCircle';

type Props = {
	value: TokenItemValue;
	valueType: ValueType;
};

const TokensContentValue: FC<Props> = ({value, valueType}) => {
	let Content = null;

	if (isString(value) || isNumber(value)) {
		Content = (
			<Paragraph style={{marginLeft: '0.75rem'}}>{value}</Paragraph>
		);
	}

	if (isRegularCompactObj(value)) {
		Content = (
			<Paragraph style={{marginLeft: '0.75rem'}}>
				{value[valueType]}
			</Paragraph>
		);
	}

	return (
		<>
			<ColorCircle value={value} />
			{Content}
		</>
	);
};

export default TokensContentValue;
