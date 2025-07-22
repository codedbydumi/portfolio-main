import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Zap, Calendar, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Data Analytics Dashboard',
    description: 'A comprehensive dashboard for visualizing complex datasets with machine learning insights and real-time data processing capabilities.',
    longDescription: 'Built a full-stack analytics platform that processes large datasets in real-time, applies machine learning algorithms for predictive insights, and presents data through interactive visualizations. Features include automated report generation, anomaly detection, and customizable dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=edges',
    tags: ['Python', 'React', 'TensorFlow', 'D3.js', 'PostgreSQL'],
    category: 'Data Science',
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    date: '2024'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, payment integration, and comprehensive inventory management system.',
    longDescription: 'Developed a complete e-commerce platform with features including user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. Implemented advanced search and filtering capabilities.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=edges',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    category: 'Web Development',
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
    date: '2024'
  },
  {
    id: 3,
    title: 'Predictive Model for Stock Analysis',
    description: 'Machine learning model that predicts stock trends using historical data and market indicators with high accuracy.',
    longDescription: 'Created a sophisticated stock prediction system using multiple ML algorithms including LSTM networks, Random Forest, and regression models. Integrated real-time data feeds and technical indicators for comprehensive market analysis.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=edges',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'LSTM'],
    category: 'Data Science',
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
    date: '2023'
  },
  {
    id: 4,
    title: 'Task Management Application',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
    longDescription: 'Built a comprehensive project management application with features like task assignment, progress tracking, team collaboration, file sharing, and real-time notifications. Includes kanban boards, calendar views, and reporting features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=edges',
    tags: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
    category: 'Web Development',
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
    date: '2023'
  },
  {
    id: 5,
    title: 'Customer Segmentation Analysis',
    description: 'Advanced customer segmentation using clustering algorithms to identify distinct customer groups and behaviors.',
    longDescription: 'Performed comprehensive customer segmentation analysis using K-means clustering, RFM analysis, and behavioral segmentation. Created automated reporting system with actionable insights for marketing strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=edges',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    category: 'Data Science',
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
    date: '2023'
  },
  {
    id: 6,
    title: 'Srilankas Guide',
    description: '🌴 A tourism and educational website about Sri Lanka built with Joomla made 2022, featuring travel guides, historical insights, religious diversity, and more. Hosted via Netlify.',
    image: '/sl.guide.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    demoUrl: 'https://slguide.netlify.app/',
    codeUrl: 'https://github.com/codedbydumi/Srilankas_Guide',
    featured: true,
    date: '2022'
  }
];

const categories = ['All', 'Data Science', 'Web Development'];

export default function Projects(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Optimized Hero Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
        
        {/* Reduced floating orbs - only 2 with CSS animations */}
        <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-br from-primary/6 to-secondary/3 rounded-full blur-2xl animate-float opacity-40" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-secondary/6 to-accent/3 rounded-full blur-2xl animate-float-delayed opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
                <Code2 className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              My <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of my work spanning data science, web development, and innovative solutions 
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Optimized Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`relative transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-sm hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                    : 'border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-primary'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Optimized Projects Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                  {/* Simplified background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge - static, no animation */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
                        <Zap className="w-3 h-3" />
                        <span>FEATURED</span>
                      </div>
                    </div>
                  )}

                  {/* Optimized Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    
                    {/* Date indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-1 px-3 py-1 bg-background/90 text-foreground rounded-full border border-border/30 backdrop-blur-sm text-xs font-medium">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    {/* Category */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Simplified Tags - no individual animations */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 text-xs bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 cursor-default backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          size="sm" 
                          className="relative gradient-primary text-white w-full rounded-xl shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 overflow-hidden group"
                        >
                          <span className="flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Button>
                      </a>
                      
                      <a 
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-xl backdrop-blur-sm"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Project number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold backdrop-blur-sm border border-primary/20">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="relative inline-block p-8 bg-gradient-to-br from-background via-background/80 to-muted/20 rounded-3xl border border-border/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                  <p className="text-muted-foreground">
                    No projects found in the "{selectedCategory}" category.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}