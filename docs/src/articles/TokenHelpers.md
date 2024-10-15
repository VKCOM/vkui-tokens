# Хелпер-функции для токенов
Значения токенов бывают разные. Большинство токенов можно выразить либо числом (размеры), либо строкой (цвета, шрифты и прочее).

Но иногда для правильной записи значений базовых типов недостаточно. Бывавет так, что в значении токена нужно сослаться
на другой токен, или сгенерировать значение токена по набору правил.

Для этих целей в пакете `@vkontakte/vkui-tokens` предусмотрены **функции-хелперы**. Они выполняются на этапе
сборки темы и позволяют управлять тем, какие значения попадут в итоговые файлы.

&nbsp;

## `alias`
Функция выполняет подстановку значения другого токена.

Будьте осторожны с указанием токенов, которые сами являются ссылками.
Неправильно указанный токен может привезти к переполнению стека и крешу сборки!

### Интерфейс
```typescript
function alias<T extends ThemeDescription>(token: string): TokenFunction<T>;
```

### Параметры
* **token** &mdash; Имя токена. Можно использовать токены из текущей темы либо из всех тем, от которой наследуется текущая.

### Пример
Исходный файл темы:

```typescript
import { ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { lightTheme } from '@/themeDescriptions/base/paradigm';
import { alias } from '@/build/helpers/tokenHelpers';

export const myCustomTheme: ParadigmThemeDescription = {
	...lightTheme,
    sizeArrow: alias('sizeArrowPromo'),
    sizeArrowPromo: {
        regular: 8,
    },
};
```

Итоговый файл с темой:

```css
:root {
    /* ... */
    --vkui--size_arrow--regular: 8px;
    --vkui--size_arrow_promo--regular: 8px;
    /* ... */
}
```

&nbsp;

## `namedAlias`
Функция создаёт именованый алиас &mdash; runtime-ссылку на другой токен темы выполняет подстановку
fallback-значения этого токена.

Будьте осторожны с указанием токенов, которые сами являются ссылками.
Неправильно указанный токен может привезти к переполнению стека и крешу сборки!

### Интерфейс
```typescript
function namedAlias<T extends ThemeDescription>(token: string): NamedTokenFunction<T>
```

### Параметры
* **token** &mdash; Имя токена. Можно использовать токены из текущей темы либо из всех тем, от которой наследуется текущая.

### Пример
Исходный файл темы:

```typescript
import { ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { lightTheme } from '@/themeDescriptions/base/paradigm';
import { namedAlias } from '@/build/helpers/tokenHelpers';

export const myCustomTheme: ParadigmThemeDescription = {
	...lightTheme,
    sizeArrow: namedAlias('sizeArrowPromo'),
    sizeArrowPromo: {
        regular: 8,
    },
};
```

Итоговый файл с темой:

```css
:root {
    /* ... */
    --vkui--size_arrow--regular: var(--vkui--size_arrow_promo--regular, 8px);
    --vkui--size_arrow_promo--regular: 8px;
    /* ... */
}
```

&nbsp;

## `staticRef`
Функция создаёт runtime-ссылку на другой токен темы.

### Интерфейс
```typescript
function staticRef<T>(value: Token<T, any>): T;
```

### Параметры
* **token** &mdash; Имя токена. Можно использовать любые токены, которые находятся в контексте страницы.

### Пример
Исходный файл темы:

```typescript
import { ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { lightTheme } from '@/themeDescriptions/base/paradigm';
import { staticRef } from '@/build/helpers/tokenHelpers';

export const myCustomTheme: ParadigmThemeDescription = {
	...lightTheme,
    sizeArrow: staticRef('sizeArrowPromo'),
    sizeArrowPromo: {
        regular: 8,
    },
};
```

Итоговый файл с темой:

```css
:root {
    /* ... */
    --vkui--size_arrow--regular: var(--vkui--size_arrow_promo--regular);
    --vkui--size_arrow_promo--regular: 8px;
    /* ... */
}
```

&nbsp;

## `gradient`
Функция создаёт градиент из одного или нескольких цветов.

Если передан один цвет, система сборки сгенериурет градиент из указанного цвета в прозрачный. При этом
градиент будет построен по точкам, указанным в файле `opacityMap.json`.

Если передано два и более цветов, будет сгенерирован градиент между этими цветами с равномерной расстановкой точек.

### Интерфейс
```typescript
export function gradient<T extends ThemeDescription> (
	...stops: (Property.Color | NamedTokenFunction<T>)[]
): TokenFunction<T>;
```

### Параметры
* **stops** &mdash; Список точек градиента. Можно использовать цвета в строковом формате (rgba, hex) и именованые
  алиасы, созданные с помощью хелпера `namedAlias`.

### Пример
Исходный файл темы:

```typescript
import { ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { lightTheme } from '@/themeDescriptions/base/paradigm';
import { gradient, namedAlias } from '@/build/helpers/tokenHelpers';

export const myCustomTheme: ParadigmThemeDescription = {
	...lightTheme,
    colorIconPrimary: 'rgba(64, 64, 64, 1)',
    gradient: gradient(namedAlias('colorIconPrimary'), 'rgba(32, 32, 32, 1)'),
};
```

Итоговый файл с темой:

```css
:root {
    /* ... */
    --vkui--color_icon_primary: rgba(64, 64, 64, 1);
    --vkui--gradient: var(--vkui--color_icon_primary, rgba(64, 64, 64, 1)) 0%, rgba(32, 32, 32, 1) 100%;
    /* ... */
}
```

```json
{
    "gradient": {
        "gradient": [
            {
                "color": "rgba(64, 64, 64, 1)",
                "token": "colorIconPrimary",
                "step": 0,
                "alpha": 1
            },
            {
                "color": "rgba(32, 32, 32, 1)",
                "token": "colorIconPrimary",
                "step": 1,
                "alpha": 1
            }
        ]
    },
    "other": {
        "colorIconPrimary": {
            "normal": "rgba(64, 64, 64, 1)"
        }
    }
}
```