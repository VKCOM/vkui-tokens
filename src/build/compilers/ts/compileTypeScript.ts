import { compileJSON } from '../../../build/compilers/json/compileJSON.js';
import { Theme } from '../../../interfaces/general/index.js';

/**
 * Компилирует строку с ts видом темы
 */
export const compileTypeScript = <T = Theme>(theme: T): string => {
	const jsonTheme = compileJSON<T>(theme);

	return `import { $$InterfaceName$$ } from '$$InterfaceURL$$';

const theme: $$InterfaceName$$ = ${jsonTheme};

export default theme;
export { $$InterfaceName$$ };
`;
};
