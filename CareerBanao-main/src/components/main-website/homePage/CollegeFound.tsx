import React from 'react';
import { HashLink } from 'react-router-hash-link';

const CollegeFound: React.FC = () => {
  return (
    <section className="py-16 bg-[#EDEDE9]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Find Your Perfect College
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore a wide range of colleges and choose the one that fits your career goals and aspirations.
        </p>
        <HashLink
          to="/first"
          smooth
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          College Finder
        </HashLink>
      </div>
    </section>
  );
};

export default CollegeFound;
