# Создание новой темы для вашего проекта

Если вы хотите использовать токены VKUI не только в связке с основной библиотекой, но и в
произвольной вёрстке, у вас может возникнуть потребность расширения стандартного набора.

Для расширения стандартного набора токенов и создания **локальных** токенов вашего проекта нужно
завести под ваш проект отдельную тему.

По согласованию с
[мейнтейнерами](https://github.com/VKCOM/vkui-tokens/blob/master/CONTRIBUTING.md)
репозитория, вы можете завести тему проекта прямо здесь, в `@vkontakte/vkui-tokens`.

## Подготовка

Прежде, чем заводить свою тему, вам нужно ответить для себя на следующий вопрос:

_Какая из базовых тем будет являться основной для вашего проекта?_

Выбор базовой темы влияет на внешний вид вашего проекта в тех местах, которые вы не поправите
в своей теме.

Базовыми являются две темы: `paradigm` и `vk`. Помочь с выбором базовой темы вам могут дизайнеры.

Использовать в качестве базовой темы проектов (например, `octavius`) **нельзя**.

## Внесение правок

Для заведения новой темы потребуется завести следующие файлы:

- `src/interfaces/themes/<имя темы>/index.ts` &mdash; описание типов темы;
- `src/themeDescriptions/themes/<имя темы>/index.ts` &mdash; конкретные значения токенов темы.

После чего новую тему нужно будет правильно экспортировать и поправить доку.

### Описание типов

В файле декларации типов описываются **локальные токены** &mdash;
токены, которыми ваша тема будет отличаться от базовой.

Названия локальных токенов должны начинаться с префикса имени вашей темы: например
`octaviusColorBackground`.

Пример декларации типов темы, наследованной от базовой темы `paradigm`:

```typescript
import { ThemeCssVars } from '@/interfaces/general';
import { ParadigmTheme, ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';

export interface ThemeWorkspaceAdmin extends ParadigmTheme {}

export interface ThemeWorkspaceAdminDescription extends ParadigmThemeDescription {}

export interface ThemeWorkspaceAdminCssVars
	extends ThemeCssVars<ThemeWorkspaceAdmin, 'breakpoints'> {}
```

Пример декларации типов темы, наследованной от базовой темы `vk`:

```typescript
import { Theme, ThemeCssVars, ThemeDescription } from '@/interfaces/general';

export interface ThemeVkBase extends Theme {}
export interface ThemeVkBaseDescription extends ThemeDescription {}

export interface ThemeVkBaseCssVars extends ThemeCssVars {}
```

Для примера темы с большим количеством локальный токенов можно посмотреть на тему
[octavius](https://github.com/VKCOM/vkui-tokens/blob/master/src/interfaces/themes/octavius/index.ts).

### Указание значений токенов

В файле имплементации описываются конкретные значения, которые будут принимать токены вашей темы.

Пример темы с наследованием от базовой светлой темы `paradigm`:

```typescript
import { ThemeWorkspaceAdminDescription } from '@/interfaces/themes/workspaceAdmin';
import { lightTheme } from '@/themeDescriptions/base/paradigm';

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
	...lightTheme,
	themeName: 'workspaceAdmin',
	themeNameBase: 'workspaceAdmin',
};
```

Посмотреть, как сделана, например, тёмная тема можно на примере темы
[octavius](https://github.com/VKCOM/vkui-tokens/blob/master/src/themeDescriptions/themes/octavius/index.ts).

_Обратите внимание_. К значениям локальных токенов применяются всё те же правила линтинга, что
и к значениям токенов в базовой теме: например, нельзя завести цвет с прозрачностью в токене,
в названии которого не отражён факт прозрачности (через постфикс Alpha, Opacity и прочие).

То есть иными словами, токен `octaviusBackgroundCompose: 'rgba(51, 51, 51, .4)'` не пройдёт
проверку линтером, а токен `octaviusBackgroundComposeAlpha: 'rgba(51, 51, 51, .4)'` &mdash;
пройдёт.

### Экспорт темы и документация

Для экспорта темы необходимо указать её в файле `src/themeDescriptions/index.ts`.

Также не забудьте поправить список тем в документации: `CONTRIBUTING.md`.

## Пример

Пример добавления темы продукта:
[workspaceAdmin](https://github.com/VKCOM/vkui-tokens/pull/483/files).
