import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-9xl md:text-[12rem] font-bold text-primary/20 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            404
          </motion.h1>
          
          {/* Error Message */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lost in the <span className="bg-gradient-primary bg-clip-text text-transparent">Code?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looks like you've wandered into uncharted territory. Don't worry, even the best 
            developers get lost sometimes. Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button 
                className="gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
              className="border-primary/20 hover:bg-primary/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Fun Dev Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 gradient-card rounded-2xl border border-border/20 max-w-md mx-auto"
          >
            <p className="text-muted-foreground italic">
              "There are only two hard things in Computer Science: cache invalidation and naming things... 
              and apparently, navigation!"
            </p>
            <p className="text-sm text-primary mt-2">- Phil Karlton (sort of)</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
