import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2, User } from 'lucide-react';
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
    featured: true
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
    featured: true
  }
  // Add other posts as needed
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="gradient-primary text-white">
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
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 hover:bg-muted/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[50vh] overflow-hidden mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
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
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/30"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="border-primary/20 hover:bg-primary/5"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:mb-2 prose-li:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-muted prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Developer & Data Scientist</p>
                </div>
              </div>

              <Button
                onClick={handleShare}
                className="gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </footer>
        </motion.div>
      </article>

      {/* Related Posts Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Articles</h2>
            <p className="text-muted-foreground">Discover more insights and tutorials</p>
          </div>
          
          <div className="text-center">
            <Link to="/blog">
              <Button className="gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;