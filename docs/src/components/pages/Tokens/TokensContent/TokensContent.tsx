import './TokensContent.css';

import { Icon20CopyOutline } from '@vkontakte/icons';
import { copyTextToClipboard } from '@vkontakte/vkjs';
import { Button, Paragraph, Separator, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import React, { FC, useMemo } from 'react';

import { Tokens, ValueType } from '@/shared/types';

import TokensContentValue from './components/TokensContentValue';
import { filterByDesc, filterByTags } from './TokensContent.helpers';

type Props = {
	tokens: Tokens;
	selectedTags: Array<string>;
	selectedValueType: ValueType;
	searchValue: string;
};

const TokensContent: FC<Props> = ({ tokens, selectedTags, selectedValueType, searchValue }) => {
	const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isTabletPlus = viewWidth > 3;

	const tokensKeys = useMemo(
		() =>
			Object.keys(tokens)
				.filter((token) => filterByTags(selectedTags, tokens[token]))
				.filter((token) => filterByDesc(searchValue, tokens[token])),
		[tokens, selectedTags, searchValue],
	);

	return (
		<div className="tokens-content-container">
			<div className="tokens-content-header" style={isTabletPlus ? undefined : { display: 'none' }}>
				<div>
					<Paragraph>Название токена</Paragraph>
				</div>
				<div>
					<Paragraph>Значение</Paragraph>
				</div>
				<div>
					<Paragraph>Описание</Paragraph>
				</div>
			</div>
			<Separator wide={true} className="separator-header" />
			<div className="tokens-content-list">
				{tokensKeys.map((token, index) => (
					<React.Fragment key={token}>
						{index !== 0 && <Separator wide={true} className="separator-item" />}
						<div className="tokens-content-item">
							<div>
								<Button
									after={<Icon20CopyOutline />}
									mode="tertiary"
									align="left"
									appearance="neutral"
									className="token-name-btn"
									hoverMode="token-name-btn_hover"
									stretched={!isTabletPlus}
									onClick={() => copyTextToClipboard(token)}
								>
									{token}
								</Button>
							</div>
							<div>
								<TokensContentValue
									contentValue={tokens[token].value}
									selectedValueType={selectedValueType}
								/>
							</div>
							{isTabletPlus && (
								<div>
									<Paragraph>{tokens[token].desc || '-'}</Paragraph>
								</div>
							)}
							{!isTabletPlus && !!tokens[token].desc && (
								<div>
									<Paragraph>{tokens[token].desc}</Paragraph>
								</div>
							)}
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default TokensContent;
