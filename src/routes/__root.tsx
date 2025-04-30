// REACT
import React from 'react';

// TANSTACK
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

/** @description Флаг для отображения навигации */
const navigation = false;

export const Route = createRootRoute({
	component: () => (
		<React.Fragment>
			{navigation && (
				<>
					<div className=''>
						<Link to='/' className='[&.active]:font-bold'>
							Главная
						</Link>
					</div>
					<hr />
				</>
			)}
			<Outlet />
			<TanStackRouterDevtools />
		</React.Fragment>
	),
});
