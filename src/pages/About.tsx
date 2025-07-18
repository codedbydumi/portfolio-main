import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Coffee, Target, Award, BookOpen, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/IMG_4086.jpg';

const skills = [
  { name: 'Data Analysis', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'React/Next.js', level: 88 },
  { name: 'Python', level: 92 },
  { name: 'TypeScript', level: 82 },
  { name: 'SQL/NoSQL', level: 80 },
  { name: 'Data Visualization', level: 87 },
  { name: 'Cloud Platforms', level: 75 }
];

const journey = [
  {
    year: '2025',
    title: 'Data Science Student',
    description: 'Currently pursuing Data Science at university, focusing on advanced analytics, machine learning algorithms, and statistical modeling to solve complex real-world problems.',
    type: 'education'
  },
  {
    year: '2024',
    title: 'Higher National Diploma in Computing & Software Engineering',
    description: 'Completed HND in Computing and Software Engineering offered by Cardiff Metropolitan University at ICBT Campus, specializing in advanced programming and software architecture.',
    type: 'education'
  },
  {
    year: '2023',
    title: 'Self-Directed Projects & Development',
    description: 'Started building personal projects using both code and no-code tools to create innovative programs. Developed web applications, automation scripts, and explored various programming frameworks.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Higher Studies & Programming Foundation',
    description: 'Completed Higher Studies at Christ King College while simultaneously building a strong foundation in programming with Python, JavaScript, and software development principles.',
    type: 'education'
  }
];

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen pt-16">
      {/* Enhanced Hero Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/8 to-primary/5 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-secondary/8 to-accent/5 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    👋 About Me
                  </span>
                </motion.div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span>
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                >
                Hi, I'm Dumindu Thushan — passionate about turning ideas into functional, user-focused digital experiences.

I enjoy blending analytical thinking with creative problem-solving to craft clean, responsive, and scalable applications. Whether it's a simple interface or a full product, I aim to build things that are both beautiful and useful.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                {[
                  { icon: MapPin, text: "Sri Lanka", color: "text-green-500" },
                  { icon: Calendar, text: "Available for opportunities", color: "text-blue-500" },
                  { icon: Coffee, text: "Fueled by coffee and curiosity", color: "text-amber-500" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://drive.google.com/drive/folders/1xXyUafbzqO70ETmZRjbvPFs7tKXMkAB8?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Enhanced glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-3xl blur-3xl opacity-60 scale-110 animate-pulse-glow" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-primary/10 to-secondary/15 rounded-3xl blur-2xl opacity-40 scale-125 animate-pulse-glow" style={{ animationDelay: '1s' }} />
                
                <motion.div 
                  className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl backdrop-blur-sm"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(var(--primary-rgb, 99, 102, 241), 0.15))'
                  }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <img
                    src={profileImage}
                    alt="Dumindu Thushan"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-primary/5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Target className="w-4 h-4" />
                <span>My Journey</span>
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              My Journey
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              From curiosity to code - here's how I've grown as a developer and data scientist
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 rounded-full" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="relative flex items-start space-x-6 sm:space-x-8 group"
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base group-hover:shadow-primary/25 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.year}
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1 bg-gradient-to-br from-background via-background/80 to-muted/20 rounded-3xl p-6 sm:p-8 border border-border/30 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {item.description}
                      </p>
                      <motion.span 
                        className={`inline-block px-3 py-1 text-xs rounded-full font-medium backdrop-blur-sm ${
                          item.type === 'education' 
                            ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                            : item.type === 'work'
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                            : 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.type}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-tr from-primary/8 to-secondary/5 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '3s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
                <Award className="w-4 h-4" />
                <span>Skills & Expertise</span>
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              Skills & Expertise
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of my technical proficiency across different domains
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-background via-background/80 to-muted/20 p-6 rounded-2xl border border-border/30 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold text-lg">{skill.name}</span>
                    <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Personal Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-8 sm:p-12 border border-border/30 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Personal Interests</span>
                </span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-8">
                When I'm Not Coding
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy exploring the cutting-edge world of AI research, 
                  watching insightful tech documentaries that spark new ideas, and occasionally 
                  designing user interfaces in Figma just for the creative satisfaction.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: BookOpen, title: "AI Research", desc: "Exploring latest papers" },
                    { icon: Award, title: "Tech Docs", desc: "Staying updated" },
                    { icon: Palette, title: "UI Design", desc: "Creative experiments" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground italic"
                >
                  I'm always excited to collaborate on innovative projects and connect with fellow 
                  developers and data enthusiasts who share the same passion for technology!
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}