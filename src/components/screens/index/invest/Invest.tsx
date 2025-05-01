// STYLES
import style from './Invest.module.scss';

export default function Invest() {
	return (
		<section className={style['invest']}>
			<div className='container flex flex-col gap-8'>
				<div className={`${style['invest__wrap']} flex justify-between gap-4 max-md:flex-col`}>
					<div className={`${style['invest__tale']} w-[450px] max-md:w-full`}>
						<h3 className={style['invest__tale-title']}>ЗПИФ «Залоговые займы»</h3>
						<p className={style['invest__tale-description']}>
							Специализируется на выдаче займов бизнесу под залог недвижимости.
						</p>
					</div>
					<div className={`${style['invest__assets']} max-md:w-full`}>
						<h3
							className={`${style['invest__assets-title']} flex items-center gap-2 max-md:justify-center`}
						>
							<img src='/src/assets/images/invest/airplane.svg' alt='Самолет' /> 800 млн ₽
						</h3>
						<p className={style['invest__assets-description']}>Стоимость активов фонда</p>
					</div>
				</div>
				<h4 className={`${style['invest__forecast']} w-full flex items-center justify-center`}>
					Прогнозируется двукратное увеличение портфеля займов в 2025 году
				</h4>
			</div>
		</section>
	);
}
