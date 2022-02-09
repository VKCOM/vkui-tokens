export type Token<T, Theme> = T | ((theme: Theme) => T);

export type Tokens<T> = {
	[K in keyof T]: Token<T[K], T>;
};
