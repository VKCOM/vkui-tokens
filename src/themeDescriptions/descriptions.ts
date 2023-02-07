import { Theme } from '@/interfaces/general';

export type Description = {
	category: string;
	type?: string;
	text: string;
};

type DescriptionList = {
	[Key in keyof Partial<Theme>]: Description;
};

// todo: описать в этом формате все переменные
const descriptions: DescriptionList = {
	sizeBadgeXL: {
		category: 'size',
		type: 'avatars',
		text: 'Размер бейджа аватара XL',
	},
};

export default descriptions;
