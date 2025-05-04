// STYLES
import style from '../Faq.module.scss';

interface FaqItemProps {
	title: string;
	description: string;
	index: number;
	activeIndex: number | null;
	descriptionRef: (el: HTMLParagraphElement | null) => void;
	onToggle: (index: number) => void;
}

export const FaqItem = ({ title, description, index, activeIndex, descriptionRef, onToggle }: FaqItemProps) => {
	return (
		<div className={style['faq__item']}>
			<div className={style['faq__item__header']} onClick={() => onToggle(index)}>
				<h3 className={style['faq__item__title']}>{title}</h3>
				<span className={`${style['faq__arrow']} ${activeIndex === index ? style['active'] : ''}`}>❯</span>
			</div>
			<p
				ref={descriptionRef}
				className={style['faq__item__description']}
				style={{
					maxHeight: '0px',
					marginTop: '0px',
				}}
			>
				{description}
			</p>
		</div>
	);
};
