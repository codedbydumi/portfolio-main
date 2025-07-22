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
    technologies: ['Node.js', 'Python', 'PostgreSQL',  'Firebase'],
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
    technologies: [ 'Exel', 'Plotly', 'Google Sheet', 'Power BI'],
    color: 'text-orange-500'
  },
  {
    title: 'Tools & Platforms',
    icon: Terminal,
    technologies: ['Git', 'Docker', 'Linux / Bash', 'Vercel', 'Jupyter'],
    color: 'text-cyan-500'
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Canva'],
    color: 'text-pink-500'
  }
];

export function TechStack(): JSX.Element {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Simplified background - single gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Reduced floating orbs - only 2 with CSS animations */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-br from-accent/8 to-primary/4 rounded-full blur-2xl animate-float opacity-50" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-secondary/8 to-accent/4 rounded-full blur-2xl animate-float-delayed opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simplified header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm">
              ⚡ Tech Arsenal
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Tech Stack & Tools
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life and solve complex problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Simplified background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Simplified Icon with hover effect */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6 shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Simplified Technologies - removed individual animations */}
                  <div className="space-y-3">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-4 py-2 text-sm bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 mr-2 mb-2 cursor-default backdrop-blur-sm shadow-sm hover:shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simplified decoration - only on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              Always learning and exploring new technologies
            </p>
            
            <div className="inline-flex items-center space-x-3 text-primary font-semibold text-lg">
              <Cpu className="w-6 h-6 animate-spin-slow" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Currently exploring: Web3, Machine Learning, and Cloud Architecture
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}