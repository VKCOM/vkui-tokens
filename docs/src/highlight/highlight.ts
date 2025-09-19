import hljs from 'highlight.js/lib/core';

import { highlightConfig } from './config';
import { createCodeWidget } from './codeWidget';

let hljsInitialized = false;

function findChildIndex(element: HTMLElement): number {
	// Вызывается в цикле, поэтому не копируем элементы из NodeList в массив
	for (let i = 0; i < element.parentElement.children.length; i++) {
		if (element.parentElement.children[i] === element) {
			return i;
		}
	}

	return -1;
}

/**
 * Подсвечивает синтаксис во всех блков кода в переданном элементе
 * Если в исходнике встречаются несколько подряд идущих блоков кода на разных языках, они объединяются в виджет
 * с табами (см. файл codeWidget.ts)
 */
export function highlightCodeInElement(element: HTMLElement) {
	if (!hljsInitialized) {
		highlightConfig().languages.forEach((language) =>
			hljs.registerLanguage(language.name, language.lib),
		);
		hljsInitialized = true;
	}

	const codeBlocks = Array.from(element.querySelectorAll(highlightConfig().codeSelector));

	for (const codeBlock of codeBlocks) {
		if (!(codeBlock instanceof HTMLElement)) {
			continue;
		}

		const codeParent = codeBlock.parentElement;
		const codeParentIndex = findChildIndex(codeParent);

		codeBlock.innerHTML = hljs.highlightAuto(codeBlock.innerText).value;

		const prevCodeParent = codeParent.parentElement.children[codeParentIndex - 1] as HTMLElement;

		if (!prevCodeParent) {
			break;
		}

		const prevCodeBlock = prevCodeParent.querySelector(highlightConfig().codeSelector);

		if (prevCodeBlock instanceof HTMLElement) {
			createCodeWidget(prevCodeParent, codeParent);
		}
	}

	const links = Array.from(element.querySelectorAll('a[href]'));

	for (const link of links) {
		link.setAttribute('target', '_blank');
	}
}
