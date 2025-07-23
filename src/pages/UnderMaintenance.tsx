import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings } from 'lucide-react';

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
          <Settings className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          This project is currently being updated. Check back soon!
        </p>

        {/* Back Button */}
        <Link to="/projects">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UnderMaintenance;