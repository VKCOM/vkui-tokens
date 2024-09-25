import '@vkontakte/vkui/dist/vkui.css';
import './styles/index.css';

import React, { FC } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

import Main from '@/components/layouts/Main';
import Tokens from '@/pages/Tokens';
import { Articles } from './pages/Articles';

import articleNewTheme from "./articles/NewTheme.md";

function articleRoute(slug: string, contents?: string) {
	return {
		path: `/articles/${slug}`,
		element: <Articles contentsHtml={contents}/>
	};
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Tokens />,
	},
	{
		path: "/articles",
		element: <Articles />
	},
	articleRoute("new-theme", articleNewTheme),
]);

const App: FC = () => (
	<Main>
		<RouterProvider router={router} />
	</Main>
);

export default App;
