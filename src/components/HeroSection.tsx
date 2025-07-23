import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/profile-hero.jpg';

export function HeroSection(): JSX.Element {
  const scrollToProjects = useCallback((): void => {
    const projectsSection = document.getElementById('projects-preview');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Simplified Background - Single gradient instead of multiple overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Reduced floating orbs - Only 2 instead of 3, with CSS animations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-2xl animate-float opacity-40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-accent/5 rounded-full blur-2xl animate-float-delayed opacity-40" />
      
      {/* Removed particle system - was causing unnecessary overhead */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Simplified content animations */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Simplified greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full backdrop-blur-sm">
                <span className="animate-wave">👋</span>
                <span className="text-primary font-medium">Hey there!</span>
              </div>
              
              <h1 className="text-hero font-bold text-foreground leading-tight">
                I&apos;m{' '}
                <span className="relative inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Dumindu
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent/60 animate-spin-slow" />
                </span>
              </h1>
            </div>

            {/* Simplified description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-xl text-muted-foreground font-medium">
                <div className="flex items-center space-x-2">
                  <span>📊</span>
                  <span>Data Science Student</span>
                </div>
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                <div className="flex items-center space-x-2">
                  <span>💻</span>
                  <span>Full-Stack Developer</span>
                </div>
              </div>
              
              {/* Simplified quote with hover effect only */}
              <div className="relative group">
                <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3 border border-primary/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">💬</span>
                    <p className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-relaxed italic">
                      "Clean code. Smart design. Real-world solutions."
                    </p>
                  </div>
                  <div className="absolute -bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-expand" />
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Building data-driven web and mobile solutions with a focus on clean design, smart development, and real-world impact. Exploring the intersection of AI and full-stack technologies.
              </p>
            </div>

            {/* Simplified CTA buttons - removed complex motion animations */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                onClick={scrollToProjects}
                className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl group hover:scale-105"
                size="lg"
              >
                <span className="flex items-center">
                  View Projects
                  <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              <Link to="/say-hello">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl backdrop-blur-sm"
              >
                Say Hello
                <Mail className="w-5 h-5 ml-2" />
              </Button></Link>
{/*               
              <Button
              
                variant="ghost"
                size="lg"
                className="hover:bg-muted/30 hover:scale-105 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button> */}
            </div>

            {/* Simplified social links */}
            <div className="flex items-center space-x-3 sm:space-x-4 pt-6">
              <span className="text-muted-foreground font-medium">Find me on:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/codedbydumi" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dumindu-thushan/" },
                  { icon: Mail, label: "Email", href: "mailto:duminduthushan9@gmail.com" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? "_self" : "_blank"}
                    rel={social.label === "Email" ? "" : "noopener noreferrer"}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-xl hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 border border-border/30 hover:border-primary/30 backdrop-blur-sm"
                    >
                      <social.icon className="w-6 h-6" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Simplified profile image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Single glow effect instead of multiple */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
              
              {/* Simplified image container */}
              <div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={profileImage}
                  alt="Dumindu Thushan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Reduced floating elements - only 2 instead of multiple */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-sm opacity-60 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-full blur-sm opacity-60 animate-float-delayed" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="flex flex-col items-center space-y-3 text-muted-foreground group cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={scrollToProjects}
        >
          <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">Scroll to explore</span>
          <div className="p-2 rounded-full border border-border/30 group-hover:border-primary/50 transition-colors backdrop-blur-sm">
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}