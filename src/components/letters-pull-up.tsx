import { cn } from '../lib/utils/cn';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function LettersPullUp({
  text,
  className = '',
  containerWidth= "full"
}: {
  text: string;
  className?: string;
  containerWidth?:string;
}) {
  const splittedText = text.split('');
 
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={`flex flex-wrap w-${containerWidth}`}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            'font-playfair text-6xl leading-[4rem]',
            className
          )}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}