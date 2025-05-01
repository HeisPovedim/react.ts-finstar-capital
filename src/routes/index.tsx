import { createFileRoute } from '@tanstack/react-router';

// LAYOUTS
import Header from '@components/layouts/header/Header';

// SCREENS
import Cover from '@components/screens/index/cover/Cover';
import Invest from '@components/screens/index/invest/Invest';
import Advantages from '@components/screens/index/advantages/Advantages';
// STYLES
import style from './index.module.scss';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className={style['index']}>
			<Header />
			<main>
				<Cover />
				<Invest />
				<Advantages />
			</main>
		</div>
	);
}
