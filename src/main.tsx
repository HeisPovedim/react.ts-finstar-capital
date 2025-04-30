// REACT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// TANSTACK
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// TANSTACK QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// STYLES
import '@styles/global.scss';

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

/** @description Модуль для типизации router */
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</StrictMode>
);
