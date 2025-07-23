import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Star, Filter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Updated blog data with AI, Data Science, Web Development, and Next.js content
const blogPosts = [
  {
    slug: 'building-ai-chatbots-with-openai-api',
    title: 'Building Intelligent Chatbots with OpenAI API and React',
    excerpt: 'Learn how to create sophisticated AI-powered chatbots using OpenAI\'s GPT models, React, and modern web technologies for enhanced user experiences.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '12 min read',
    category: 'AI',
    tags: ['OpenAI', 'React', 'Chatbots'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=edges',
    featured: true
  },
  {
    slug: 'next-js-14-app-router-complete-guide',
    title: 'Next.js 14 App Router: Complete Guide to Modern React Development',
    excerpt: 'Master the new App Router in Next.js 14 with server components, streaming, and advanced routing patterns for building performant web applications.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '15 min read',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'App Router'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=edges',
    featured: true
  },
  {
    slug: 'machine-learning-model-deployment-production',
    title: 'Deploying Machine Learning Models to Production: Best Practices',
    excerpt: 'Comprehensive guide to deploying ML models in production environments, covering containerization, monitoring, and scaling strategies.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '18 min read',
    category: 'Data Science',
    tags: ['Machine Learning', 'MLOps', 'Docker'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'modern-web-development-stack-2024',
    title: 'The Modern Web Development Stack: Tools and Technologies for 2024',
    excerpt: 'Explore the latest tools and technologies shaping modern web development, from frameworks to deployment strategies.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['JavaScript', 'React', 'Tools'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'deep-learning-tensorflow-python',
    title: 'Deep Learning with TensorFlow: From Basics to Advanced Neural Networks',
    excerpt: 'Master deep learning concepts and build sophisticated neural networks using TensorFlow and Python for real-world applications.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '20 min read',
    category: 'AI',
    tags: ['TensorFlow', 'Deep Learning', 'Python'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'data-visualization-python-plotly',
    title: 'Interactive Data Visualization with Python and Plotly',
    excerpt: 'Create stunning, interactive data visualizations using Python and Plotly for better data storytelling and analysis.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '14 min read',
    category: 'Data Science',
    tags: ['Python', 'Plotly', 'Visualization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=edges',
    featured: false
  }
];

const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

const Blog = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Optimized Hero Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
        
        {/* Reduced floating orbs - only 2 with CSS animations */}
        <div className="absolute top-20 right-10 w-60 h-60 bg-gradient-to-br from-accent/6 to-primary/3 rounded-full blur-2xl animate-float opacity-40" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-secondary/6 to-accent/3 rounded-full blur-2xl animate-float-delayed opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Latest Insights</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              My <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thoughts, tutorials, and insights about web development, data science, and technology. 
              Join me on my journey of continuous learning and discovery.
            </p>
          </motion.div>

          {/* Optimized Category Filter - removed complex animations */}
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

      {/* Optimized Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Featured Posts
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    className="group relative"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                        {/* Simplified background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Featured Badge - static, no animation */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
                            <Zap className="w-3 h-3" />
                            <span>FEATURED</span>
                          </div>
                        </div>

                        {/* Optimized Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 relative z-10">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-muted/60 to-muted/40 rounded-xl border border-border/40 font-medium hover:scale-105 transition-transform duration-300">
                              {post.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                            {post.excerpt}
                          </p>

                          {/* Simplified Tags - no individual animations */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1 text-xs bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Button 
                            variant="ghost" 
                            className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:scale-105 transition-all duration-300 group text-base"
                          >
                            Read More 
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Optimized All Posts */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
                {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="group relative"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-background/80 to-muted/20 border border-border/30 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                      {/* Simplified background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                        
                        {/* Article number indicator */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold backdrop-blur-sm border border-primary/20">
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative z-10">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-muted/60 to-muted/40 rounded-xl border border-border/40 font-medium hover:scale-105 transition-transform duration-300">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:scale-105 transition-all duration-300 group"
                          >
                            Read 
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="relative inline-block p-8 bg-gradient-to-br from-background via-background/80 to-muted/20 rounded-3xl border border-border/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
                    <p className="text-muted-foreground">
                      No posts found in the "{selectedCategory}" category.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;