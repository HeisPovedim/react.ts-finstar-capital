// STYLES
import style from './Advantages.module.scss';

export default function Advantages() {
	return (
		<section className={style['advantages']}>
			<div className='container'>
				<h2 className={style['advantages__title']}>Преимущества для инвестора</h2>
				<div className={style['advantages-wrapper']}>
					<div className={style['advantages__risk']}>
						<h3 className={style['advantages__risk__title']}>Низкие риски</h3>
						<ul className={style['advantages__risk-items']}>
							<li className={style['advantages__risk-item']}>
								<img
									src='/src/assets/images/advantages/item01.png'
									alt='Залог, превышающий объем займа в 2 раза'
								/>
								<p className={style['advantages__risk-item__text']}>
									Залог, превышающий объем <br /> займа в 2 раза
								</p>
							</li>
							<li className={style['advantages__risk-item']}>
								<img
									src='/src/assets/images/advantages/item02.png'
									alt='Лицензия ЦБ РФ №21-000-1-01096 от 19.03.2024'
								/>
								<p className={style['advantages__risk-item__text']}>
									Лицензия ЦБ РФ <br /> №21-000-1-01096 от 19.03.2024
								</p>
							</li>
							<li className={style['advantages__risk-item']}>
								<img
									src='/src/assets/images/advantages/item03.png'
									alt='75% просрочки долга урегулируется на досудебном этапе'
								/>
								<p className={style['advantages__risk-item__text']}>
									<span>75% просрочки</span> долга <br /> урегулируется на <br /> досудебном этапе
								</p>
							</li>
						</ul>
					</div>
					<div className={style['advantages__estimation']}>
						<h3 className={style['advantages__estimation__title']}>
							Профессиональная оценка <br /> надежности заемщика
						</h3>
						<ul className={style['advantages__estimation-items']}>
							<li className={style['advantages__estimation-item']}>
								Комплексная проверка заемщика и залогодателя через цифровые системы (ФНС, ФССП,
								Росреестр и др.)
							</li>
							<li className={style['advantages__estimation-item']}>
								Трехступенчатая оценка залога с привлечением сертифицированных оценщиков, брокеров,
								аналитиков рынка.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
