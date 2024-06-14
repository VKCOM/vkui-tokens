<img src="assets/vkui_logo.png" alt="vkui logo" height="52"/>
<img src="assets/logo.svg" alt="vkui logo" height="52"/>

[![Tests](https://github.com/VKCOM/vkui-tokens/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/VKCOM/vkui-tokens/actions/workflows/test.yml)
[![Npm](https://img.shields.io/npm/v/@vkontakte/vkui-tokens)](https://www.npmjs.com/package/@vkontakte/vkui-tokens)
[![GitHub Repo stars](https://img.shields.io/github/stars/VKCOM/vkui-tokens?label=GitHub%20Repo%20Stars&style=social)](https://github.com/VKCOM/vkui-tokens)

**[Интерактивная документация](https://vkcom.github.io/vkui-tokens/)**

Этот репозиторий содержит токены единой дизайн-системы VKUI и их значения для тем оформления различных проектов.

Темы собираются в следующие форматы: `css`, `scss`, `less`, `pcss`, `styl`, `js`, `json`.

Для описания интерфейсов тем и значений переменных используется TypeScript.

# Содержание

- [Использование](#использование)
  - [Использование CSS-переменных темы напрямую из пакета](#использование-css-переменных-темы-напрямую-из-пакета)
    - [Подключение темы на страницу](#подключение-темы-на-страницу)
    - [Использование переменных в вёрстке](#использование-переменных-в-вёрстке)
  - [Использование базовой темы напрямую из пакета](#использование-базовой-темы-напрямую-из-пакета)
  - [Создание новой темы для вашего проекта](docs/articles/new-theme/INDEX.md)
- [Инструменты](#инструменты)
  - [Локальная сборка своих тем инструментами библиотеки](#локальная-сборка-своих-тем-инструментами-библиотеки)
    - [Наследование от существующей темы](#наследование-от-существующей-темы)
- [Roadmap](#roadmap)
- [Полезные ссылки](#полезные-ссылки)
- [Информация для внесения изменений](CONTRIBUTING.md)
- [Changelog (архивная версия)](CHANGELOG.OLD.md)

Актуальный changelog находится на странице
[релизов в GitHub](https://github.com/VKCOM/vkui-tokens/releases)!

# Использование

Устанавливаем npm-пакет `@vkontakte/vkui-tokens`:

```bash
npm i --save @vkontakte/vkui-tokens@latest
```

## Использование CSS-переменных темы напрямую из пакета

### Подключение темы на страницу

В любом CSS-файле подключаем файл темы со значениями переменных:

```css
@import '@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css';
```

### Использование переменных в вёрстке

#### Использование в CSS

```postcss
.class:hover {
  background-color: var(--vkui--color_background--hover);
}
```

#### Использование CSS-переменных через объект в JavaScript (TypeScript)

```typescript
import baseTheme from '@vkontakte/vkui-tokens/themes/vkBase/cssVars/theme';

// Собствено имя CSS-переменной (название токена)
console.log(baseTheme.colorBackground.hover.name); // --vkui--color_background--hover;
// Сниппет для использования CSS-переменной
console.log(baseTheme.colorBackground.hover.value); // var(--vkui--color_background--hover, #F5F5F7)

// Динамически (с учётом возможных переопределений)
// узнаём, чему равно значение переменной внутри myElement:
getComputedStyle(myElement).getPropertyValue(baseTheme.colorBackground.hover.name);
```

#### Принудительное использование токенов определённого размера

Чтобы принудительно включить тот или иной вид темы у конкретного
поддерева элементов, нужно воспользоваться классами
`.vkui--force-${auto | regular | compact | large | largeX ...}`.
Смотри [демо](demo/example-adaptive-css-vars-theme.html) работы
адаптивных переменных и спец. классов.

Также можно просто использовать переменную конкретного брейкпоинта
(ex. --vkui--size*field_height--\*\*\_compact*\*\*), они все тоже
попадают в `:root`)

## Использование базовой темы напрямую из пакета

### js/ts/json

Импортируем необходимую тему в файле и используем:

```ts
import baseTheme from '@vkontakte/vkui-tokens/themes/vkBase';

// do whatever you want with baseTheme
```

### Используем в scss/styl/less root темы из пакета

Импортируем файл с необходимой темой и используем переменные от туда (снизу синтаксис SCSS)

```scss
@import '~@vkontakte/vkui-tokens/themes/vkBase/index';

.myAwesomeClass {
  background-color: $color-bg;
}

.myAwesomeClass:hover {
  background-color: $color-bg--hover;
}
```

### Используем pcss формат темы из пакета

1. Заходим в файл, где хотим использовать тему, и импортируем её:

   ```css
   @import '@vkontakte/vkui-tokens/themes/vkBase';
   ```

2. Заходим в файл темы, смотрим какие там есть переменные и используем их, например:

   ```css
   width: var(--size-content-block-width);
   ```

3. Просто так ничего не заработает, нужно поставить postcss:

   ```bash
   npm i --save-dev postcss
   ```

   Для запуска у postcss есть командная строка, которую тоже надо установить:

   ```bash
   npm i --save-dev postcss-cli
   ```

4. Создаем конфиг postcss. Для этого создаем файл postcss.config.js (можно в любом месте проекта, но лучше в корне) и пишем в него необходимые плагины:

   ```javascript
   const postcssPresetEnv = require('postcss-preset-env');

   module.exports = {
     plugins: [
       require('postcss-import'),
       require('precss'),
       require('postcss-css-variables'),
       require('postcss-custom-media'),
       require('postcss-media-minmax'),
       require('postcss-extend-rule'),
       postcssPresetEnv({
         stage: 0,
       }),
       require('postcss-color-mix'),
       require('cssnano'),
     ],
   };
   ```

   Возможно, вам не понадобятся все эти плагины, поэтому лучше почитать, что делает каждый из них (https://www.postcss.parts/).
   Нужно посмотреть файл вашей темы и ваш css (scss и др.), чтобы понять, что вам необходимо.

5. Устанавливаем все необходимые плагины, которые написали в конфиге, например:

   ```bash
   npm i --save-dev postcss-import
   ```

6. Настраиваем сборку postcss.

   Сборка производится командой postcss через командную строку с необходимым параметрами.
   Про них подробнее тут https://github.com/postcss/postcss-cli

   Пример команды:

   ```bash
   postcss src/main.css -c ./ --dir public
   ```

   Такая команда прогонит файл src/main.css с помощью конфига из текущей папки и положит результат в папку public.

# Инструменты

## Локальная сборка своих тем инструментами библиотеки

Библиотека предоставляет интерфейсы и темы, от которых можно наследоваться, и набор функций, которые позволяют собрать собственную тему в нужном формате.

Сборка темы подразумевает раскрытие наследования, генерацию цветов состояний (hover, active), округление и "пикселизация" значений и т.д.

## Предварительная настройка

Инструменты адаптированы для запуска в `Node`-среде, и не подходят для генерации темы в рантайме (в браузерной среде).
Вам необходимо установить следующие пакеты для корректной работы скриптов генерации:

```bash
npm i --save-dev color common-tags css.escape
```

### Наследование от существующей темы

Например, возьмем базовые темы (светлую и темную) и добавим к ним новый токен и переопределим один существующий.
Для этого нам нужно исполнить следующий скрипт:

```typescript
import type { ThemeDescription } from '@vkontakte/vkui-tokens/interfaces/general';
import type { Adaptive } from '@vkontakte/vkui-tokens/interfaces/general/tools';
import {
  lightTheme as baseTheme,
  darkTheme,
} from '@vkontakte/vkui-tokens/themeDescriptions/base/vk.js';
import { expandAll } from '@vkontakte/vkui-tokens/build/expandTheme';
import { compileStyles } from '@vkontakte/vkui-tokens/build/compilers/styles/compileStyles';

interface MyNewAwesomeThemeDescription extends ThemeDescription {
  myNewAwesomeToken: Adaptive<number>;
}

const myNewAwesomeTheme: MyNewAwesomeThemeDescription = {
  ...baseTheme,
  // Название темы
  themeName: 'myAwesomeTheme',
  // Базовая часть названия темы (используется для генерации локального селектора, например: .vkui--myAwesomeTheme--light)
  themeNameBase: 'myAwesomeTheme',
  // Тема, от которой наследуются переменные, носит информационный характер
  themeInheritsFrom: 'vkBase',
  // Новый адаптивный токен
  myNewAwesomeToken: {
    regular: 20,
    compact: 12,
  },
  colors: {
    // Сохраняем остальные значения из темы
    ...baseTheme.colors,
    // Переопределяем необходимую переменную
    colorTextAccentThemed: '#ff0000',
  },
};

const myNewAwesomeThemeDark: MyNewAwesomeThemeDescription = {
  ...myNewAwesomeTheme,
  ...darkTheme,
  themeName: 'myAwesomeThemeDark',
  themeNameBase: 'myAwesomeTheme',
  themeInheritsFrom: 'vkBaseDark',
  colors: {
    ...darkTheme.colors,
    colorTextAccentThemed: '#00ff00',
  },
};

// Получаем разные типы тем на основе описания
const { theme, pixelifyTheme, cssVarsTheme } = expandAll(myNewAwesomeTheme);
const { pixelifyTheme: pixelifyThemeDark } = expandAll(myNewAwesomeThemeDark);

// Для использования, например, в вебе вам подойдет компиляция "пикселяризованной" темы в формате '.css':
const cssString = compileStyles('css', pixelifyTheme);
const cssStringDark = compileStyles('css', pixelifyThemeDark);

// Полученные CSS-строки со всеми переменными тем можно вставить в DOM или сохранить в файл
```

# Roadmap

- [ ] Добавить более умную генерацию active, hover состояний цвета.
      При генерации нужно учитывать тёмный и светлый вариант тем, а также
      сам цвет, для которого генерируется состояние.
      (решаем проблему, что цвет наведения, сгенерированный от синего,
      плохо виден на большинстве мониторов).
- [ ] Генерация цветов по заранее определённой палитре.
- [ ] Текстовое описание семантики каждого токена.
- [ ] Более подробная документация.
- [ ] Сайт с примерами и описанием.

# Полезные ссылки

1. [Доклад](https://youtu.be/0rHgqQvl0NQ?t=1858) про дизайн-системы на фронтенде: там рассказывается, зачем нужны дизайн-токены, причём тут UI-kit и как делать темизацию.
2. Серия видеороликов на youtube, где показано использование этой библиотеки (но со старым названием, не пугайтесь), как ядра дизайн-системы на практике: [первый](https://www.youtube.com/watch?v=RKCsrPOxYWE), [второй](https://www.youtube.com/watch?v=ZhiH4jFL-kU), [третий](https://www.youtube.com/watch?v=ZXOmmkyxrwk)
3. Opensource библиотека компонентов (UI-kit) [VKUI](https://github.com/VKCOM/VKUI), которая использует токены.
4. [Сайт](https://paradigm.mail.ru/) дизайн-система Paradigm, из которой выросла эта библиотека. Там можно найти дизайнерские принципы и идеи, которые стали основой этого репозитория.
