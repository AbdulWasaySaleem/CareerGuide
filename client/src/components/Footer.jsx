import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t text-center text-sm text-gray-600 py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
