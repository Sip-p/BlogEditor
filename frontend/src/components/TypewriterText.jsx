import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = () => {
  const texts = ['✍️ Express Ideas', '✨ Inspire Readers', '🚀 Grow Your Voice'];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];
    let charIndex = 0;
    setDisplayedText('');

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(prev => prev + currentText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); // Wait before showing next line
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-9xl font-bold text-center mt-10 bg-red-500"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
};
