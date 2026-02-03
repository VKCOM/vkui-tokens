/**
 * Массив возможных брейкпоинтов (вьюпортов)
 *
 * Порядок важен
 */
export const viewports = [
  'touch',
  'tablet',
  'desktopS',
  'desktopM',
  'desktopL',
  'desktopXL',
] as const;

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P];
};

export type ViewportsOrdered = Mutable<typeof viewports>;
export type ViewportsTuple = ViewportsOrdered[number][];

/**
 * Основной тип union всех возможных Viewports
 */
export type Viewports = ViewportsTuple[number];

/**
 * вьюпорты по-умолчанию
 */
export type DefaultViewports = ['touch', 'desktopS'];
