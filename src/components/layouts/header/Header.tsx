// STYLES
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={`${styles['header']}`}>
			<div className='container flex justify-between items-center'>
				<nav className={styles['nav']}>
					<ul className={styles['nav__list']}>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								Главная
							</a>
						</li>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								О нас
							</a>
						</li>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								Услуги
							</a>
						</li>
					</ul>
				</nav>

				<div className={styles['logo']}>
					<img src='./logo.svg' alt='Логотип компании' className={styles['logo__image']} />
				</div>

				<nav className={styles['nav']}>
					<ul className={styles['nav__list']}>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								Контакты
							</a>
						</li>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								Блог
							</a>
						</li>
						<li className={styles['nav__item']}>
							<a href='#' className={styles['nav__link']}>
								Войти
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
