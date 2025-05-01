// STYLES
import style from './Advantages.module.scss';

export default function Advantages() {
	return (
		<section className={style['advantages']}>
			<div className='container'>
				<h2 className={style['advantages__title']}>Преимущества для инвестора</h2>
				<div className={`${style['advantages-wrapper']} flex justify-between gap-5 max-md:flex-col`}>
					<div
						className={`${style['advantages__risk']} w-[450px] h-[432px] flex flex-col gap-[clamp(20px,_4vw,_40px)] max-md:w-full max-md:min-h-[380px] max-md:h-auto`}
					>
						<h3 className={style['advantages__risk__title']}>Низкие риски</h3>
						<ul className={`${style['advantages__risk-items']} flex flex-col gap-8`}>
							<li className={`${style['advantages__risk-item']} flex items-center gap-3.5`}>
								<img
									src='/src/assets/images/advantages/item01.png'
									alt='Залог, превышающий объем займа в 2 раза'
								/>
								<p className={style['advantages__risk-item__text']}>
									Залог, превышающий объем <br /> займа в 2 раза
								</p>
							</li>
							<li className={`${style['advantages__risk-item']} flex items-center gap-3.5`}>
								<img
									src='/src/assets/images/advantages/item02.png'
									alt='Лицензия ЦБ РФ №21-000-1-01096 от 19.03.2024'
								/>
								<p className={style['advantages__risk-item__text']}>
									Лицензия ЦБ РФ <br /> №21-000-1-01096 от 19.03.2024
								</p>
							</li>
							<li className={`${style['advantages__risk-item']} flex items-center gap-3.5`}>
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
					<div
						className={`${style['advantages__estimation']} w-[700px] flex flex-col gap-[clamp(20px,_4vw,_40px)] max-md:w-full max-md:min-h-[400px] max-md:h-auto`}
					>
						<h3 className={style['advantages__estimation__title']}>
							Профессиональная оценка <br /> надежности заемщика
						</h3>
						<ul
							className={`${style['advantages__estimation-items']} max-w-[320px] pl-6 flex flex-col gap-[clamp(15px,_3.5vw,35px)]`}
						>
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
