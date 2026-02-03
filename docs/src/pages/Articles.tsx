import 'highlight.js/styles/github.css';

import { Spacing, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui';
import * as React from 'react';

import {
  AsideMenu,
  type AsideMenuItem,
} from '../../src/components/layouts/shared/AsideMenu/AsideMenu';
import { highlightCodeInElement } from '../../src/highlight/highlight';

export interface ArticlesProps {
  items?: AsideMenuItem[];
  contentsHtml?: string;
}

export function Articles(props: ArticlesProps) {
  const articleContent = props.contentsHtml ?? '';
  const ref = React.useRef<HTMLDivElement>(undefined);

  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  const isMobile = viewWidth <= 3;

  React.useEffect(() => {
    highlightCodeInElement(ref.current);
  }, [ref.current, articleContent]);

  return (
    <div className={`articles ${isMobile ? 'articles__mobile' : ''}`}>
      <AsideMenu items={props.items} />

      {isMobile && <Spacing size={20} />}

      <div
        ref={ref}
        dangerouslySetInnerHTML={{ __html: articleContent }}
        className="articles-container"
      ></div>
    </div>
  );
}
