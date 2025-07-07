
import React from 'react';
import { Loader2, Shield } from 'lucide-react';

interface LoadingProps {
  message?: string;
  subMessage?: string;
  isVisible?: boolean;
}

export default function Loading({message,subMessage,isVisible}:LoadingProps){
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-purple-50/80 to-pink-100/80 backdrop-blur-md"></div>
      
      {/* Loading Content */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md mx-4">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-2xl opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 text-center">
          {/* Spinner Container */}
          <div className="mb-6">
            <div className="relative inline-flex items-center justify-center">
              {/* Outer spinning ring */}
              <div className="absolute w-20 h-20 border-4 border-transparent border-t-indigo-500 border-r-purple-500 rounded-full animate-spin"></div>
              
              {/* Inner spinning ring */}
              <div className="absolute w-12 h-12 border-4 border-transparent border-b-purple-500 border-l-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
              
              {/* Center icon */}
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Loading Text */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {message}
          </h3>
          
          <p className="text-gray-600 text-sm font-medium mb-4">
            {subMessage}
          </p>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};