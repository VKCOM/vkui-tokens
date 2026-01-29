import { RegularCompactObj, StrNum, Token, Tokens } from './prepareTokensData.ts';

const isObject = (value: unknown): value is Record<string, unknown> =>
	Object.prototype.toString.call(value) === '[object Object]' &&
	!Array.isArray(value) &&
	value !== null;

const transformRegularCompactObj = (
	value: RegularCompactObj<Record<string, StrNum>>,
): Record<string, RegularCompactObj | StrNum> => {
	const result: Record<string, RegularCompactObj | StrNum> = {};
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
			(result[key] as RegularCompactObj).regular = regular;
		}
		if (compact) {
			(result[key] as RegularCompactObj).compact = compact;
		}
	});
	return result;
};

export function mergeTokensData(
	docs: Record<string, Pick<Token, 'tags' | 'desc'>>,
	tokens: Record<
		string,
		StrNum | RegularCompactObj<Record<string, StrNum>> | Record<string, StrNum>
	>,
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

		if (isObject(value) && (isObject(value.regular) || isObject(value.compact))) {
			result[docsKey].value = transformRegularCompactObj(value);
		}
	});
	return result;
}
