import {TokenItem} from '@/shared/types';

export const filterByTags = (
	selectedTags: Array<string>,
	token: TokenItem,
): boolean => {
	if (selectedTags.length === 0) {
		return true;
	}
	return selectedTags.some((sTag) => token.tags.includes(sTag));
};

export const filterByDesc = (searchValue: string, token: TokenItem): boolean =>
	searchValue === ''
		? true
		: token.desc.toLowerCase().includes(searchValue.toLowerCase());
