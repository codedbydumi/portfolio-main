import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Home, User, Briefcase, PenTool, Mail, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: PenTool },
  { href: '/say-hello', label: 'Say Hello', icon: Mail },
];

export function Navigation(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/70 backdrop-blur-xl border-b border-border/20 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className={`relative transition-all duration-500 ${
          isScrolled
            ? 'bg-transparent'
            : 'bg-transparent'
        }`}>
          {/* Subtle gradient overlay only when scrolled */}
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
          )}
          
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Enhanced Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-lg sm:text-xl">DT</span>
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3 text-accent/60" />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden sm:block"
                >
                  <span className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  
                  </span>
                </motion.div>
              </Link>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Link to={item.href}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant={isActive ? "default" : "ghost"}
                            className={`relative transition-all duration-300 px-4 py-2 rounded-xl backdrop-blur-sm ${
                              isActive 
                                ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-lg shadow-primary/20' 
                                : 'hover:bg-white/10 hover:text-primary border border-transparent hover:border-white/20'
                            }`}
                          >
                            <motion.div
                              animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <item.icon className="w-4 h-4 mr-2" />
                            </motion.div>
                            {item.label}
                            
                            {isActive && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                                style={{ zIndex: -1 }}
                                transition={{ type: "spring", duration: 0.6, stiffness: 300, damping: 30 }}
                              />
                            )}
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="relative hover:bg-white/10 transition-all duration-300 rounded-xl group backdrop-blur-sm border border-transparent hover:border-white/20"
                  >
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Sun className="w-5 h-5 text-amber-500 group-hover:text-amber-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Moon className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>

                {/* Enhanced Mobile Menu Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10 transition-all duration-300 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={isActive ? "default" : "ghost"}
                            className={`w-full justify-start transition-all duration-300 rounded-xl backdrop-blur-sm ${
                              isActive 
                                ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-lg shadow-primary/20' 
                                : 'hover:bg-white/10 hover:text-primary border border-transparent hover:border-white/20'
                            }`}
                          >
                            <motion.div
                              animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <item.icon className="w-4 h-4 mr-3" />
                            </motion.div>
                            {item.label}
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Mobile menu decoration */}
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}