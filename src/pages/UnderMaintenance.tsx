import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Clock, 
  Wrench, 
  Github, 
  ExternalLink,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const UnderMaintenance = (): JSX.Element => {
  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 hover:bg-muted/50 hover:scale-105 hover:-translate-x-1 transition-all duration-300 rounded-2xl px-6 py-3 backdrop-blur-sm border border-border/20 hover:border-primary/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent/6 to-primary/3 rounded-full blur-2xl animate-float opacity-40" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-secondary/6 to-accent/3 rounded-full blur-2xl animate-float-delayed opacity-40" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              Under Maintenance
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              This project is currently being updated and improved. 
              Check back soon for the latest version!
            </p>

            {/* Status Indicators */}
            <div className="flex justify-center items-center space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-amber-500">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">In Progress</span>
              </div>
              <div className="w-2 h-2 bg-primary/30 rounded-full" />
              <div className="flex items-center space-x-2 text-blue-500">
                <Wrench className="w-5 h-5" />
                <span className="text-sm font-medium">Improving</span>
              </div>
            </div>
          </motion.div>

          {/* What's Being Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-8 border border-border/30 backdrop-blur-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 text-amber-500 mr-3" />
              What's Being Updated
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Performance optimizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">UI/UX improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Bug fixes and stability</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-muted-foreground">New features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-muted-foreground">Mobile responsiveness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-muted-foreground">Documentation updates</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alternative Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Meanwhile, you can:
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects">
                <Button className="gradient-primary text-white shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View Other Projects
                </Button>
              </Link>
              
              <a 
                href="https://github.com/codedbydumi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-sm">
                  <Github className="w-4 h-4 mr-2" />
                  Check GitHub
                </Button>
              </a>
              
              <Link to="/say-hello">
                <Button variant="ghost" className="hover:bg-muted/30 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Expected Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Expected completion:</span> Coming Soon
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Follow my GitHub for real-time updates
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UnderMaintenance;