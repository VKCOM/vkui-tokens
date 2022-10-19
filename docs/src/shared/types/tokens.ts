export type ValueType = 'regular' | 'compact';

export type RegularCompactObj = {
	regular?: string | number;
	compact?: string | number;
};

type TokenItemValueObject = {
	[key: string]: string | number | RegularCompactObj;
};

export type TokenItemValue = string | number | TokenItemValueObject;

export type TokenItem = {
	tags: Array<string>;
	desc: string;
	value: TokenItemValue;
};

export type Tokens = {
	[key: string]: TokenItem;
};
