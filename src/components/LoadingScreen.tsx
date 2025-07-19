import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Code2, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentText, setCurrentText] = useState('');
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: initial, 1: typing, 2: complete
  
  const fullText = "Welcome to my digital universe...";
  const loadingSteps = [
    "Initializing portfolio...",
    "Loading projects...",
    "Preparing experiences...",
    "Optimizing design...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Phase 1: Initial animation and progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setPhase(1);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (phase === 1) {
      // Phase 2: Typing animation
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setCurrentText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
          setTimeout(() => setPhase(2), 1000);
        }
      }, 80); // Slower typing for more time

      return () => clearInterval(typingTimer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 2) {
      // Phase 3: Final animation before completion
      setTimeout(() => {
        onComplete();
      }, 2000); // Extra time to admire the design
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.1), hsl(262 83% 58% / 0.1), hsl(189 94% 57% / 0.1))'
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="loading"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Enhanced Logo Animation */}
              <div className="relative mb-12">
                <motion.div 
                  className="relative w-32 h-32 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                      >
                        DT
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Orbiting Elements */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full" />
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Welcome Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
                  Welcome
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {loadingSteps[Math.floor(progress / 20)] || loadingSteps[4]}
                </p>
              </motion.div>

              {/* Enhanced Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </motion.div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm font-mono text-primary font-semibold">
                    {progress}%
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="typing"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Typing Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="text-3xl md:text-4xl text-primary font-mono flex items-center justify-center min-h-[3rem]">
                  <span className="relative">
                    {currentText}
                    <motion.span
                      className="inline-block w-1 h-8 bg-primary ml-2"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </span>
                </div>
              </motion.div>

              {/* Enhanced completion indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-2xl"
                >
                  ✓
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="complete"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              >
                Ready
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground"
              >
                Let's explore together...
              </motion.p>

              {/* Sparkle effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4"
                  style={{
                    left: `${40 + Math.random() * 20}%`,
                    top: `${40 + Math.random() * 20}%`,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    rotate: 360,
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 1,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-full h-full text-accent" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Border Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-4 rounded-3xl opacity-30">
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}