import {RegularCompactObj, Token, Tokens} from './prepareTokensData';

const isObject = (value: unknown): value is Record<string, unknown> =>
	Object.prototype.toString.call(value) === '[object Object]' &&
	!Array.isArray(value) &&
	value !== null;

const transformRegularCompactObj = (
	value: RegularCompactObj,
): Record<string, RegularCompactObj> => {
	const result: Record<string, RegularCompactObj> = {};
	const regularKeys = value.regular ? Object.keys(value.regular) : [];
	const compactKeys = value.compact ? Object.keys(value.compact) : [];
	const uniqKeys = regularKeys
		.concat(compactKeys)
		.filter((key, index, arr) => arr.indexOf(key) === index);
	uniqKeys.forEach((key) => {
		const regular = value?.regular?.[key];
		const compact = value?.compact?.[key];
		if (regular === compact) {
			result[key] = regular;
			return;
		}
		result[key] = {};
		if (regular) {
			result[key].regular = regular;
		}
		if (compact) {
			result[key].compact = compact;
		}
	});
	return result;
};

export function mergeTokensData(
	docs: Record<string, Pick<Token, 'tags' | 'desc'>>,
	tokens: Record<string, string | number | RegularCompactObj>,
): Tokens {
	const result: Record<string, Token> = {};
	Object.keys(docs).forEach((docsKey) => {
		const value = tokens[docsKey];

		if (!value) {
			return;
		}

		result[docsKey] = {
			...docs[docsKey],
			value,
		};

		if (
			isObject(value) &&
			(isObject(value.regular) || isObject(value.compact))
		) {
			result[docsKey].value = transformRegularCompactObj(value);
		}
	});
	return result;
}
