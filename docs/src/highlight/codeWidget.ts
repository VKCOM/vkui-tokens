import { highlightConfig } from './config';

function forEachCodeBlock(
	parent: HTMLElement,
	callback: (codeBlock: HTMLElement, language: string) => void,
) {
	const codeBlocks = Array.from(parent.querySelectorAll(highlightConfig().codeSelector));

	codeBlocks.forEach((codeBlock) => {
		if (!(codeBlock instanceof HTMLElement)) {
			return;
		}

		const langClassName = Array.from(codeBlock.classList).find((className) =>
			className.startsWith('language-'),
		);

		if (langClassName) {
			const language = langClassName.slice('language-'.length);
			callback(codeBlock, language);
		}
	});
}

function switchLanguage(parent: HTMLElement, language: string) {
	const allLanguageEls = Array.from(parent.querySelectorAll('[data-language]'));

	allLanguageEls.forEach((element) => {
		if (element.getAttribute('data-language') === language) {
			element.classList.add('code-tab-selected');
		} else {
			element.classList.remove('code-tab-selected');
		}
	});
}

function findDomParent(
	element: HTMLElement,
	selector: string,
	maxDepth = 5,
): HTMLElement | undefined {
	let current: HTMLElement | null = element;
	let count = 0;

	while (current && !current.matches(selector) && count < maxDepth) {
		current = current.parentElement;
		count++;
	}

	if ((current && !current.matches(selector)) || !current) {
		return undefined;
	}

	return current;
}

function handleTogglerClick(event: MouseEvent) {
	if (!(event.target instanceof HTMLElement)) {
		return;
	}

	const language = event.target.getAttribute('data-language');

	if (!language) {
		return;
	}

	const codeWidgetRoot = findDomParent(event.target, '.code-widget');

	if (codeWidgetRoot) {
		switchLanguage(codeWidgetRoot, language);
	}
}

/**
 * Создаёт блок с переключателем нескольких языков и подсветкой синтаксиса
 */
export function createCodeWidget(...elements: HTMLElement[]) {
	if (!elements.length || !elements[0].parentElement) {
		return;
	}

	const parentDiv = document.createElement('DIV');
	parentDiv.classList.add('code-widget');

	elements[0].parentElement.replaceChild(parentDiv, elements[0]);

	for (const element of elements) {
		parentDiv.appendChild(element);
	}

	const languageToggler = document.createElement('DIV');
	parentDiv.insertBefore(languageToggler, parentDiv.firstChild);

	let firstLanguage: string | undefined;

	forEachCodeBlock(parentDiv, (codeBlock, language) => {
		if (!firstLanguage) {
			firstLanguage = language;
		}

		codeBlock.setAttribute('data-language', language);

		const codeParent = codeBlock.parentElement;

		if (!codeParent) {
			return;
		}

		codeParent.classList.add('code-tab');

		const languageButton = document.createElement('button');
		languageButton.innerText = language;
		languageButton.classList.add('code-tab_button');
		languageButton.setAttribute('data-language', language);

		languageToggler.appendChild(languageButton);
	});

	languageToggler.addEventListener('click', handleTogglerClick);

	if (firstLanguage) {
		switchLanguage(parentDiv, firstLanguage);
	}
}
