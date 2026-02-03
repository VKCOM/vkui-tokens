import '@vkontakte/vkui/dist/vkui.css';
import './styles/index.css';

import type * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import articleNewTheme from './articles/NewTheme.md';
import articleTokenHelpers from './articles/TokenHelpers.md';
import Main from './components/layouts/Main';
import { Articles } from './pages/Articles';
import Tokens from './pages/Tokens';

const articles = [
  {
    title: 'Темы',
  },
  {
    slug: 'new-theme',
    title: 'Создание новой темы для проекта',
    contents: articleNewTheme,
  },
  {
    title: 'Токены',
  },
  {
    slug: 'token-helpers',
    title: 'Хелпер-функции',
    contents: articleTokenHelpers,
  },
];

const router = createBrowserRouter([
  {
    path: '/vkui-tokens',
    element: <Tokens />,
  },
  {
    path: '/vkui-tokens/articles',
    element: <Articles items={articles} />,
  },
  ...articles
    .filter((article) => !!article.slug)
    .map((article) => ({
      path: `/vkui-tokens/articles/${article.slug}`,
      element: <Articles items={articles} contentsHtml={article.contents} />,
    })),
]);

router.subscribe(() => {
  window.scrollTo(0, 0);
});

const App: React.FC = () => (
  <Main>
    <RouterProvider router={router} />
  </Main>
);

export default App;
