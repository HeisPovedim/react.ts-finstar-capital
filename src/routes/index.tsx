import { createFileRoute } from '@tanstack/react-router';

// LAYOUTS
import Header from '@components/layouts/header/Header';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<Header />
		</>
	);
}
