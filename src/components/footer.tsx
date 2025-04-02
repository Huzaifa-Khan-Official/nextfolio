"use client"
import { profileData } from "../../constant";

const Footer = () => {
  const year = Number(profileData.year);
  return (
    <footer className="bg-gray-200 dark:bg-dark-100 py-6">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {year} {profileData.hero.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;