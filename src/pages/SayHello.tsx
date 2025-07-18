import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Clock, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SayHello = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      // You'll need to set up EmailJS service, template, and public key
      // For now, we'll simulate the form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Uncomment and configure when you set up EmailJS
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
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
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    }
  ];

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
              Say <span className="bg-gradient-primary bg-clip-text text-transparent">Hello</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's start a conversation! Whether you have a project in mind, want to collaborate, 
              or just want to connect, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="gradient-card rounded-2xl p-8 border border-border/20"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send me a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Let's work together"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gradient-card rounded-2xl p-6 border border-border/20"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Available for opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="gradient-card rounded-2xl p-6 border border-border/20"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Follow Me
                </h3>
                
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-3 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300 group ${link.color}`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="gradient-card rounded-2xl p-6 border border-border/20 text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Response
                </h3>
                <p className="text-muted-foreground mb-4">
                  I typically respond within 24 hours
                </p>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-full h-full gradient-primary rounded-full animate-pulse" />
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