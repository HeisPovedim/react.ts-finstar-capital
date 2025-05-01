// STYLES
import style from './Cover.module.scss';

// COMPONENTS
import Button from '@components/ui/button/Button';

export default function Cover() {
	return (
		<section className={style['cover']}>
			<div className='container h-[560px] flex flex-col items-center justify-start text-center'>
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
