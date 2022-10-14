import React, {FC} from 'react';

import {TokensActions, TokensHeader} from '../components/pages/Tokens';

const Tokens: FC = () => (
	<div className="space-y-24px">
		<TokensHeader />
		<TokensActions />
	</div>
);

export default Tokens;
