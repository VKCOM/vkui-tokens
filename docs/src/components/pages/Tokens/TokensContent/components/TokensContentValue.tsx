import {Paragraph} from '@vkontakte/vkui';
import clsx from 'clsx';
import React, {FC} from 'react';

import {TokenItemValue, ValueType} from '../../../../../shared/types';
import {
	isColor,
	isNumber,
	isRegularCompactObj,
	isRegularObj,
	isString,
} from '../../../../../shared/utils';
import ColorCircle from './ColorCircle/ColorCircle';

type Props = {
	contentValue: TokenItemValue;
	selectedValueType: ValueType;
};

function oneLineRenderCondition(contentValue: TokenItemValue): boolean {
	return (
		isString(contentValue) ||
		isNumber(contentValue) ||
		isRegularObj(contentValue) ||
		isRegularCompactObj(contentValue)
	);
}

function getOneLineContent(
	value: TokenItemValue,
	valueType: ValueType,
): string | number {
	if (isString(value) || isNumber(value)) {
		return value;
	}

	if (isRegularObj(value) && valueType === 'regular') {
		return value.regular;
	}

	if (isRegularCompactObj(value)) {
		return value[valueType];
	}

	return '-';
}

const TokensContentValue: FC<Props> = ({contentValue, selectedValueType}) => {
	if (oneLineRenderCondition(contentValue)) {
		const content = getOneLineContent(contentValue, selectedValueType);
		return (
			<div className="flex items-center">
				<Paragraph>{content}</Paragraph>
				{isColor(content) && (
					<ColorCircle
						content={String(content)}
						style={{marginLeft: '0.25rem'}}
					/>
				)}
			</div>
		);
	}

	if (!isRegularCompactObj(contentValue)) {
		return (
			<div className="flex flex-col">
				{Object.keys(contentValue).map((key) => {
					const nestedValue = contentValue[key];

					if (oneLineRenderCondition(nestedValue)) {
						const content = getOneLineContent(
							nestedValue,
							selectedValueType,
						);
						return (
							<div
								className={clsx(
									isColor(content) && 'flex items-center',
								)}
								key={key}
							>
								<Paragraph weight="1">{key}:&nbsp;</Paragraph>
								<Paragraph>{content}</Paragraph>
								{isColor(content) && (
									<ColorCircle
										content={String(content)}
										style={{marginLeft: '0.25rem'}}
									/>
								)}
							</div>
						);
					}

					return (
						<Paragraph key={key}>
							<Paragraph weight="1">{key}:&nbsp;</Paragraph>
							<Paragraph style={{whiteSpace: 'pre'}}>
								{JSON.stringify(nestedValue, null, 4)}
							</Paragraph>
						</Paragraph>
					);
				})}
			</div>
		);
	}

	return null;
};

export default TokensContentValue;
