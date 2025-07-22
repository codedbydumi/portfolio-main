import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Code2, Zap, X } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: loading, 1: complete
  const [canSkip, setCanSkip] = useState(false);
  
  const loadingMessages = [
    "Welcome...",
    "Loading projects...",
    "Almost ready...",
    "Ready!"
  ];

  const getCurrentMessage = () => {
    const index = Math.floor(progress / 25);
    return loadingMessages[Math.min(index, loadingMessages.length - 1)];
  };

  useEffect(() => {
    // Allow skipping after 1 second
    const skipTimer = setTimeout(() => setCanSkip(true), 1000);
    
    // Faster progress - complete in 3 seconds total
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setPhase(1);
          // Auto-complete after 1 more second
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return prev + 2; // Faster increment
      });
    }, 60); // 3 seconds total

    return () => {
      clearTimeout(skipTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setPhase(1);
    setTimeout(() => onComplete(), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background"
    >
      {/* Simplified Background Effects - Only 2 orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/15 to-secondary/8 rounded-full blur-2xl animate-pulse-slow opacity-60" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-accent/8 rounded-full blur-2xl animate-pulse-slow opacity-60" />

      {/* Skip Button */}
      <AnimatePresence>
        {canSkip && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 p-3 rounded-full bg-background/80 border border-border/30 hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm group z-20"
          >
            <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="loading"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Simplified Logo */}
              <div className="relative mb-8">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        DT
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Simple orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full" />
                  </div>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {getCurrentMessage()}
                </h1>
              </div>

              {/* Simplified Progress Bar */}
              <div className="relative w-full max-w-xs mx-auto">
                <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs text-muted-foreground font-mono">
                    {progress}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="complete"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ready!
              </div>
              
              <p className="text-lg text-muted-foreground">
                Welcome to my portfolio
              </p>

              {/* Simple sparkle effect */}
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${-10 + i * 5}px`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: -20
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}