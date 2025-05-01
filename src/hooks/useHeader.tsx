import { useEffect, useState } from 'react';

export const useHeader = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return { isMenuOpen, toggleMenu };
};
