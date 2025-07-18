import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentText, setCurrentText] = useState('');
  const fullText = "Hey, it's me...";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary animate-pulse-glow" />
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-primary opacity-20 animate-ping" />
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome 
          </motion.h1>
          
          <div className="text-xl md:text-2xl text-primary font-mono h-8 flex items-center justify-center">
            {currentText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}