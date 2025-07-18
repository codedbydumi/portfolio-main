import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  Palette, 
  Globe, 
  Terminal,
  Cpu,
  BarChart3
} from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'text-blue-500'
  },
  {
    title: 'Backend & Database',
    icon: Database,
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'],
    color: 'text-green-500'
  },
  {
    title: 'Data Science & AI',
    icon: Brain,
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    color: 'text-purple-500'
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    technologies: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
    color: 'text-orange-500'
  },
  {
    title: 'Tools & Platforms',
    icon: Terminal,
    technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Jupyter'],
    color: 'text-cyan-500'
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Canva', 'Framer'],
    color: 'text-pink-500'
  }
];

export function TechStack(): JSX.Element {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm">
              ⚡ Tech Arsenal
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Tech Stack & Tools
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Technologies and tools I use to bring ideas to life and solve complex problems
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Dynamic border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" style={{ padding: '1px' }}>
                  <div className="h-full w-full rounded-3xl bg-background" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6 shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Title with enhanced typography */}
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Enhanced Technologies */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.1) + (techIndex * 0.08),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          x: 5
                        }}
                        className="inline-block"
                      >
                        <span className="inline-block px-4 py-2 text-sm bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 transition-all duration-300 mr-2 mb-2 cursor-default backdrop-blur-sm shadow-sm hover:shadow-md">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10 backdrop-blur-sm"
          >
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              Always learning and exploring new technologies
            </p>
            
            <motion.div 
              className="inline-flex items-center space-x-3 text-primary font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-6 h-6" />
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Currently exploring: Web3, Machine Learning, and Cloud Architecture
              </span>
            </motion.div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-30">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-sm" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}