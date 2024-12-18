import type React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Defining the props type for CustomCardComponent
interface CustomCardComponentProps {
  number: number;
  title: string;
  bgColor: string;
  description: string;
}

const CustomCardComponent: React.FC<CustomCardComponentProps> = ({ number, title, bgColor, description }) => {
  // Using the useInView hook to trigger animation when the card enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,    // 50% of the element must be visible
  });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-x-6 sm:space-y-0 ${bgColor} rounded-lg shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, y: 50 }}  // Initial state
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}  // Animate when the card is in view
      transition={{ duration: 0.8 }}
    >
      {/* Left: Number Section */}
      <div className="flex items-center justify-center w-16 h-16 text-3xl font-bold text-white bg-gray-800 rounded-full">
        {number}
      </div>

      {/* Right: Content Section */}
      <div className="text-center sm:text-left">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default CustomCardComponent;
