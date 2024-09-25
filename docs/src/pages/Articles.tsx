import * as React from 'react';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github.css';

import { AsideMenu, AsideMenuItem } from '@/components/layouts/shared/AsideMenu/AsideMenu';
import { Spacing, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);

export interface ArticlesProps {
    items?: AsideMenuItem[];
    contentsHtml?: string;
}

function forEachCodeBlock(parent: HTMLElement, callback: (codeBlock: HTMLElement, language: string) => void) {
    for (let i = 0; i < parent.children.length; i++) {
        const element = parent.children[i];
        const codeBlock = element.querySelector('code');

        if (!codeBlock) {
            continue;
        }

        for (let j = 0; j < codeBlock.classList.length; j++) {
            const className = codeBlock.classList[j];

            if (className.startsWith('language-')) {
                const language = className.slice('language-'.length);

                callback(codeBlock, language);
                break;
            }
        }
    }
}

function switchLanguage(parent: HTMLElement, language: string) {
    const allLanguageEls = parent.querySelectorAll('[data-language]');

    for (let i = 0; i < allLanguageEls.length; i++) {
        const element = allLanguageEls[i];

        if (element.getAttribute('data-language') === language) {
            element.classList.add('code-tab-selected');
        } else {
            element.classList.remove('code-tab-selected');
        }
    }
}

function handleTogglerClick(event: MouseEvent) {
    const language = (event.target as HTMLElement).getAttribute('data-language');

    if (language) {
        switchLanguage((event.target as HTMLElement).parentElement.parentElement, language);
    }
}

function makeLanguageToggler(...elements: HTMLElement[]) {
    if (!elements.length) {
        return;
    }

    const parentDiv = document.createElement('DIV');

    elements[0].parentElement.replaceChild(parentDiv, elements[0]);

    for (const element of elements) {
        parentDiv.appendChild(element);
    }

    const languageToggler = document.createElement('DIV');
    parentDiv.insertBefore(languageToggler, parentDiv.firstChild);

    let firstLanguage: string;

    forEachCodeBlock(parentDiv, (codeBlock, language) => {
        if (!firstLanguage) {
            firstLanguage = language;
        }

        codeBlock.setAttribute('data-language', language);

        const codeParent = codeBlock.parentElement;
        codeParent.classList.add('code-tab');

        const languageButton = document.createElement('button');
        languageButton.innerText = language;
        languageButton.classList.add('code-tab_button');
        languageButton.setAttribute('data-language', language);

        languageToggler.appendChild(languageButton);
    });

    languageToggler.addEventListener('click', handleTogglerClick);

    switchLanguage(parentDiv, firstLanguage);
}

function findChildIndex(element: HTMLElement): number {
    for (let i = 0; i < element.parentElement.children.length; i++) {
        if (element.parentElement.children[i] === element) {
            return i;
        }
    }

    return -1;
}

export function Articles(props: ArticlesProps) {
    let articleContent = props.contentsHtml ?? '';
    const ref = React.useRef<HTMLDivElement>(undefined);

    const { viewWidth } = useAdaptivityWithJSMediaQueries();
	const isMobile = viewWidth <= 3;

    React.useEffect(() => {
        if (!ref.current) {
            return;
        }

        const codeSelector = 'code.language-typescript, code.language-css, code.language-json';

        const codeBlocks = ref.current.querySelectorAll(codeSelector);

        for (let i = 0; i < codeBlocks.length; i++) {
            const codeBlock = codeBlocks[i] as HTMLElement;
            const codeParent = codeBlock.parentElement;
            const codeParentIndex = findChildIndex(codeParent);

            codeBlock.innerHTML = hljs.highlightAuto(codeBlock.innerText).value;

            const prevCodeParent = codeParent.parentElement.children[codeParentIndex - 1] as HTMLElement;

            if (prevCodeParent) {
                const prevCodeBlock = prevCodeParent.querySelector(codeSelector) as HTMLElement;

                if (prevCodeBlock) {
                    makeLanguageToggler(prevCodeParent, codeParent);
                }
            }
        }

        const links = ref.current.querySelectorAll("a[href]");

        for (let i = 0; i < links.length; i++) {
            const link = links[i] as HTMLElement;
            link.setAttribute("target", "_blank");
        }
    }, [ref.current, articleContent]);

    return (
        <div className={`articles ${isMobile ? 'articles__mobile' : ''}`}>
            <AsideMenu items={props.items}/>

            {isMobile && (
                <Spacing size={20}/>
            )}

            <div
                ref={ref}
                dangerouslySetInnerHTML={{__html: articleContent}}
                className="articles-container"
            ></div>
        </div>
    );
}
