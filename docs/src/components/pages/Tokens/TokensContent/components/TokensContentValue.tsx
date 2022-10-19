import {Paragraph} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {TokenItemValue, ValueType} from '../../../../../shared/types';
import {
	isNumber,
	isRegularCompactObj,
	isRegularObj,
	isString,
} from '../../../../../shared/utils';

type Props = {
	contentValue: TokenItemValue;
	selectedValueType: ValueType;
};

const styles = {
	indent: {
		marginLeft: '0.75rem',
	},
};

const TokensContentValue: FC<Props> = ({contentValue, selectedValueType}) => {
	if (isString(contentValue) || isNumber(contentValue)) {
		return <Paragraph style={styles.indent}>{contentValue}</Paragraph>;
	}

	if (isRegularCompactObj(contentValue)) {
		return (
			<Paragraph style={styles.indent}>
				{contentValue[selectedValueType]}
			</Paragraph>
		);
	}

	if (isRegularObj(contentValue)) {
		return (
			<Paragraph style={styles.indent}>
				{selectedValueType === 'regular' ? contentValue.regular : '-'}
			</Paragraph>
		);
	}

	if (!isRegularCompactObj(contentValue)) {
		return (
			<div style={styles.indent} className="flex flex-col">
				{Object.keys(contentValue).map((key) => {
					let renderValue = contentValue[key];

					if (isRegularObj(contentValue[key])) {
						renderValue =
							contentValue[key][selectedValueType] || '';
					}

					if (isRegularCompactObj(contentValue[key])) {
						renderValue =
							contentValue[key][selectedValueType] || '';
					}

					if (renderValue) {
						return (
							<Paragraph
								key={key}
							>{`${key}: ${renderValue}`}</Paragraph>
						);
					}

					return null;
				})}
			</div>
		);
	}

	return null;
};

export default TokensContentValue;
