import {stripIndent} from 'common-tags';

import {accumulateValues} from '@/build/compilers/cssVars/helpers/accumulateValues';
import {getVarString} from '@/build/compilers/cssVars/helpers/getVarString';
import {getOnlyColors} from '@/build/helpers/getOnlyColors';
import {Theme, ThemeCssVarsWide} from '@/interfaces/general';

export type DeclarationType = 'default' | 'onlyColors';

export function compileGetDeclarationString<T = Theme>(
	sourceTheme: ThemeCssVarsWide<T>,
	type: DeclarationType = 'default',
): string {
	const theme: ThemeCssVarsWide<T> =
		type === 'onlyColors' ? getOnlyColors(sourceTheme) : sourceTheme;

	const {flatValues} = accumulateValues({
		theme,
	});

	return stripIndent`
	import {Properties} from 'csstype';

	export function getDeclarationVar${
		type === 'onlyColors' ? 'Colors' : ''
	}String(): string {
		return \`${getVarString({
			valuesObject: flatValues,
			prefix: '',
			delimeter: '',
		})}\`;
	}

	export function getDeclarationVar${
		type === 'onlyColors' ? 'Colors' : ''
	}Object(): Properties {
		return ${JSON.stringify(flatValues)} as Properties;
	}
	`;
}
