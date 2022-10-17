import {useAdaptivity} from '@vkontakte/vkui';
import React, {FC} from 'react';

import {
	TokensActions,
	TokensContent,
	TokensHeader,
} from '../components/pages/Tokens';

const Tokens: FC = () => {
	const {viewWidth} = useAdaptivity();
	const isTablet = viewWidth > 3;

	return (
		<div className={isTablet ? 'space-y-24px' : 'space-y-16px'}>
			<TokensHeader />
			<TokensActions />
			<TokensContent />
		</div>
	);
};

export default Tokens;
