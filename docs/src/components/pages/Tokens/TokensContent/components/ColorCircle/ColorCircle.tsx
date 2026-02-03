import './ColorCircle.css';

import type * as React from 'react';

type Props = {
  content: string;
  style?: React.CSSProperties;
};

const ColorCircle: React.FC<Props> = ({ content, style }) => (
  <div
    className="color-circle"
    style={{
      ...{ backgroundColor: content },
      ...(style ? style : {}),
    }}
  />
);

export default ColorCircle;
