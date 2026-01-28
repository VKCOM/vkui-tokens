import { ThemePharmaDescription } from '../../../interfaces/themes/pharma/index.js';
import { projectColors } from '../../common/index.js';
import { mediaTheme } from '../media/index.js';

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
