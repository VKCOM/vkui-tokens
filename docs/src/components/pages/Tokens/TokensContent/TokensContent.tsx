import './TokensContent.css';

import {Icon20CopyOutline} from '@vkontakte/icons';
import {copyTextToClipboard} from '@vkontakte/vkjs';
import {Button, Paragraph, Separator, useAdaptivity} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {Tokens, ValueType} from '../../../../shared/types';
import TokensContentValue from './components/TokensContentValue';

type Props = {
	tokens: Tokens;
	selectedValueType: ValueType;
};

const TokensContent: FC<Props> = ({tokens, selectedValueType}) => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	return (
		<div>
			<div
				className="tokens-content-header"
				style={!isTablet ? {display: 'none'} : {}}
			>
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
			<div>
				{Object.keys(tokens).map((token, index) => (
					<React.Fragment key={token}>
						{index !== 0 && (
							<Separator wide={true} className="separator-item" />
						)}
						<div className="tokens-content-item">
							<div>
								<Button
									after={<Icon20CopyOutline />}
									mode="tertiary"
									align="left"
									appearance="neutral"
									className="token-name-btn"
									hoverMode="token-name-btn_hover"
									stretched={!isTablet}
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
							{isTablet && (
								<div>
									<Paragraph>
										{tokens[token].desc || '-'}
									</Paragraph>
								</div>
							)}
							{!isTablet && !!tokens[token].desc && (
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
