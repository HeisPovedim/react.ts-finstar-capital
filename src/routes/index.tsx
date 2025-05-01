import { createFileRoute } from '@tanstack/react-router';

// LAYOUTS
import Header from '@components/layouts/header/Header';

// SCREENS
import Cover from '@components/screens/index/cover/Cover';


export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<Header />
			<main>
				<Cover />
			</main>
		</>
	);
}
