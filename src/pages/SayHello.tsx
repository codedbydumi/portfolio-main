import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Clock, Github, Linkedin, Mail, Phone, MessageCircle, Zap, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SayHello = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_58ygacc',     // Your EmailJS service ID
    TEMPLATE_ID: 'template_8c1vnl8',   // Your EmailJS template ID
    PUBLIC_KEY: 'KmDluKYEB6Qe-hK0b'    // Your EmailJS public key
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'aziansfreelacning@gmail.com', // Your email address
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Show success state
      setIsSuccess(true);
      
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('EmailJS error:', error);
      
      toast({
        title: "Message failed to send 😞",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/codedbydumi',
      color: 'hover:text-gray-900 dark:hover:text-white',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/dumindu-thushan/',
      color: 'hover:text-blue-500',
      description: 'Professional network'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:aziansfreelacning@gmail.com',
      color: 'hover:text-red-500',
      description: 'Direct contact'
    }
  ];

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
                <MessageCircle className="w-4 h-4" />
                <span>Let's Connect</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              Say <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Hello</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's start a conversation! Whether you have a project in mind, want to collaborate, 
              or just want to connect, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Optimized Contact Content */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Optimized Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-8 sm:p-10 border border-border/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      {isSuccess ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Send className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      {isSuccess ? 'Message Sent!' : 'Send me a message'}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-12 rounded-xl border-2 border-border/30 hover:border-primary/40 focus:border-primary/60 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                          placeholder="John Doe"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-12 rounded-xl border-2 border-border/30 hover:border-primary/40 focus:border-primary/60 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                          placeholder="john@example.com"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full h-12 rounded-xl border-2 border-border/30 hover:border-primary/40 focus:border-primary/60 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                        placeholder="Let's work together"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[140px] rounded-xl border-2 border-border/30 hover:border-primary/40 focus:border-primary/60 transition-all duration-300 bg-background/50 backdrop-blur-sm resize-none"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                        disabled={isLoading}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isLoading || isSuccess}
                      className={`relative w-full h-14 text-white shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden group text-lg font-semibold ${
                        isSuccess 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-green-500/25' 
                          : 'gradient-primary hover:shadow-primary/25'
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : isSuccess ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </span>
                      {!isLoading && !isSuccess && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Optimized Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-6 sm:p-8 border border-border/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Let's Connect
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, text: "Sri Lanka", color: "text-green-500" },
                      { icon: Clock, text: "Available for opportunities", color: "text-blue-500" },
                      { icon: Mail, text: "duminduthushan9@gmail.com", color: "text-red-500", href: "mailto:duminduthushan9@gmail.com" }
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center space-x-3 group"
                      >
                        <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-muted-foreground font-medium">{item.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="relative bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-6 sm:p-8 border border-border/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Follow Me
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 border-border/30 hover:border-primary/40 hover:scale-105 hover:translate-x-1 transition-all duration-300 group bg-background/30 backdrop-blur-sm ${link.color}`}
                      >
                        <div className="flex items-center space-x-3">
                          <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <span className="text-foreground group-hover:text-primary transition-colors font-semibold">
                              {link.name}
                            </span>
                            <p className="text-xs text-muted-foreground">{link.description}</p>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="relative bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl p-6 sm:p-8 border border-border/30 hover:border-primary/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm overflow-hidden group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Quick Response
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 font-medium">
                    I typically respond within 24 hours
                  </p>
                  
                  <div className="relative w-full h-3 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse-slow" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SayHello;