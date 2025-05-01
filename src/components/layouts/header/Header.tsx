// HOOKS
import { useHeader } from '../../../hooks/useHeader';

// STYLES
import style from './Header.module.scss';

export default function Header() {
	const { isMenuOpen, toggleMenu } = useHeader();

	return (
		<header className={`${style['header']}`}>
			<div className='container flex items-center justify-center gap-[45px] max-md:justify-between max-md:gap-2'>
				<input
					type='checkbox'
					id='burger-checkbox'
					className={style['burger-checkbox']}
					checked={isMenuOpen}
					onChange={toggleMenu}
				/>
				<label className={style['burger']} htmlFor='burger-checkbox'>
					<span className={style['burger__middle']}></span>
				</label>
				<nav className={`${style['nav']} w-[260px] flex justify-end`}>
					<ul className={style['nav__list']}>
						<li className={style['nav__item']}>
							<a href='#' className={style['nav__link']}>
								График СЧА
							</a>
						</li>
						<li className={style['nav__item']}>
							<a href='#' className={style['nav__link']}>
								Преимущества
							</a>
						</li>
					</ul>
				</nav>
				<div className={style['logo']}>
					<img
						src='./logo.svg'
						alt='Логотип компании'
						className={`${style['logo__image']} max-[320px]:pr-0`}
					/>
				</div>
				<nav className={`${style['nav']} w-[260px]`}>
					<ul className={style['nav__list']}>
						<li className={style['nav__item']}>
							<a href='#' className={style['nav__link']}>
								Формат инвестиций
							</a>
						</li>
						<li className={style['nav__item']}>
							<a href='#' className={style['nav__link']}>
								Контакты
							</a>
						</li>
					</ul>
				</nav>
				<nav
					className={`${style['nav-mobile']} ${isMenuOpen ? style['nav-mobile--open'] : ''} flex flex-col justify-between`}
				>
					<ul className={`${style['nav-mobile__list']} mt-[5rem] flex flex-col gap-8 text-center`}>
						<li className={style['nav-mobile__item']}>
							<a href='#' className={style['nav-mobile__link']}>
								График СЧА
							</a>
						</li>
						<li className={style['nav-mobile__item']}>
							<a href='#' className={style['nav-mobile__link']}>
								Преимущества
							</a>
						</li>
						<li className={style['nav-mobile__item']}>
							<a href='#' className={style['nav-mobile__link']}>
								Формат инвестиций
							</a>
						</li>
						<li className={style['nav-mobile__item']}>
							<a href='#' className={style['nav-mobile__link']}>
								Контакты
							</a>
						</li>
					</ul>
					<div className={`${style['nav-mobile__contacts']} flex flex-col gap-2 text-center`}>
						<a href='tel:+74957455557' className={style['nav-mobile__link']}>
							+7 (495) 745-55-57
						</a>
						<a href='mailto:info@finstar-capital.ru' className={style['nav-mobile__link']}>
							info@finstar-capital.ru
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
