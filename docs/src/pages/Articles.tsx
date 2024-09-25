import * as React from 'react';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';
import { AsideMenu, AsideMenuItem } from '@/components/layouts/shared/AsideMenu/AsideMenu';
import { Spacing, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);

export interface ArticlesProps {
    items?: AsideMenuItem[];
    contentsHtml?: string;
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
