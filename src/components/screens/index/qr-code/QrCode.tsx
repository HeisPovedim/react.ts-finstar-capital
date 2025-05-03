// COMPONENTS
import Button from '@components/ui/button/Button';

// STYLES
import style from './QrCode.module.scss';

export default function QrCode() {
	return (
		<section className={style['qr']}>
			<div className={`${style['container']} container`}>
				<div className={style['qr__img']}>
					<picture className={style['qr__img-picture']}>
						<source srcSet='/src/assets/images/qr-code/qr-code-m.png' media='(max-width: 767px)' />
						<img src='/src/assets/images/qr-code/qr-code.png' alt='QR-код' />
					</picture>
				</div>
				<div className={style['qr__content']}>
					<h3 className={`${style['qr__title']}`}>Хотите узнать больше?</h3>
					<p className={`${style['qr__description']}`}>
						Для того, чтобы более подробно ознакомиться с предложением (финансовый план, расчёт вашей
						доходности и договор с гарантиями) - напишите в WhatsApp или отсканируйте QR-код.
					</p>
					<div className={style['qr__buttons']}>
						<Button variant='blue' className={`${style['qr__button']} hidden`}>
							Контакты
						</Button>
						<Button variant='green' className={style['qr__button']}>
							Инвестировать
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
