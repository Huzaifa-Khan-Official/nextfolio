"use client"
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-gray-200 dark:bg-dark-100 py-6">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {year} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;