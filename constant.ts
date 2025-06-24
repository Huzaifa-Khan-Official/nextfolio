import { IProfile } from "./types";

export const profileData: IProfile = {
    hero: {
        name: "Huzaifa Khan",
        title: "MERN Stack Developer",
        subtitle: "Building scalable web applications with modern technologies",
        resume: "https://drive.google.com/file/d/1BBRb3qUzB8_Turnekc7A22OHM85vkKQd/view?usp=sharing",
        social_links: {
            github: "https://github.com/Huzaifa-Khan-Official",
            linkedin: "https://linkedin.com/in/huzaifa-khan-officia",
        },
    },
    about: {
        description: "Passionate MERN Stack Developer with expertise in React, Node.js, and MongoDB. Dedicated to writing clean and scalable code, optimizing application performance, and mentoring aspiring developers.",
        expertise: [
            {
                icon: "Palette",
                title: "Frontend Development",
                skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "Ant Design", "Material UI"],
            },
            {
                icon: "Server",
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "Cloudinary", "ImageKit"],
            },
            {
                icon: "Code2",
                title: "Cloud & DevOps",
                skills: ["Git", "GitHub", "Vercel", "Render", "Netlify", "Firebase"],
            },
        ],
    },
    experiences: [
        {
            title: "Web & App Development Trainer",
            company: "SMIT, Karachi",
            period: "Feb 2025 - Present",
            description: "Conducted training sessions, mentored students, and developed course content.",
            skills: ["Teaching", "Mentorship", "Curriculum Development"],
        },
        {
            title: "Full Stack Developer",
            company: "FoxMindTech",
            period: "Dec 2024 - Feb 2025",
            description: "Designed and developed full-stack applications using MERN stack.",
            skills: ["MERN", "API Integration", "Frontend Development", "Backend Development", "Cloud Deployment"],
        },
        {
            title: "Frontend Intern",
            company: "UxBolt",
            period: "Sep 2024 - Nov 2024",
            description: "Worked on UI development and optimized frontend performance.",
            skills: ["React.js", "Next.js", "TailwindCSS", "Ant Design"],
        },
    ],
    projects: [
        {
            title: "Real Estate Landing Page Template",
            description: "A responsive and elegant HTML landing page template for real estate businesses, built with Bootstrap 5, featuring smooth animations, multiple device mockups, and customizable color themes.",
            images: ["/assets/Real Estate UI Template Mockup.jpeg"],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "AOS", "FontAwesome"],
            links: {
                live: "https://real-estate-ui-template.vercel.app/",
            }
        },
        {
            title: "Blogging Site",
            description: "A feature-rich MERN blogging platform for seamless reading, writing, and management with modern design and smooth performance.",
            images: ["/assets/Blogging Site Mockup.png"],
            technologies: ["MERN", "React.js", "MongoDB", "Express.js", "Node.js", "Zustand", "ImageKit"],
            links: {
                live: "https://blogging-site-official.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/Blogging-Site"
            }
        },
        {
            title: "Animated-Website",
            description: "A fully responsive React project built with GSAP and Tailwind CSS, showcasing smooth animations and modern design.",
            images: ["/assets/Animated Website Mockup.png", "/assets/Animated Website Mobile Devices Mockup.png"],
            technologies: ["React.js", "GSAP", "Tailwind CSS"],
            links: {
                live: "https://gaming-animated-website.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/Animated-Website"
            }
        },
        {
            title: "Chat-App",
            description: "A responsive, interactive chat application built with the MERN stack, featuring real-time messaging via Socket.io and image storage with Cloudinary.",
            images: ["/assets/Chat App Mobile Mockup.png"],
            technologies: ["MERN", "Socket.io", "Cloudinary", "MongoDB", "Express.js", "React.js", "Node.js"],
            links: {
                live: "https://chat-app-rq4w.onrender.com/",
                github: "https://github.com/Huzaifa-Khan-Official/Chat-App"
            }
        },
        {
            title: "RestaurantHub",
            description: "A streamlined restaurant website allowing users to explore restaurants and menus, with secure sign-in for adding items to the cart.",
            images: ["/assets/RestaurantHub Mockup.png"],
            technologies: ["React.js", "Firebase", "Authentication", "Storage"],
            links: {
                live: "https://restauranthub.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/RestaurantHub"
            }
        },
        {
            title: "Agency Website",
            description: "A web agency homepage showcasing services like design, speed optimization, and customization, with client testimonials and an app download CTA.",
            images: ["/assets/Agency Website Mockup.png"],
            technologies: ["React.js", "Next.js", "Framer Motion", "React Bootstrap"],
            links: {
                live: "https://next-agency-web.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/next-agency-web"
            }
        },
        {
            title: "React Portfolio Maker",
            description: "An eye-catching portfolio site built with React, featuring dynamic animations and seamless transitions.",
            images: ["/assets/Reactfolio Mockup.jpg"],
            technologies: ["React.js", "Framer Motion", "React Responsive Carousel", "React Toastify", "React Type Animation"],
            links: {
                live: "https://react-portfolio-maker.vercel.app",
                github: "https://github.com/Huzaifa-Khan-Official/reactfolio"
            }
        },
        {
            title: "Assignment Submission Portal",
            description: "A web-based platform designed for streamlined assignment submissions and management, featuring user authentication and real-time updates.",
            images: ["/assets/Assignment Submission Portal Mockup.png"],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
            links: {
                live: "https://assignment-submission-portal.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/Assignment-Submission-Portal-Frontend"
            }
        },
    ],
    services: [
        {
            title: "Website Development",
            description: "Development of responsive and interactive websites for individuals, businesses, or organizations using HTML5, CSS3, JavaScript, and Bootstrap. Ensures mobile-friendly and optimized performance across all devices.",
            icon: "Globe"
        },
        {
            title: "Frontend Development",
            description: "Specialized in building intuitive user interfaces (UIs) and seamless user experiences (UX) with HTML5, CSS3, JavaScript, and React.js. Delivers fast, responsive single-page applications (SPAs).",
            icon: "Layout"
        },
        {
            title: "Custom Web Applications",
            description: "Creation of custom web applications using React.js with backend technologies like Node.js and Express.js. Integrates Firebase for real-time data, authentication, and hosting.",
            icon: "Code"
        },
        {
            title: "Web Hosting and Deployment",
            description: "Assistance in deploying websites and web applications on platforms like Firebase Hosting, Netlify, or traditional servers. Optimizes performance and ensures secure HTTPS connections.",
            icon: "Server"
        },
        {
            title: "Maintenance and Updates",
            description: "Ongoing maintenance services, including security patches, performance optimizations, and feature updates. Provides backups and uptime monitoring.",
            icon: "Settings"
        },
        {
            title: "Responsive Design Audits",
            description: "Evaluation of existing websites for responsiveness across devices and browsers. Implementation of improvements using CSS3 media queries and modern design principles.",
            icon: "TabletSmartphone"
        },
        {
            title: "API Integrations",
            description: "Integration of third-party APIs (social media, payment gateways, etc.) into web applications using JavaScript and React.js. Ensures secure and efficient data handling.",
            icon: "Link"
        },
        {
            title: "MERN Stack Development",
            description: "Full-stack application development using MongoDB, Express.js, React.js, and Node.js. Builds scalable solutions with secure authentication and database management.",
            icon: "Database"
        },
        {
            title: "Mobile App Development",
            description: "Development of cross-platform mobile apps using React Native or Flutter. Focuses on responsive UI, real-time data, and smooth API integrations.",
            icon: "Smartphone"
        },
        {
            title: "E-commerce Solutions",
            description: "Creation of custom e-commerce platforms with the MERN stack, including secure payments, shopping carts, and order management systems.",
            icon: "ShoppingCart"
        }
    ],
    certificates: [
        {
            title: "Web & Mobile App Development",
            issuer: "S.M.I.T (Saylani Mass I.T Training)",
            date: "February 2025",
            image: "/assets/certificates/Web & App Development SMIT Certificate.png",
        },
        {
            title: 'JavaScript Essentials 1',
            issuer: 'CISCO Networking Academy',
            date: 'November 2024',
            image: '/assets/certificates/JavaScript_Essentials_1.png',
        },
        {
            title: 'JavaScript Essentials 2',
            issuer: 'CISCO Networking Academy',
            date: 'November 2024',
            image: '/assets/certificates/JavaScript_Essentials_2.png',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: 'October 2023',
            image: '/assets/certificates/Responsive Web Design Certificate.png',
        },
        {
            title: 'JavaScript Algorithms and Data Structures (Beta)',
            issuer: 'freeCodeCamp',
            date: 'August 2024',
            image: '/assets/certificates/JavaScript Algorithms and Data Structures (Beta) Certificate.png',
        },
        {
            title: 'Communication & Soft Skils',
            issuer: 'DigiSkills',
            date: 'October 2022',
            image: '/assets/certificates/communication & soft skils certificate.png',
        },
        {
            title: 'Google Soft Skills',
            issuer: 'Google',
            date: 'Descember 2024',
            image: '/assets/certificates/google-soft-skills-program-certificate.png',
        },
        {
            title: 'Python Fundamentals Diploma',
            issuer: 'Alison',
            date: 'February 2023',
            image: '/assets/certificates/Python Fundamentals Diploma Certificate.png',
        },
        {
            title: 'Python Programming Essential',
            issuer: 'CISCO Networking Academy',
            date: 'March 2022',
            image: '/assets/certificates/Python-Programming Essential-certificate.png',
        },
    ],
    contact: {
        email: "huzaifakhanofficial01@gmail.com",
        phone: "+92-3322433615",
        address: "Metroville, Karachi, Pakistan",
    },
    year: new Date().getFullYear(),
};