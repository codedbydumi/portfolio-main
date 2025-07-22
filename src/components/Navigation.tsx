import React, { useState, useEffect, useCallback } from 'react';
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

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/70 backdrop-blur-xl border-b border-border/20 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="relative">
          {/* Simplified gradient overlay only when scrolled */}
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
          )}
          
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Optimized Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/25 hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">DT</span>
                  
                  {/* Simplified sparkle effect */}
                  <div className="absolute -top-1 -right-1 animate-spin-slow">
                    <Sparkles className="w-3 h-3 text-accent/60" />
                  </div>
                </div>
                
                <div className="hidden sm:block">
                  <span className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {/* Portfolio name if needed */}
                  </span>
                </div>
              </Link>

              {/* Optimized Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link key={item.href} to={item.href}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`relative transition-all duration-300 px-4 py-2 rounded-xl backdrop-blur-sm hover:scale-105 ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-lg shadow-primary/20' 
                            : 'hover:bg-white/10 hover:text-primary border border-transparent hover:border-white/20'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>

              {/* Optimized Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="relative hover:bg-white/10 hover:scale-110 transition-all duration-300 rounded-xl group backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-5 h-5 text-amber-500 group-hover:text-amber-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>

                {/* Optimized Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-white/10 hover:scale-110 transition-all duration-300 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20"
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
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Optimized Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMobileMenu}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start transition-all duration-300 rounded-xl backdrop-blur-sm hover:scale-105 hover:translate-x-1 ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-white shadow-lg shadow-primary/20' 
                            : 'hover:bg-white/10 hover:text-primary border border-transparent hover:border-white/20'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </Button>
                    </Link>
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-sm z-30 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}