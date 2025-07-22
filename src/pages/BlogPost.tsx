import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2, User, BookOpen, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    slug: 'getting-started-with-machine-learning',
    title: 'Getting Started with Machine Learning: A Practical Guide',
    excerpt: 'Dive into the fundamentals of machine learning with practical examples and real-world applications.',
    content: `
      <h2>Introduction to Machine Learning</h2>
      <p>Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed. In this comprehensive guide, we'll explore the fundamental concepts and practical applications of machine learning.</p>
      
      <h3>What is Machine Learning?</h3>
      <p>At its core, machine learning is about finding patterns in data and using those patterns to make predictions or decisions. Unlike traditional programming where we write specific instructions, machine learning algorithms learn from data.</p>
      
      <h3>Types of Machine Learning</h3>
      <p>There are three main types of machine learning:</p>
      <ul>
        <li><strong>Supervised Learning:</strong> Learning with labeled examples</li>
        <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
        <li><strong>Reinforcement Learning:</strong> Learning through interaction and feedback</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To begin your machine learning journey, you'll need to understand these key concepts:</p>
      <ol>
        <li>Data preprocessing and cleaning</li>
        <li>Feature selection and engineering</li>
        <li>Model selection and training</li>
        <li>Evaluation and validation</li>
      </ol>
      
      <h3>Popular Libraries and Tools</h3>
      <p>Python has become the go-to language for machine learning, with powerful libraries like:</p>
      <ul>
        <li><strong>Scikit-learn:</strong> Great for beginners and classical ML algorithms</li>
        <li><strong>TensorFlow:</strong> Google's deep learning framework</li>
        <li><strong>PyTorch:</strong> Facebook's flexible deep learning library</li>
        <li><strong>Pandas:</strong> Essential for data manipulation</li>
        <li><strong>NumPy:</strong> Fundamental package for numerical computing</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Machine learning is a powerful tool that's transforming industries across the globe. By starting with the fundamentals and gradually building your skills, you can unlock the potential of this exciting field. Remember, the key to success in machine learning is practice, experimentation, and continuous learning.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Machine Learning',
    tags: ['Python', 'Data Science', 'Beginner'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop&crop=edges',
    featured: true,
    views: '2.4k',
    likes: '156'
  },
  {
    slug: 'react-best-practices-2024',
    title: 'React Best Practices for 2024',
    excerpt: 'Explore the latest React patterns, hooks, and performance optimization techniques.',
    content: `
      <h2>Modern React Development</h2>
      <p>React continues to evolve, and with it, the best practices for building efficient, maintainable applications. In this guide, we'll explore the latest patterns and techniques that will make your React code better in 2024.</p>
      
      <h3>Component Composition</h3>
      <p>One of the most powerful patterns in React is component composition. Instead of building monolithic components, break them down into smaller, reusable pieces.</p>
      
      <h3>Custom Hooks</h3>
      <p>Custom hooks are a game-changer for sharing logic between components. They help keep your components clean and focused on rendering.</p>
      
      <h3>Performance Optimization</h3>
      <p>Modern React applications need to be fast and responsive. Here are key optimization techniques:</p>
      <ul>
        <li>Use React.memo for component memoization</li>
        <li>Implement useMemo and useCallback wisely</li>
        <li>Lazy load components with React.lazy</li>
        <li>Optimize bundle size with code splitting</li>
      </ul>
      
      <h3>State Management</h3>
      <p>Choose the right state management solution for your needs. Not every app needs Redux - sometimes useState and useContext are sufficient.</p>
      
      <h3>Testing</h3>
      <p>Write tests that give you confidence in your code. Focus on testing behavior, not implementation details.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2024-01-10',
    readTime: '12 min read',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Performance'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop&crop=edges',
    featured: true,
    views: '3.1k',
    likes: '203'
  }
];

const BlogPost = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center p-8 bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl border border-border/30 backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="gradient-primary text-white shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Blog post link has been copied to clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Optimized Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-muted/50 hover:scale-105 hover:-translate-x-1 transition-all duration-300 rounded-2xl px-6 py-3 backdrop-blur-sm border border-border/20 hover:border-primary/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Optimized Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[60vh] overflow-hidden mb-12"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Simplified floating stats */}
        <div className="absolute bottom-6 right-6 flex space-x-3">
          <div className="px-3 py-2 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/30 flex items-center space-x-2 text-sm">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">{post.views}</span>
          </div>
          <div className="px-3 py-2 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/30 flex items-center space-x-2 text-sm">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-foreground font-medium">{post.likes}</span>
          </div>
        </div>
      </motion.div>

      {/* Optimized Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Simplified Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-2xl border border-primary/20 font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                {post.category}
              </span>
              
              {[
                { icon: Calendar, text: new Date(post.publishedDate).toLocaleDateString() },
                { icon: Clock, text: post.readTime },
                { icon: User, text: post.author }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-2 bg-background/50 rounded-xl border border-border/20 backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-2 text-sm bg-gradient-to-r from-muted/60 to-muted/40 text-muted-foreground rounded-xl border border-border/40 hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    <Tag className="w-3 h-3 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                onClick={handleShare}
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-2xl px-6 py-3 backdrop-blur-sm"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Simplified Article Body */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2 rounded-3xl" />
            <div className="relative p-8 sm:p-12 bg-gradient-to-br from-background/80 via-background/90 to-muted/10 rounded-3xl border border-border/20 backdrop-blur-sm">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-foreground prose-h2:to-primary prose-h2:bg-clip-text prose-h2:text-transparent
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:mb-3 prose-li:leading-relaxed prose-li:text-lg
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-code:text-primary prose-code:bg-muted/50 prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/30 prose-pre:rounded-2xl prose-pre:p-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Simplified Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border/30">
            <div className="relative p-8 bg-gradient-to-br from-background via-background/90 to-muted/20 rounded-3xl border border-border/30 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{post.author}</p>
                    <p className="text-muted-foreground">Developer & Data Scientist</p>
                    <p className="text-sm text-muted-foreground">Passionate about code and data</p>
                  </div>
                </div>

                <Button
                  onClick={handleShare}
                  className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden group"
                >
                  <span className="flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Article
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </div>
            </div>
          </footer>
        </motion.div>
      </article>

      {/* Optimized Related Posts Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
        
        {/* Simplified floating orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-accent/6 to-primary/3 rounded-full blur-2xl animate-float opacity-40" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-secondary/6 to-accent/3 rounded-full blur-2xl animate-float-delayed opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium backdrop-blur-sm flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Continue Reading</span>
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-4">
              More Articles
            </h2>
            <p className="text-muted-foreground text-lg">Discover more insights and tutorials</p>
          </div>
          
          <div className="text-center">
            <Link to="/blog">
              <Button className="relative gradient-primary text-white shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden group">
                <span className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Posts
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;