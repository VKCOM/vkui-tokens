import React, {FC} from 'react';

import docs from './data/docs.json';

const App: FC = () => {
	console.log({docs});
	return <div>Webpack React project</div>;
};

export default App;
