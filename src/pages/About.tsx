import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/profile-hero.jpg';

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
    year: '2024',
    title: 'Data Science Student',
    description: 'Currently pursuing advanced studies in Data Science, focusing on machine learning and statistical analysis.',
    type: 'education'
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    description: 'Started working on modern web applications using React, TypeScript, and advanced UI frameworks.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Programming Foundation',
    description: 'Built strong foundation in programming with Python, JavaScript, and software development principles.',
    type: 'education'
  },
  {
    year: '2021',
    title: 'Tech Enthusiast',
    description: 'Discovered passion for technology and began learning programming through online courses and projects.',
    type: 'personal'
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate data science student and full-stack developer who loves turning 
                  complex data into actionable insights and building beautiful, functional applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span>Fueled by coffee and curiosity</span>
                </div>
              </div>

              <Button className="gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-110" />
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-elegant">
                  <img
                    src={profileImage}
                    alt="Dumindu Thushan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From curiosity to code - here's how I've grown as a developer and data scientist
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-primary">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 gradient-card rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                      item.type === 'education' 
                        ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                        : item.type === 'work'
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical proficiency across different domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-0 h-full gradient-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gradient-card rounded-2xl p-8 border border-border/20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Beyond the Code
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When I'm not coding or analyzing data, you'll find me exploring new technologies, 
              contributing to open-source projects, or diving into the latest research papers in 
              machine learning. I believe in continuous learning and love sharing knowledge with 
              the developer community.
            </p>
            <p className="text-muted-foreground">
              I'm always excited to collaborate on interesting projects and connect with fellow 
              developers and data enthusiasts!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}