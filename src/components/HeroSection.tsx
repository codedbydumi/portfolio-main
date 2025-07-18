import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/profile-hero.jpg';

export function HeroSection(): JSX.Element {
  const scrollToProjects = (): void => {
    const projectsSection = document.getElementById('projects-preview');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 gradient-hero opacity-20" />
      
      {/* Floating Orbs with Enhanced Effects */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-secondary/15 to-accent/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-float opacity-40 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '3s' }} />
      
      {/* Particle System */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/45 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Greeting with Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  👋
                </motion.div>
                <span className="text-primary font-medium">Hey there!</span>
              </motion.div>
              
              <h1 className="text-hero font-bold text-foreground leading-tight">
                I&apos;m{' '}
                <motion.span 
                  className="relative inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Dumindu
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-accent/60" />
                  </motion.div>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Description with Modern Styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative"
              >
                <div className="flex items-center space-x-4 text-xl text-muted-foreground font-medium">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center space-x-2"
                  >
                    <span>📊</span>
                    <span>Data Science Student</span>
                  </motion.div>
                  
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                  
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <span>💻</span>
                    <span>Full-Stack Developer</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Enhanced Quote with 3D Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                className="relative group"
              >
                <motion.div
                  className="relative p-3 rounded-2xl bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3 border border-primary/10 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: 2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-xl sm:text-2xl"
                    >
                      💬
                    </motion.div>
                    <motion.p 
                      className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-relaxed italic"
                    >
                      "Clean code. Smart design. Real-world solutions."
                    </motion.p>
                  </div>
                  
                  {/* Enhanced underline effect */}
                  <motion.div 
                    className="absolute -bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="relative"
              >
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Building data-driven web and mobile solutions with a focus on clean design, smart development, and real-world impact. Exploring the intersection of AI and full-stack technologies.
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToProjects}
                  className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl overflow-hidden group"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowDown className="w-5 h-5 ml-2" />
                    </motion.div>
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl backdrop-blur-sm"
                >
                  Say Hello
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="hover:bg-muted/30 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex items-center space-x-4 pt-4"
            >
              <span className="text-muted-foreground font-medium">Find me on:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/codedbydumi" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dumindu-thushan/" },
                  { icon: Mail, label: "Email", href: "mailto:duminduthushan9@gmail.com" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 + (index * 0.1) }}
                  >
                    <a 
                      href={social.href}
                      target={social.label === "Email" ? "_self" : "_blank"}
                      rel={social.label === "Email" ? "" : "noopener noreferrer"}
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-12 h-12 rounded-xl hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border/30 hover:border-primary/30 backdrop-blur-sm"
                      >
                        <social.icon className="w-6 h-6" />
                      </Button>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-full blur-3xl opacity-60 scale-110 animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-primary/10 to-secondary/15 rounded-full blur-2xl opacity-40 scale-125 animate-pulse-glow" style={{ animationDelay: '1s' }} />
              
              {/* Image Container with Enhanced Effects */}
              <motion.div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl backdrop-blur-sm"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(var(--primary-rgb, 99, 102, 241), 0.15))',
                  boxShadow: '0 0 60px rgba(var(--primary-rgb, 99, 102, 241), 0.1), inset 0 0 30px rgba(var(--primary-rgb, 99, 102, 241), 0.05)'
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={profileImage}
                  alt="Dumindu Thushan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/10" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full blur-sm opacity-70"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-full blur-sm opacity-70"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Orbiting Elements */}
              <motion.div
                className="absolute top-1/4 -right-4 w-3 h-3 bg-accent/60 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-4 w-2 h-2 bg-primary/60 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center space-y-3 text-muted-foreground group cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToProjects}
        >
          <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-border/30 group-hover:border-primary/50 transition-colors backdrop-blur-sm"
          >
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary transition-colors" />
          </motion.div>
          
          {/* Additional scroll cue animation */}
          <motion.div 
            className="flex flex-col space-y-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-0.5 h-3 bg-gradient-to-b from-primary/60 to-transparent rounded-full mx-auto" />
            <div className="w-0.5 h-2 bg-gradient-to-b from-primary/40 to-transparent rounded-full mx-auto" />
            <div className="w-0.5 h-1 bg-gradient-to-b from-primary/20 to-transparent rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}