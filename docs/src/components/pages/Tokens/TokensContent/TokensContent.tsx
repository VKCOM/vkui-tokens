import './TokensContent.css';

import {Icon20CopyOutline} from '@vkontakte/icons';
import {copyTextToClipboard} from '@vkontakte/vkjs';
import {Button, Paragraph, Separator, useAdaptivity} from '@vkontakte/vkui';
import React, {FC} from 'react';

const content = [
	{
		token: 'colorBackgroundAccent1',
		value: '#333333',
		// eslint-disable-next-line sonarjs/no-duplicate-string
		description: 'Акцентный фон для элементов интерфейса',
	},
	{
		token: 'colorBackgroundAccent2',
		value: 'rgba(0, 0, 0, 0.36)',
		description:
			'Тонированный фон для ошибок и использования в негативных сценариях работы. Меняется на нейтральный в темной теме. С прозрачностью',
	},
	{
		token: 'sizeButtonTertiaryMediumPaddingHorizontalIcon',
		value: '0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
		description: 'Акцентный фон для элементов интерфейса',
	},
	{
		token: 'colorBackgroundAccent3',
		value: '#333333',
		description: 'Акцентный фон для элементов интерфейса',
	},
];

const isColor = (color: string) => {
	const s = new Option().style;
	s.color = color;
	return s.color !== '';
};

const TokensContent: FC = () => {
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
				{content.map((item, index) => (
					<React.Fragment key={item.token}>
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
									onClick={() =>
										copyTextToClipboard(item.token)
									}
								>
									{item.token}
								</Button>
							</div>
							<div>
								<div className="flex items-center">
									{(isTablet || isColor(item.value)) && (
										<div>
											<div
												className="color-circle"
												style={{
													backgroundColor: item.value,
												}}
											/>
										</div>
									)}
									<Paragraph>{item.value}</Paragraph>
								</div>
							</div>
							<div>
								<Paragraph>{item.description}</Paragraph>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default TokensContent;
