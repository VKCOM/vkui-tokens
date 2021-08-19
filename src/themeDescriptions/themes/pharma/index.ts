import {ThemePharmaDescription} from '@/interfaces/themes/pharma';

import {projectColors} from '../../common';
import {mediaTheme} from '../media';

export const pharmaTheme: ThemePharmaDescription = {
	...mediaTheme,
	themeName: 'pharma',
	colors: {
		...mediaTheme.colors,
		colorTextAccent: projectColors.colorPrimaryPharma,
		colorIconAccent: projectColors.colorPrimaryPharma,
		colorBackgroundAccent: projectColors.colorPrimaryPharma,
		colorStrokeAccent: projectColors.colorPrimaryPharma,
		colorSale: '#eb1981',
	},
};
