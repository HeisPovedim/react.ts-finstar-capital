import { useState, useRef } from 'react';

export const useFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    if (activeIndex === index) {
      // Закрываем активный элемент
      if (descriptionRefs.current[index]) {
        const description = descriptionRefs.current[index];
        if (description) {
          description.style.maxHeight = '0px';
          description.style.marginTop = '0px';
        }
      }
      setActiveIndex(null);
    } else {
      // Закрываем предыдущий активный элемент
      if (activeIndex !== null && descriptionRefs.current[activeIndex]) {
        const prevDescription = descriptionRefs.current[activeIndex];
        if (prevDescription) {
          prevDescription.style.maxHeight = '0px';
          prevDescription.style.marginTop = '0px';
        }
      }
      
      // Открываем новый элемент
      if (descriptionRefs.current[index]) {
        const description = descriptionRefs.current[index];
        if (description) {
          description.style.maxHeight = `${description.scrollHeight}px`;
          description.style.marginTop = '18px';
        }
      }
      setActiveIndex(index);
    }
  };

  return {
    activeIndex,
    descriptionRefs,
    toggleFaq
  };
}; 