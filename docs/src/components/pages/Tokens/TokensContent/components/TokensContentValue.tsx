import { Paragraph } from '@vkontakte/vkui';
import clsx from 'clsx';
import React, { FC } from 'react';

import { TokenItemValue, ValueType } from '@/shared/types';
import { isColor, isRegularCompactObj } from '@/shared/utils';

import ColorCircle from './ColorCircle/ColorCircle';
import { getOneLineContent, oneLineRenderCondition } from './TokensContentValue.helpers';

type Props = {
	contentValue: TokenItemValue;
	selectedValueType: ValueType;
};

const TokensContentValue: FC<Props> = ({ contentValue, selectedValueType }) => {
	if (oneLineRenderCondition(contentValue)) {
		const content = getOneLineContent(contentValue, selectedValueType);
		return (
			<div className="flex items-center">
				<Paragraph>{content}</Paragraph>
				{isColor(content) && (
					<ColorCircle content={String(content)} style={{ marginLeft: '0.25rem' }} />
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
						const content = getOneLineContent(nestedValue, selectedValueType);
						return (
							<div className={clsx(isColor(content) && 'flex items-center')} key={key}>
								<Paragraph weight="1" useAccentWeight>{key}:&nbsp;</Paragraph>
								<Paragraph>{content}</Paragraph>
								{isColor(content) && (
									<ColorCircle content={String(content)} style={{ marginLeft: '0.25rem' }} />
								)}
							</div>
						);
					}

					return (
						<Paragraph key={key}>
							<Paragraph weight="1" useAccentWeight>{key}:&nbsp;</Paragraph>
							<Paragraph style={{ whiteSpace: 'pre' }}>
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
