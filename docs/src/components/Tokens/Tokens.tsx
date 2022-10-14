import React, {FC} from 'react';

import TokensActions from './TokensActions/TokensActions';
import TokensHeader from './TokensHeader';

const Tokens: FC = () => (
	<div className="space-y-24px">
		<TokensHeader />
		<TokensActions />
	</div>
);

export default Tokens;
