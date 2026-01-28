import figma from '../figma.json' with { type: 'json' };

// Поля — режимы соответсвующей коллекции переменных из фигмы
// Цвета
interface AppearanceVariable {
	light: string;
	dark: string;
}

// Числа и строки
interface TokensVariable {
	iOS: string | number;
	android: string | number;
	desktop: string | number;
	vkCom: string | number;
}

// Коллекция с переменными
interface Collection {
	[name: string]: AppearanceVariable | TokensVariable;
}

// Цельный файл.  Может генерироваться дизайнерами плагином Figma Variables To JSON
interface FigmaJSON {
	[collection: string]: Collection;
}

type CollectionName = 'appearance' | 'tokens';
type ModeName = 'light' | 'dark' | 'ios' | 'android' | 'desktop';

/**
 * Функция, возращающася список токенов, переопределённых в специальном JSON-файле с фигмовскими переменными
 *
 * @param originalTokens Токены, замена для которых будет искаться в figma.json
 * @param {CollectionName} [collection='appearance'] Коллекция, среди которой ищется замена
 * @param {ModeName} [mode='light'] Режим переменных фигмы, применяемый для замены. Сейчас ограничивается светлой и тёмной темой
 * @param {FigmaJSON} source Объект, используемый вместо figma.json. Может генерироваться дизайнерами плагином Figma Variables To JSON
 * @returns Объект с токенами, для которых нашлась замена
 */
// eslint-disable-next-line max-params
export function overwriteFromFigmaJSON(
	originalTokens,
	collection: CollectionName = 'appearance',
	mode: ModeName = 'light',
	source: FigmaJSON = figma,
): Partial<typeof originalTokens> {
	return Object.fromEntries(
		Object.keys(originalTokens).reduce((acc, key) => {
			const figmaToken = findFigmaVariable(source[collection], key);
			if (figmaToken) {
				if (collection === 'appearance') {
					acc.push([key, figmaToken[mode]]);
				} else {
					// Если переопределяем не цвета, то добавляем regular и compact-версию
					acc.push([key, { regular: figmaToken[mode], compact: figmaToken['desktop'] }]);
				}
			}
			return acc;
		}, []),
	);
}

/**
 * Функция, возвращающая фигмовскую переременную, соответствующую ключу. Названия токенов в интерфейсах и в фигме могут расходится. Эта функция учитывает возможные расхождения названий
 *
 * @param {Collection} collection Коллекция, в которой ищется переменная. Представляет из себя объект с переменными
 * @param {string} key Оригинальное название переменной
 * @returns Фигмовская переменная, внутри которой значения, расписанные по режимам, либо null, если переменная не найдена
 */
function findFigmaVariable(
	collection: Collection,
	key: string,
): AppearanceVariable | TokensVariable {
	// Группировка в фигме может различаться, поэтому преобразование имени может быть с разными префиксами
	// Токены без особой группы в коде могут лежать в разных группах в фигме: Other, Palette и т.д.
	return (
		collection[toFigmaName(key)] ||
		collection[toFigmaName(key, 'other')] ||
		collection[toFigmaName(key, 'palette')] ||
		collection[toFigmaName(key, 'stroke')] ||
		collection[toFigmaName(key, 'background')] ||
		null
	);
}

/**
 * Фунция, возвращающая название токена, преобразованное в фигмовский формат
 * @param {string} key Изначальное имя токена
 * @param {string} [prefix=''] Префикс, имеющийся у переменной в фигмовском формате
 * @returns {string} Имя без изначального префикса color и с опционально установленным префиксом в формате camelCase
 */
function toFigmaName(key: string, prefix: string = ''): string {
	const figmaPascalCaseName = key.replace('color', '');
	if (prefix) {
		return prefix + figmaPascalCaseName;
	}
	return figmaPascalCaseName.charAt(0).toLowerCase() + figmaPascalCaseName.slice(1);
}
