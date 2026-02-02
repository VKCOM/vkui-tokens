import type { ThemePharmaDescription } from '../../../interfaces/themes/pharma/index.ts';
import { projectColors } from '../../common/index.ts';
import { mediaTheme } from '../media/index.ts';

export const pharmaTheme: ThemePharmaDescription = {
	...mediaTheme,
	themeName: 'pharma',
	themeNameBase: 'pharma',
	colors: {
		...mediaTheme.colors,
		colorTextAccent: projectColors.colorPrimaryPharma,
		colorIconAccent: projectColors.colorPrimaryPharma,
		colorBackgroundAccent: projectColors.colorPrimaryPharma,
		colorStrokeAccent: projectColors.colorPrimaryPharma,
		colorSale: '#eb1981',
	},
};
