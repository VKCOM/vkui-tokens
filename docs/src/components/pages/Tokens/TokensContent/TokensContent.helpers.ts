import { TokenItem, TokenItemValue } from '@/shared/types';

export function filterByTags(selectedTags: Array<string>, token: TokenItem): boolean {
	// Исключаем legacy-токены по умолчанию, если не запросили явно
	if (!selectedTags.includes('legacy') && token.tags.includes('legacy')) {
		return false;
	}

	if (selectedTags.length === 0) {
		return true;
	}

	return selectedTags.some((sTag) => token.tags.includes(sTag));
}

function containsInDesc(haystack: string, needle: string): boolean {
	return haystack.toLowerCase().includes(needle);
}

function containsInValue(haystack: TokenItemValue, needle: string): boolean {
	const haystackNorm = JSON.stringify(haystack).toLowerCase().replace(/\s/g, '');

	return haystackNorm.includes(needle.replace(/\s/g, ''));
}

export function filterByDesc(searchValue: string, token: TokenItem): boolean {
	if (searchValue === '') {
		return true;
	}

	const needle = searchValue.toLowerCase();

	return containsInDesc(token.desc, needle) || containsInValue(token.value, needle);
}
