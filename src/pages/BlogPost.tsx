import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2, User, BookOpen, Heart} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Complete blog data - now includes all posts from the Blog component
const blogPosts = [
  {
    slug: 'building-ai-chatbots-with-openai-api',
    title: 'Building Intelligent Chatbots with OpenAI API and React',
    excerpt: 'Learn how to create sophisticated AI-powered chatbots using OpenAI\'s GPT models, React, and modern web technologies for enhanced user experiences.',
    content: `
      <h2>Introduction to AI-Powered Chatbots</h2>
      <p>In today's digital landscape, AI-powered chatbots have become essential tools for businesses to enhance customer experience and automate support. This comprehensive guide will walk you through building intelligent chatbots using OpenAI's powerful GPT models and React.</p>
      
      <h3>Why AI Chatbots Matter</h3>
      <p>AI chatbots powered by large language models like GPT-4 can understand context, maintain conversations, and provide human-like responses. They offer 24/7 availability, instant responses, and can handle multiple conversations simultaneously.</p>
      
      <h3>Setting Up Your Development Environment</h3>
      <p>Before we start building, you'll need to set up your development environment:</p>
      <ul>
        <li><strong>OpenAI API Key:</strong> Sign up at OpenAI and get your API key</li>
        <li><strong>React Application:</strong> Create a new React project using Create React App or Vite</li>
        <li><strong>Required Dependencies:</strong> Install axios for API calls and styled-components for styling</li>
      </ul>
      
      <h3>Building the Chat Interface</h3>
      <p>The chat interface is the heart of your chatbot. We'll create a clean, modern design with message bubbles, typing indicators, and smooth animations. Key components include:</p>
      <ol>
        <li>Message display component with user and bot message styling</li>
        <li>Input field with send button and enter key handling</li>
        <li>Typing indicator for better user experience</li>
        <li>Message history with scroll functionality</li>
      </ol>
      
      <h3>Integrating OpenAI API</h3>
      <p>The integration with OpenAI's API involves setting up secure API calls, handling responses, and managing conversation context. We'll implement features like:</p>
      <ul>
        <li><strong>Context Management:</strong> Maintaining conversation history for coherent responses</li>
        <li><strong>Error Handling:</strong> Graceful handling of API failures and rate limits</li>
        <li><strong>Response Streaming:</strong> Real-time response display for better UX</li>
        <li><strong>Token Management:</strong> Optimizing API usage and costs</li>
      </ul>
      
      <h3>Advanced Features</h3>
      <p>To make your chatbot truly intelligent, consider implementing these advanced features:</p>
      <ul>
        <li>Custom system prompts for specific use cases</li>
        <li>Function calling for external integrations</li>
        <li>Conversation persistence using local storage or databases</li>
        <li>Multi-language support</li>
        <li>Voice input and output capabilities</li>
      </ul>
      
      <h3>Best Practices and Security</h3>
      <p>Security and performance are crucial when building production chatbots. Always implement API key protection, rate limiting, input validation, and proper error handling to ensure a robust application.</p>
      
      <h3>Conclusion</h3>
      <p>Building AI-powered chatbots with OpenAI and React opens up endless possibilities for creating engaging user experiences. With the foundation we've covered, you can now build sophisticated conversational interfaces that truly understand and respond to user needs.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '12 min read',
    category: 'AI',
    tags: ['OpenAI', 'React', 'Chatbots'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=edges',
    featured: true,
   
  },
  {
    slug: 'next-js-14-app-router-complete-guide',
    title: 'Next.js 14 App Router: Complete Guide to Modern React Development',
    excerpt: 'Master the new App Router in Next.js 14 with server components, streaming, and advanced routing patterns for building performant web applications.',
    content: `
      <h2>Introduction to Next.js 14 App Router</h2>
      <p>Next.js 14 introduces significant improvements to the App Router, making it the most powerful and flexible way to build React applications. This comprehensive guide will take you through everything you need to know about building modern web applications with the new App Router architecture.</p>
      
      <h3>Understanding the App Router</h3>
      <p>The App Router represents a fundamental shift in how Next.js applications are structured:</p>
      <ul>
        <li><strong>File-based Routing:</strong> Intuitive folder structure that maps directly to routes</li>
        <li><strong>Layout System:</strong> Shared layouts that persist across route changes</li>
        <li><strong>Server Components:</strong> Default server-side rendering for better performance</li>
        <li><strong>Streaming:</strong> Progressive page loading for improved user experience</li>
      </ul>
      
      <h3>Server Components vs Client Components</h3>
      <p>Understanding when to use Server Components versus Client Components is crucial:</p>
      <ol>
        <li><strong>Server Components (default):</strong> Perfect for data fetching, SEO-critical content, and static elements</li>
        <li><strong>Client Components:</strong> Required for interactivity, browser APIs, and state management</li>
        <li><strong>Composition Patterns:</strong> How to effectively combine both types</li>
        <li><strong>Data Flow:</strong> Passing data between server and client components</li>
      </ol>
      
      <h3>Advanced Routing Patterns</h3>
      <p>The App Router supports sophisticated routing scenarios:</p>
      <ul>
        <li>Dynamic routes with catch-all segments</li>
        <li>Parallel routes for complex layouts</li>
        <li>Intercepting routes for modals and overlays</li>
        <li>Route groups for organization without affecting URL structure</li>
      </ul>
      
      <h3>Data Fetching Strategies</h3>
      <p>Next.js 14 provides multiple approaches to data fetching:</p>
      <ul>
        <li><strong>Server-side Fetching:</strong> Direct database queries in Server Components</li>
        <li><strong>Streaming with Suspense:</strong> Progressive data loading</li>
        <li><strong>Caching Strategies:</strong> Optimizing performance with intelligent caching</li>
        <li><strong>Revalidation:</strong> Keeping data fresh with ISR and on-demand revalidation</li>
      </ul>
      
      <h3>Performance Optimizations</h3>
      <p>Leverage Next.js 14's performance features:</p>
      <ul>
        <li>Automatic code splitting and lazy loading</li>
        <li>Image optimization with the Image component</li>
        <li>Font optimization and custom font loading</li>
        <li>Bundle analysis and optimization techniques</li>
      </ul>
      
      <h3>Deployment and Production</h3>
      <p>Best practices for deploying Next.js 14 applications to production, including Vercel deployment, edge runtime usage, and monitoring strategies.</p>
      
      <h3>Conclusion</h3>
      <p>The Next.js 14 App Router represents the future of React development, offering unprecedented performance and developer experience. Master these concepts to build lightning-fast, scalable web applications.</p>
    `,
    author: 'Dumindu Thushan',
     publishedDate: '2025-07-23',
    readTime: '15 min read',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'App Router'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&crop=edges',
    featured: true,

  },
  {
    slug: 'machine-learning-model-deployment-production',
    title: 'Deploying Machine Learning Models to Production: Best Practices',
    excerpt: 'Comprehensive guide to deploying ML models in production environments, covering containerization, monitoring, and scaling strategies.',
    content: `
      <h2>Introduction to ML Model Deployment</h2>
      <p>Deploying machine learning models to production is often more challenging than building the models themselves. This comprehensive guide covers everything you need to know about taking your ML models from development to production environments successfully.</p>
      
      <h3>Production Readiness Checklist</h3>
      <p>Before deploying any ML model, ensure it meets production standards:</p>
      <ul>
        <li><strong>Model Performance:</strong> Thoroughly validated on diverse datasets</li>
        <li><strong>Reproducibility:</strong> Version controlled models and dependencies</li>
        <li><strong>Error Handling:</strong> Graceful handling of edge cases and failures</li>
        <li><strong>Security:</strong> Input validation and secure API endpoints</li>
      </ul>
      
      <h3>Containerization with Docker</h3>
      <p>Docker containers provide consistency across development and production environments:</p>
      <ol>
        <li>Creating optimized Docker images for ML applications</li>
        <li>Managing dependencies and Python environments</li>
        <li>Multi-stage builds for smaller production images</li>
        <li>Container orchestration with Kubernetes</li>
      </ol>
      
      <h3>API Development and Design</h3>
      <p>Building robust APIs for model serving:</p>
      <ul>
        <li>RESTful API design principles for ML services</li>
        <li>Input validation and data preprocessing</li>
        <li>Batch vs real-time prediction endpoints</li>
        <li>API documentation and versioning strategies</li>
      </ul>
      
      <h3>Model Serving Frameworks</h3>
      <p>Choose the right serving framework for your needs:</p>
      <ul>
        <li><strong>TensorFlow Serving:</strong> High-performance serving for TensorFlow models</li>
        <li><strong>MLflow:</strong> End-to-end ML lifecycle management</li>
        <li><strong>FastAPI:</strong> Modern, fast web framework for building ML APIs</li>
        <li><strong>Seldon Core:</strong> Kubernetes-native ML deployment platform</li>
      </ul>
      
      <h3>Monitoring and Observability</h3>
      <p>Essential monitoring practices for production ML systems:</p>
      <ul>
        <li>Model performance metrics and alerting</li>
        <li>Data drift detection and monitoring</li>
        <li>Infrastructure monitoring and resource usage</li>
        <li>Logging and distributed tracing</li>
      </ul>
      
      <h3>Scaling and Load Management</h3>
      <p>Handling varying loads and scaling requirements:</p>
      <ul>
        <li>Horizontal and vertical scaling strategies</li>
        <li>Load balancing and auto-scaling</li>
        <li>Caching strategies for improved performance</li>
        <li>Handling traffic spikes and failover scenarios</li>
      </ul>
      
      <h3>CI/CD for ML Models</h3>
      <p>Implementing continuous integration and deployment pipelines for ML models, including automated testing, model validation, and deployment strategies.</p>
      
      <h3>Conclusion</h3>
      <p>Successful ML model deployment requires careful consideration of architecture, monitoring, and operational practices. Follow these best practices to ensure your models deliver value in production environments.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '18 min read',
    category: 'Data Science',
    tags: ['Machine Learning', 'MLOps', 'Docker'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop&crop=edges',
    featured: false,
 
  },
  {
    slug: 'modern-web-development-stack-2024',
    title: 'The Modern Web Development Stack: Tools and Technologies for 2024',
    excerpt: 'Explore the latest tools and technologies shaping modern web development, from frameworks to deployment strategies.',
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>The web development landscape continues to evolve at a rapid pace. In 2024, developers have access to an unprecedented array of tools and technologies that make building modern web applications faster, more efficient, and more enjoyable than ever before.</p>
      
      <h3>Frontend Frameworks and Libraries</h3>
      <p>The frontend ecosystem remains vibrant with several excellent choices:</p>
      <ul>
        <li><strong>React 18:</strong> Still the most popular choice with concurrent features and improved performance</li>
        <li><strong>Vue 3:</strong> Composition API and improved TypeScript support</li>
        <li><strong>Svelte/SvelteKit:</strong> Compile-time optimizations and minimal runtime</li>
        <li><strong>Angular 17:</strong> Standalone components and improved developer experience</li>
      </ul>
      
      <h3>Meta-Frameworks for Production</h3>
      <p>Meta-frameworks provide the structure and optimizations needed for production applications:</p>
      <ul>
        <li><strong>Next.js 14:</strong> App Router, Server Components, and edge computing</li>
        <li><strong>Nuxt 3:</strong> Vue-based with auto-imports and hybrid rendering</li>
        <li><strong>Remix:</strong> Web fundamentals focused with excellent data loading</li>
        <li><strong>Astro:</strong> Content-focused with partial hydration</li>
      </ul>
      
      <h3>Styling Solutions</h3>
      <p>Modern CSS and styling approaches offer both power and developer experience:</p>
      <ul>
        <li>Tailwind CSS for utility-first styling</li>
        <li>CSS-in-JS libraries like Styled Components and Emotion</li>
        <li>CSS Modules for scoped styling</li>
        <li>Native CSS features like Container Queries and CSS Grid</li>
      </ul>
      
      <h3>Backend Technologies</h3>
      <p>Full-stack development is easier than ever with modern backend solutions:</p>
      <ul>
        <li><strong>Node.js:</strong> Express, Fastify, and serverless functions</li>
        <li><strong>Edge Runtime:</strong> Vercel Edge Functions and Cloudflare Workers</li>
        <li><strong>Backend-as-a-Service:</strong> Supabase, Firebase, and PlanetScale</li>
        <li><strong>API Technologies:</strong> GraphQL, tRPC, and REST APIs</li>
      </ul>
      
      <h3>Development Tools</h3>
      <p>The tooling ecosystem continues to improve developer productivity:</p>
      <ul>
        <li>Vite for lightning-fast development builds</li>
        <li>TypeScript for type safety and better developer experience</li>
        <li>ESLint and Prettier for code quality</li>
        <li>Playwright and Cypress for testing</li>
      </ul>
      
      <h3>Deployment and Infrastructure</h3>
      <p>Modern deployment strategies focus on simplicity and performance:</p>
      <ul>
        <li>Vercel and Netlify for static and serverless deployments</li>
        <li>Docker containers for consistent environments</li>
        <li>CDN and edge computing for global performance</li>
        <li>Monitoring and analytics for production insights</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>The modern web development stack offers incredible opportunities for building fast, scalable, and maintainable applications. By staying current with these tools and technologies, developers can create exceptional user experiences while maintaining high productivity.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '10 min read',
    category: 'Web Development',
    tags: ['JavaScript', 'React', 'Tools'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=edges',
    featured: false,

  },

  {
    slug: 'deep-learning-tensorflow-python',
    title: 'Deep Learning with TensorFlow: From Basics to Advanced Neural Networks',
    excerpt: 'Master deep learning concepts and build sophisticated neural networks using TensorFlow and Python for real-world applications.',
    content: `
      <h2>Introduction to Deep Learning</h2>
      <p>Deep learning has revolutionized artificial intelligence, enabling breakthroughs in computer vision, natural language processing, and many other domains. This comprehensive guide will take you from the fundamentals to building sophisticated neural networks with TensorFlow.</p>
      
      <h3>Understanding Neural Networks</h3>
      <p>At the heart of deep learning are neural networks - computational models inspired by the human brain:</p>
      <ul>
        <li><strong>Neurons and Layers:</strong> The basic building blocks of neural networks</li>
        <li><strong>Activation Functions:</strong> ReLU, Sigmoid, and Tanh functions</li>
        <li><strong>Forward and Backward Propagation:</strong> How networks learn from data</li>
        <li><strong>Loss Functions:</strong> Measuring and optimizing model performance</li>
      </ul>
      
      <h3>TensorFlow Fundamentals</h3>
      <p>TensorFlow is Google's powerful deep learning framework. We'll cover:</p>
      <ol>
        <li>Setting up TensorFlow and development environment</li>
        <li>Understanding tensors, operations, and computational graphs</li>
        <li>Building your first neural network with Keras</li>
        <li>Training, validation, and testing workflows</li>
      </ol>
      
      <h3>Convolutional Neural Networks (CNNs)</h3>
      <p>CNNs are the backbone of computer vision applications:</p>
      <ul>
        <li>Convolution layers and feature detection</li>
        <li>Pooling layers for dimensionality reduction</li>
        <li>Building image classification models</li>
        <li>Transfer learning with pre-trained models</li>
      </ul>
      
      <h3>Recurrent Neural Networks (RNNs)</h3>
      <p>RNNs excel at sequential data processing:</p>
      <ul>
        <li>LSTM and GRU architectures for long sequences</li>
        <li>Text classification and sentiment analysis</li>
        <li>Time series forecasting</li>
        <li>Sequence-to-sequence models</li>
      </ul>
      
      <h3>Advanced Architectures</h3>
      <p>Explore cutting-edge neural network architectures:</p>
      <ul>
        <li>Transformer models and attention mechanisms</li>
        <li>Generative Adversarial Networks (GANs)</li>
        <li>Autoencoders for dimensionality reduction</li>
        <li>Neural style transfer and creative applications</li>
      </ul>
      
      <h3>Production Deployment</h3>
      <p>Learn how to deploy TensorFlow models in production environments using TensorFlow Serving, TensorFlow Lite for mobile devices, and cloud deployment strategies.</p>
      
      <h3>Conclusion</h3>
      <p>Deep learning with TensorFlow opens up a world of possibilities for solving complex problems. With the foundation covered in this guide, you're well-equipped to tackle real-world AI challenges and build intelligent systems.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '20 min read',
    category: 'AI',
    tags: ['TensorFlow', 'Deep Learning', 'Python'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=edges',
    featured: false,

  },
  {
    slug: 'data-visualization-python-plotly',
    title: 'Interactive Data Visualization with Python and Plotly',
    excerpt: 'Create stunning, interactive data visualizations using Python and Plotly for better data storytelling and analysis.',
    content: `
      <h2>The Power of Interactive Visualization</h2>
      <p>Data visualization is crucial for understanding complex datasets and communicating insights effectively. Plotly, combined with Python, provides powerful tools for creating interactive, publication-quality visualizations that engage audiences and reveal hidden patterns in data.</p>
      
      <h3>Getting Started with Plotly</h3>
      <p>Plotly offers multiple interfaces for creating visualizations in Python:</p>
      <ul>
        <li><strong>Plotly Express:</strong> High-level interface for quick, beautiful charts</li>
        <li><strong>Graph Objects:</strong> Low-level interface for maximum customization</li>
        <li><strong>Plotly Dash:</strong> Framework for building interactive web applications</li>
        <li><strong>Integration:</strong> Seamless integration with Pandas, NumPy, and Jupyter</li>
      </ul>
      
      <h3>Essential Chart Types</h3>
      <p>Master the fundamental visualization types for data exploration:</p>
      <ol>
        <li>Line charts for time series and trends</li>
        <li>Bar charts for categorical comparisons</li>
        <li>Scatter plots for relationships and correlations</li>
        <li>Histograms and box plots for distributions</li>
        <li>Heatmaps for correlation matrices</li>
      </ol>
      
      <h3>Advanced Visualization Techniques</h3>
      <p>Take your visualizations to the next level with advanced features:</p>
      <ul>
        <li><strong>Subplot and Faceting:</strong> Multiple charts in organized layouts</li>
        <li><strong>Animation:</strong> Time-based animations for temporal data</li>
        <li><strong>3D Plotting:</strong> Three-dimensional scatter plots and surfaces</li>
        <li><strong>Geographic Maps:</strong> Choropleth and scatter maps</li>
        <li><strong>Custom Styling:</strong> Themes, colors, and branding</li>
      </ul>
      
      <h3>Interactive Features</h3>
      <p>Plotly's interactivity sets it apart from static visualization libraries:</p>
      <ul>
        <li>Zoom, pan, and hover for data exploration</li>
        <li>Dropdown menus and sliders for parameter control</li>
        <li>Crossfiltering between multiple charts</li>
        <li>Brushing and linking for multi-dimensional analysis</li>
      </ul>
      
      <h3>Dashboard Development with Dash</h3>
      <p>Build complete data applications using Plotly Dash:</p>
      <ul>
        <li>Layout design with HTML and CSS components</li>
        <li>Callback functions for interactivity</li>
        <li>Real-time data updates and streaming</li>
        <li>Deployment strategies for sharing dashboards</li>
      </ul>
      
      <h3>Performance and Optimization</h3>
      <p>Learn best practices for handling large datasets and optimizing visualization performance for smooth user experiences.</p>
      
      <h3>Export and Sharing</h3>
      <p>Discover various ways to share your visualizations, from static images to interactive HTML files and embedded web applications.</p>
      
      <h3>Conclusion</h3>
      <p>Interactive data visualization with Python and Plotly empowers data scientists and analysts to tell compelling stories with their data. Master these techniques to transform raw data into actionable insights.</p>
    `,
    author: 'Dumindu Thushan',
    publishedDate: '2025-07-23',
    readTime: '14 min read',
    category: 'Data Science',
    tags: ['Python', 'Plotly', 'Visualization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=edges',
    featured: false,

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
          
            
          </div>
          <div className="px-3 py-2 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/30 flex items-center space-x-2 text-sm">
            <Heart className="w-4 h-4 text-red-500" />
            
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