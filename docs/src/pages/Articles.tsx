import * as React from 'react';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);

export interface ArticlesProps {
    contentsHtml?: string;
}

export function Articles(props: ArticlesProps) {
    let articleContent = props.contentsHtml ?? '';
    const ref = React.useRef<HTMLDivElement>(undefined);

    React.useEffect(() => {
        if (!ref.current) {
            return;
        }

        const codeBlocks = ref.current.querySelectorAll("code.language-typescript, code.language-css");

        for (let i = 0; i < codeBlocks.length; i++) {
            const codeBlock = codeBlocks[i] as HTMLElement;
            codeBlock.innerHTML = hljs.highlightAuto(codeBlock.innerText).value;
        }

        const links = ref.current.querySelectorAll("a[href]");

        for (let i = 0; i < links.length; i++) {
            const link = links[i] as HTMLElement;
            link.setAttribute("target", "_blank");
        }
    }, [ref.current]);

    return (
        <div>
            <div
                ref={ref}
                dangerouslySetInnerHTML={{__html: articleContent}}
                className="articles-container"
            ></div>
        </div>
    );
}
