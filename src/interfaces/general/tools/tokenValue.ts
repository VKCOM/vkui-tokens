export type Token<T, Theme> = T | ((theme: Theme) => T);
export type MakeStaticToken<T> = T extends (...args: any[]) => any
	? MakeStaticToken<ReturnType<T>>
	: T;

export type Tokens<T> = {
	[K in keyof T]: Token<T[K], T>;
};

export type StaticTokens<T> = {
	[K in keyof T]: MakeStaticToken<T[K]>;
};
