import styles from './Buttons.module.scss';

interface IButton {
	children: React.ReactNode;
	variant: 'green' | 'blue' | 'text';
	className?: string;
	disabled?: boolean;
}

export default function Button({ children, variant, className, disabled }: IButton) {
	return (
		<button className={`${styles.button} ${styles[`button--${variant}`]} ${className}`} disabled={disabled}>
			<span className={styles['button__content']}>{children}</span>
		</button>
	);
}
