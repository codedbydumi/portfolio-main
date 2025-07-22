import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'SkillSphere - Personal Learning Management Platform',
    description: 'A comprehensive personal learning management platform with goal tracking, smart notes, blog publishing, and analytics dashboard.',
    image: 'Sk1 (1).png',
    tags: ['Next.js 14', 'React 18' ,'Prisma', 'Tailwind CSS', 'PostgreSQL'],
    isDesktopApp :false,
    demoUrl: 'https://skillsphere.duminduthushan.com/',
    codeUrl: 'https://github.com/codedbydumi/skillsphere',
    
    featured: true
  },
  {
    id: 2,
    title: 'Synex Industries - Salary Management System',
    description: 'Salary Management System with Tkinter GUI & MySQL — built for Synex Industries., it supports secure multi-user access, advanced salary calculations, tax reporting, profit analysis, and employee data management .',
    image: '/image.png',
    isDesktopApp :true,
    tags: ['python', 'mysql', 'Tkinter', 'Cli'],
    downloadUrl: 'https://slguide.netlify.app/',
    codeUrl: 'https://github.com/codedbydumi/synex_salary_management_system',
    
    featured: true
  },
  {
    id: 3,
    title: '🌐 Hyperlocal Community Platforms',
    description: 'The Hyperlocal Community Platform is a PHP-based web application built to connect neighborhoods and foster meaningful local interactions.',
    image: 'hyper.png',
    tags: ['Backend: PHP', 'Database: MySQL', 'Frontend: HTML5, CSS3, Js', 'Host :VPS'],
    isDesktopApp :false,
    demoUrl: 'https://hyperlocal.duminduthushan.com/',
    codeUrl: 'https://github.com/codedbydumi/hyperlocal-community-platform',
    
    featured: false
  }
];

export function ProjectsPreview(): JSX.Element {
  return (
    <section id="projects-preview" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Simplified background - single gradient instead of multiple overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      
      {/* Reduced floating orbs - only 2 with CSS animations */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-secondary/5 to-accent/3 rounded-full blur-2xl animate-float opacity-40" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/3 rounded-full blur-2xl animate-float-delayed opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simplified header animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Featured Work</span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work in data science, web development, and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Optimized Featured Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/90 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
              {/* Simplified glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>FEATURED</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Optimized Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 lg:from-transparent lg:to-background/20" />
                  
                  {/* Simple status indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-center relative">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      {featuredProjects[0].description}
                    </p>
                  </div>

                  {/* Simplified Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Simplified Actions */}
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a 
                      href={featuredProjects[0].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl group">
                        <span className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </Button>
                    </a>
                    
                    <a 
                      href={featuredProjects[0].codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-sm">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Optimized Other Featured Projects */}
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm h-full">
                {/* Simplified background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  {/* Project number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 2}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.isDesktopApp ? (
                      <a 
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="gradient-primary text-white w-full rounded-xl shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
                          <Download className="w-3 h-3 mr-2" />
                          Download
                        </Button>
                      </a>
                    ) : (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="gradient-primary text-white w-full rounded-xl shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                    
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-xl backdrop-blur-sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified View All Projects Button */}
        <div className="text-center">
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg"
              className="relative border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 group transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm overflow-hidden"
            >
              <span className="flex items-center">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}