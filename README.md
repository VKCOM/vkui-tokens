<img src="assets/vkui_logo.png" alt="vkui logo" height="52"/>
<img src="assets/logo.svg" alt="vkui logo" height="52"/>

# Использование

1. Устанавливаем npm-пакет `@vkontakte/vkui-tokens`:
```bash
npm i --save @vkontakte/vkui-tokens@latest
```
## Используем css variables темы напрямую из пакета
2. В любом css (или процессоре) импортируем css файл с объявлением переменных:
```css
@import "@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css";
```

3. далее используем эти переменные
* напрямую в css (процессорах)
```postcss
.myAwesomeClass:hover {
	background-color: var(--vkui--color_background--hover);
}
```
* или через объект в js(ts)
```typescript
import baseTheme from '@vkontakte/vkui-tokens/themes/vkBase/cssVars/theme';

console.log(baseTheme.colorBackground.hover.name) // --vkui--color_background--hover;
console.log(baseTheme.colorBackground.hover.value) // var(--vkui--color_background--hover, #F5F5F7)

// динамически (с учётом возможных переопределений)
// узнаём чему равно значение переменной у myElement:
getComputedStyle(myElement).getPropertyValue(baseTheme.colorBackground.hover.name)
```
* для того, чтобы принудительно включать тот или иной вид темы у конкретного поддерева элементов, пользуемся классами `.vkui--force-${auto | regular | compact | large | largeX ...}`. Смотри [демо](demo/example-adaptive-css-vars-theme.html) работы адаптивных переменных и спец. классов. (Также можно просто использовать переменную конкретного брейкпоинта (ex. --vkui--size_field_height--**_compact_**), они все также попадают в `:root`)


## Используем root темы напрямую из пакета
### js/ts/json
2. Импортируем необходимую тему в файле и используем:
```ts
import baseTheme from '@vkontakte/vkui-tokens/themes/vkBase';

// do whatever you want with baseTheme
```

### Используем в scss/styl/less root темы из пакета
2. Импортируем файл с необходимой темой и используем переменные от туда (снизу синтаксис SCSS)
```scss
@import "~@vkontakte/vkui-tokens/themes/vkBase/index";

.myAwesomeClass {
	background-color: $color-bg;
}

.myAwesomeClass:hover {
	background-color: $color-bg--hover;
}
```


###  Используем pcss формат темы из пакета

2. Заходим в файл, где хотим использовать тему, и импортируем её:

        @import "@vkontakte/vkui-tokens/themes/vkBase";

3. Заходим в файл темы, смотрим какие там есть переменные и юзаем их, например:

        width: var(--size-content-block-width);

4. Просто так ничего не заработает, нужно поставить postcss:

        npm i --save-dev postcss

   Для запуска у postcss есть командная строка, которую тоже надо установить:

        npm i --save-dev postcss-cli

5. Создаем конфиг postcss. Для этого создаем файл postcss.config.js (можно в любом месте проекта, но лучше в корне) и пишем в него необходимые плагины:

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
         		require('cssnano')
         	],
         };
     ```
   Возможно, вам не понадобятся все эти плагины, поэтому лучше почитать, что делает каждый из них (https://www.postcss.parts/).
   Нужно посмотреть файл вашей темы и ваш css (scss и др.), чтобы понять, что вам необходимо.

6. Устанавливаем все необходимые плагины, которые написали в конфиге, например:

        npm i --save-dev postcss-import

7. Настраиваем сборку postcss.

   Сборка производится командой postcss через командную строку с необходимым параметрами.
   Про них подробнее тут https://github.com/postcss/postcss-cli

   Пример команды:

        postcss src/main.css -c ./ --dir public

   Такая команда прогонит файл src/main.css с помощью конфига из текущей папки и положит результат в папку public.

## Локальная сборка своих тем инструментами библиотеки

### Наследуемся от базовой темы
2. Из библиотеки можно импортировать интерфейсы и темы от которых насследоваться всячески доопределять.
   Также из библиотеки можно заимпортить функции позволяющие собрать тему (сгенировать состояния цветов, пикселизировать значения и т.д.) в нужном формате: css, js, scss и т.д. Пример:
```typescript
import type {ThemeDescription} from '@vkontakte/vkui-tokens/interfaces/general';
import type {Adaptive} from '@vkontakte/vkui-tokens/interfaces/general/tools';
import {lightTheme as baseTheme} from '@vkontakte/vkui-tokens/themeDescriptions/base/vk';
import {expandAll} from '@vkontakte/vkui-tokens/build/expandTheme';
import {compileStyles} from '@vkontakte/vkui-tokens/build/compilers/styles/compileStyles';

interface MyNewAwesomeThemeDescription extends ThemeDescription {
	myNewAwesomeToken: Adaptive<number>;
}

const myNewAwesomeTheme: MyNewAwesomeThemeDescription = {
	...baseTheme,
	myNewAwesomeToken: {
		regular: 20,
		compact: 12,
	},
};

// получаем разные типы тем на основе описания
const {theme, pixelifyTheme, cssVarsTheme} = expandAll(myNewAwesomeTheme);

// получаем CSS-строку со всеми переменными темы,
// которую можно вставить в DOM или сохранить в файл
const cssString = compileStyles('css', pixelifyTheme);
```

### Собираем локально свою тему (набор своих локальных переменных проекта)
2. На самом деле никакой необходимости наследоваться (см. предыдущий пункт) нет, соберём свою тему из произвольного количества уникальных переменных. Пример:
```typescript
import type {Adaptive} from '@vkontakte/vkui-tokens/interfaces/general/tools';
import {expandAll} from '@vkontakte/vkui-tokens/build/expandTheme';
import {compileStyles} from '@vkontakte/vkui-tokens/build/compilers/styles/compileStyles';

interface MyNewAwesomeThemeDescription {
	myNewAwesomeToken: Adaptive<number>;
}

const myNewAwesomeTheme: MyNewAwesomeThemeDescription = {
	myNewAwesomeToken: {
		regular: 20,
		compact: 12,
	},
};

// получаем разные типы тем на основе описания
const {theme, pixelifyTheme, cssVarsTheme} = expandAll(myNewAwesomeTheme);

// получаем CSS-строку со всеми переменными темы,
// которую можно вставить в DOM или сохранить в файл
// буквально тут содержится:
/* 
:root {
	--vkui--my_new_awesome_token--regular: 20px;
	--vkui--my_new_awesome_token--compact: 12px;
}
 */
const cssString = compileStyles('css', pixelifyTheme);
```

# ROAD MAP библиотеки
* [ ] Добавляем более умную генерацию active, hover состояний цвета. Будем учитывать тёмный и светлый вариант тем. Будем учитывать сам цвет, для которого генерим затемнение. (решаем проблему, что наведение на кнопки в синей шапке абсолютно не видны).

# Полезные ссылки
1. [Доклад](https://youtu.be/0rHgqQvl0NQ?t=1858) про дизайн-системы на фронтенде: там рассказывается зачем нужны дизайн-токены, причём тут UI-kit и как делать темизацию.
2. Серия видеороликов на youtube, где показано использование этой библиотеки (но со старым названием, не пугайтесь), как ядра дизайн-системы, на практике: [первый](https://www.youtube.com/watch?v=RKCsrPOxYWE), [второй](https://www.youtube.com/watch?v=ZhiH4jFL-kU), [третий](https://www.youtube.com/watch?v=ZXOmmkyxrwk)
3. Opensource библиотека компонентов (UI-kit) [VKUI](https://github.com/VKCOM/VKUI), которая использует токены.
4. [Сайт](https://paradigm.mail.ru/) дизайн системы Paradigm из которой выросла эта библиотека. Там можно найти дизайнерские принципы и идеи, которые стали основой кода находящемся в этом репозитории.
