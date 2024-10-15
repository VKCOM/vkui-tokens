import * as React from 'react';
import 'highlight.js/styles/github.css';

import { AsideMenu, AsideMenuItem } from '@/components/layouts/shared/AsideMenu/AsideMenu';
import { Spacing, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import { highlightCodeInElement } from '@/highlight/highlight';

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
        highlightCodeInElement(ref.current);
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
