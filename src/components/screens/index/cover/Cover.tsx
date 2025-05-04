// COMPONENTS
import Button from '@components/ui/button/Button';

// STYLES
import style from './Cover.module.scss';

export default function Cover() {
	return (
		<section className={style['cover']}>
			<div className={`${style['cover__container']} container`}>
				<h2 className={style['cover__title']}>
					Получите от <span className={style['cover__title-accent']}>30% годовых</span>
				</h2>
				<span className={style['cover__description']}>Инвестируя в ЗПИФ “Залоговые займы”</span>
				<Button variant='green' className={style['cover__button']}>
					Инвестировать
				</Button>
			</div>
		</section>
	);
}
