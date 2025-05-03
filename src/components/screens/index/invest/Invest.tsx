// STYLES
import style from './Invest.module.scss';

export default function Invest() {
	return (
		<section className={style['invest']}>
			<div className='container'>
				<div className={style['invest__wrap']}>
					<div className={style['invest__tale']}>
						<h3 className={style['invest__tale-title']}>ЗПИФ «Залоговые займы»</h3>
						<p className={style['invest__tale-description']}>
							Специализируется на выдаче займов бизнесу под залог недвижимости.
						</p>
					</div>
					<div className={style['invest__assets']}>
						<h3 className={style['invest__assets-title']}>
							<img src='/src/assets/images/icons/airplane.svg' alt='Самолет' /> 800 млн ₽
						</h3>
						<p className={style['invest__assets-description']}>Стоимость активов фонда</p>
					</div>
				</div>
				<h4 className={style['invest__forecast']}>
					Прогнозируется двукратное увеличение портфеля займов в 2025 году
				</h4>
			</div>
		</section>
	);
}
