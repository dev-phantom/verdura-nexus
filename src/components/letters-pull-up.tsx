import { cn } from '../lib/utils/cn';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function LettersPullUp({
  text,
  className = '',
  containerWidth = 'full',
}: {
  text: string;
  className?: string;
  containerWidth?: string;
}) {
  // Split the text into words
  const words = text.split(' ');

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
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-flex whitespace-nowrap" // Prevent line breaks within a word
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.div
              key={`${wordIndex}-${letterIndex}`}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? 'animate' : ''}
              custom={wordIndex * 10 + letterIndex} // Unique delay per letter
              className={cn(
                'font-playfair text-6xl leading-[4rem]',
                className
              )}
            >
              {letter}
            </motion.div>
          ))}
          {/* Add a non-breaking space between words */}
          {wordIndex < words.length - 1 && (
            <motion.div
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? 'animate' : ''}
              custom={wordIndex * 10 + word.length} // Unique delay for spaces
              className={cn(
                'font-playfair text-6xl leading-[4rem]',
                className
              )}
            >
              &nbsp;
            </motion.div>
          )}
        </span>
      ))}
    </div>
  );
}
