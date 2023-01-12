import color from 'color';

import { expandColor } from '@/build/themeProcessors/expandColors/expandColors';
import { mixColors } from '@/build/themeProcessors/expandColors/mixColors';
import { ColorsDescription } from '@/interfaces/general';
import {
	ColorDescription,
	ColorDescriptionCallable,
	ColorsDescriptionStruct,
} from '@/interfaces/general/colors';

export function overlayColors<
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
>(
	background: ColorDescription<T>,
	foreground: ColorDescription<T>,
	state: 'normal' | 'hover' | 'active' | 'auto' = 'normal',
): ColorDescriptionCallable<T> {
	return (theme: Partial<ColorsDescription<T>>) => {
		const bgColor = expandColor(background, theme);
		const fgColor = expandColor(foreground, theme);

		const fgColorParsed = {
			normal: color(fgColor.normal),
			hover: color(fgColor.hover),
			active: color(fgColor.active),
		};

		return {
			normal: mixColors(
				bgColor[state === 'auto' ? 'normal' : state],
				fgColorParsed.normal.rgb().string(),
				fgColorParsed.normal.alpha(),
			),
			hover: mixColors(
				bgColor[state === 'auto' ? 'hover' : state],
				fgColorParsed.hover.rgb().string(),
				fgColorParsed.hover.alpha(),
			),
			active: mixColors(
				bgColor[state === 'auto' ? 'active' : state],
				fgColorParsed.active.rgb().string(),
				fgColorParsed.active.alpha(),
			),
		};
	};
}
