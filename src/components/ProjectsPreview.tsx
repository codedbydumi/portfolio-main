import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Data Analytics Dashboard',
    description: 'A comprehensive dashboard for visualizing complex datasets with machine learning insights and real-time data processing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=edges',
    tags: ['Python', 'React', 'TensorFlow', 'D3.js'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Srilankas Guide',
    description: '🌴 A tourism and educational website about Sri Lanka built with Joomla made 2022, featuring travel guides, historical insights, religious diversity, and more. Hosted via Netlify.',
    image: '/sl.guide.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://slguide.netlify.app/',
    codeUrl: 'https://github.com/codedbydumi/Srilankas_Guide',
    featured: true
  },
  {
    id: 3,
    title: 'Predictive Model for Stock Analysis',
    description: 'Machine learning model that predicts stock trends using historical data and market indicators.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=edges',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false
  }
];

export function ProjectsPreview(): JSX.Element {
  return (
    <section id="projects-preview" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-accent/8 to-primary/5 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Featured Work</span>
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Featured Projects
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my latest work in data science, web development, and innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Enhanced Featured Project 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/90 to-muted/20 border border-border/30 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1"
                >
                  <Zap className="w-3 h-3" />
                  <span>FEATURED</span>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Enhanced Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 lg:from-transparent lg:to-background/30" />
                  
                  {/* Overlay elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" />
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-center relative">
                  <div className="mb-6">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {featuredProjects[0].title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      {featuredProjects[0].description}
                    </p>
                  </div>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[0].tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={featuredProjects[0].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 transition-all duration-300 px-6 py-3 rounded-2xl overflow-hidden group/btn">
                          <span className="relative z-10 flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        </Button>
                      </a>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={featuredProjects[0].codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-sm">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Other Featured Projects */}
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm h-full">
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Enhanced Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Project number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 2}
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (tagIndex * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gradient-primary text-white w-full rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Demo
                        </Button>
                      </a>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-xl backdrop-blur-sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="relative border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View All Projects
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </span>
                
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}