import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
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

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, data science, and technology. 
              Join me on my journey of continuous learning and discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Featured Posts</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative rounded-2xl overflow-hidden gradient-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant">
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full border border-primary/20">
                            Featured
                          </span>
                        </div>

                        {/* Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                            <span className="inline-block px-2 py-1 bg-muted/50 rounded-full border border-border/30">
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

                          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/30"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Button 
                            variant="ghost" 
                            className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
                          >
                            Read More 
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative rounded-2xl overflow-hidden gradient-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="inline-block px-2 py-1 bg-muted/50 rounded-full border border-border/30">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
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
                            className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
                          >
                            Read 
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;