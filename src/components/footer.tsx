const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-100 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;