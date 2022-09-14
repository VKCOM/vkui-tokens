import {capitalize} from '@/build/helpers/capitalize';
import {Breakpoints} from '@/interfaces/general/tools';
import {
	CustomMediaByViewport,
	CustomMediaByViewportUnion,
} from '@/interfaces/general/tools/customMedia';
import {
	DefaultViewports,
	Viewports,
	viewports,
	ViewportsTuple,
} from '@/interfaces/general/tools/viewports';

export const getUsingViewports = <Vt extends ViewportsTuple>(
	breakpoints: Breakpoints<Vt>['breakpoints'],
): Vt => {
	const usingViewports: Vt[number][] = [
		...(Object.keys(breakpoints) as (keyof typeof breakpoints)[]),
	];

	return usingViewports.sort((a, b) =>
		viewports.indexOf(a) > viewports.indexOf(b) ? 1 : -1,
	) as Vt;
};

export const getCustomMediaKey = <Vt extends ViewportsTuple = DefaultViewports>(
	layoutName: Viewports,
	rule?: 'to' | 'from',
): CustomMediaByViewportUnion<Vt> =>
	`width${rule ? capitalize(rule) : ''}${capitalize(
		layoutName,
	)}` as any as CustomMediaByViewportUnion<Vt>;

export function processCustomMedia<
	Vt extends ViewportsTuple = DefaultViewports,
>({
	breakpoints,
}: Pick<Breakpoints<Vt>, 'breakpoints'>): CustomMediaByViewport<Vt> {
	if (!breakpoints || Object.keys(breakpoints).length === 1) {
		return {} as CustomMediaByViewport<Vt>;
	}

	// фильтрованные и сортированные по размеру вьюпорта брейкпоинты
	const usingViewports = getUsingViewports<Vt>(breakpoints);

	const result: Partial<CustomMediaByViewport<Vt>> = {};

	usingViewports.forEach((viewport, index, array) => {
		if (viewport !== 'touch') {
			// больше теущего брейкпоинта
			result[
				getCustomMediaKey(viewport, 'from')
			] = `(min-width: ${breakpoints[viewport].breakpoint}px)`;

			// между текущим и следущим брейкпоинтом
			result[getCustomMediaKey(viewport)] = `(min-width: ${
				breakpoints[viewport].breakpoint
			}px) and (max-width: ${
				breakpoints[array[index + 1]]?.breakpoint - 1
			}px)`;
		}

		if (viewport === 'touch') {
			// меньше следующего
			result[getCustomMediaKey(viewport)] = `(max-width: ${
				breakpoints[array[index + 1]].breakpoint - 1
			}px)`;
		}

		const isLastKey = index === usingViewports.length - 1;

		if (!isLastKey) {
			// ширина до следующего брейкпоинта
			result[getCustomMediaKey(viewport, 'to')] = `(max-width: ${
				breakpoints[array[index + 1]].breakpoint - 1
			}px)`;
		}

		if (isLastKey) {
			// больше текущего
			result[
				getCustomMediaKey(viewport)
			] = `(min-width: ${breakpoints[viewport].breakpoint}px)`;
		}
	});

	return result as CustomMediaByViewport<Vt>;
}
