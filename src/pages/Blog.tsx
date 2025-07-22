import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Star, Filter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    slug: 'getting-started-with-machine-learning',
    title: 'Getting Started with Machine Learning: A Practical Guide',
    excerpt: 'Dive into the fundamentals of machine learning with practical examples and real-world applications. Learn the essential concepts that every aspiring data scientist should know.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Machine Learning',
    tags: ['Python', 'Data Science', 'Beginner'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=edges',
    featured: true
  },
  {
    slug: 'react-best-practices-2024',
    title: 'React Best Practices for 2024',
    excerpt: 'Explore the latest React patterns, hooks, and performance optimization techniques that will make your applications faster and more maintainable.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2024-01-10',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Performance'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=edges',
    featured: true
  },
  {
    slug: 'data-visualization-with-d3',
    title: 'Creating Interactive Data Visualizations with D3.js',
    excerpt: 'Learn how to create stunning, interactive data visualizations using D3.js. From basic charts to complex interactive dashboards.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2024-01-05',
    readTime: '15 min read',
    category: 'Data Science',
    tags: ['D3.js', 'Visualization', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Large Applications',
    excerpt: 'Discover advanced TypeScript patterns and techniques that will help you build more robust and scalable applications.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2023-12-28',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['TypeScript', 'Patterns', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'ai-ethics-considerations',
    title: 'AI Ethics: Considerations for Modern Developers',
    excerpt: 'Explore the ethical implications of AI development and learn how to build responsible AI systems that benefit society.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2023-12-20',
    readTime: '7 min read',
    category: 'AI & Ethics',
    tags: ['AI', 'Ethics', 'Society'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&h=400&fit=crop&crop=edges',
    featured: false
  },
  {
    slug: 'building-responsive-layouts',
    title: 'Building Responsive Layouts with CSS Grid and Flexbox',
    excerpt: 'Master the art of responsive design using modern CSS layout techniques. Learn when to use Grid vs Flexbox.',
    content: 'Full blog post content would go here...',
    author: 'Dumindu Thushan',
    publishedDate: '2023-12-15',
    readTime: '9 min read',
    category: 'Web Development',
    tags: ['CSS', 'Layout', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=edges',
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