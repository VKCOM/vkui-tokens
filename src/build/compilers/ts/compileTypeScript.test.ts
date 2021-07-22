import {compileTypeScript} from '@/build/compilers/ts/compileTypeScript';

describe('compileTypeScript', () => {
	const testData = {
		themeName: 'base',
	};

	it('should work', () => {
		expect(compileTypeScript(testData))
			.toBe(`import { $$InterfaceName$$ } from '$$InterfaceURL$$';

const theme: $$InterfaceName$$ = {
	"themeName": "base"
};

export default theme;
export { $$InterfaceName$$ };
`);
	});
});
