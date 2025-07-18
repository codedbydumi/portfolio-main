import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
    title: 'Personal Finance Tracker',
    description: 'Mobile-responsive web application for tracking personal finances with budget planning and expense categorization.',
    longDescription: 'Developed a personal finance management application with features including expense tracking, budget planning, financial goal setting, and comprehensive reporting. Includes data visualization and trend analysis.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=edges',
    tags: ['React', 'Node.js', 'Chart.js', 'Express', 'JWT'],
    category: 'Web Development',
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
    date: '2023'
  }
];

const categories = ['All', 'Data Science', 'Web Development'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my work spanning data science, web development, and innovative solutions 
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-primary'
                    : 'border-primary/20 hover:bg-primary/5'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden gradient-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full border border-primary/20">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    
                    {/* Category & Date */}
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-block px-2 py-1 text-xs bg-background/80 text-foreground rounded-full border border-border/30">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/30">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/30">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="gradient-primary text-white flex-1 hover:shadow-glow transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary/20 hover:bg-primary/5"
                      >
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}