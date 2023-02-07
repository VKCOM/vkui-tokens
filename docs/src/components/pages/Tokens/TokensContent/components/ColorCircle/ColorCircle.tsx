import './ColorCircle.css';

import React, { FC } from 'react';

type Props = {
	content: string;
	style?: React.CSSProperties;
};

const ColorCircle: FC<Props> = ({ content, style }) => (
	<div
		className="color-circle"
		style={{
			...{ backgroundColor: content },
			...(style ? style : {}),
		}}
	/>
);

export default ColorCircle;
