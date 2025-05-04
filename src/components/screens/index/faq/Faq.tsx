// HOOKS
import { useFaq } from '@/hooks/useFaq';

// OPTIONS
import { faqItems } from '@/options/faq.option';

// COMPONENTS
import { FaqItem } from './components/FaqItem';

// STYLES
import style from './Faq.module.scss';

export default function Faq() {
	const { activeIndex, descriptionRefs, toggleFaq } = useFaq();

	return (
		<section className={style['faq']}>
			<div className={`${style['faq__container']} container`}>
				<h2 className={style['faq__title']}>Вопрос - Ответ</h2>
				<div className={style['faq__items']}>
					{faqItems.map((item, index) => (
						<FaqItem
							key={index}
							title={item.title}
							description={item.description}
							index={index}
							activeIndex={activeIndex}
							descriptionRef={el => (descriptionRefs.current[index] = el)}
							onToggle={toggleFaq}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
