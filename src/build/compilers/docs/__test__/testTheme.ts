import type { EmptyTheme } from '../../../../build/compilers/docs/__test__/emptyTheme.ts';
import type { BaseTheme1 } from '../../../../build/compilers/docs/__test__/testBaseTheme.ts';

export interface BaseTheme2 {
	/**
	 * @desc Empty tags
	 */
	localBaseProp: string;
}

export interface ThemeTest extends BaseTheme1, BaseTheme2, EmptyTheme {
	/**
	 * @description Long description tag
	 * @tags tagListItem1, tagListItem2,tagListItem3
	 */
	derivedProp: string;
}
