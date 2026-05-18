import { IProfile } from "./types";

export const profileData: IProfile = {
    hero: {
        name: "Huzaifa Khan",
        title: "Full Stack Developer (MERN) & AI/ML Learner",
        subtitle: "Building scalable web applications & exploring intelligent systems",
        resume: "https://drive.google.com/file/d/16po7Y9N10usQ9NCs9l-w6Cp3uUBLoYm-/view?usp=sharing",
        social_links: {
            github: "https://github.com/Huzaifa-Khan-Official",
            linkedin: "https://linkedin.com/in/huzaifa-khan-officia",
        },
    },
    about: {
        description: "Full Stack Developer (MERN) based in Karachi, passionate about building robust, user-focused web applications and exploring AI/ML. Currently working at FoxMind Tech, training 100+ students at SMIT, and pursuing an AI/ML course at IBA CICT — all while completing my BS in Computer Science at UBIT. I write clean, scalable code and love solving real-world problems with technology.",
        expertise: [
            {
                icon: "Palette",
                title: "Frontend Development",
                skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Redux Toolkit", "Ant Design", "Material UI", "Bootstrap", "Framer Motion", "GSAP"],
            },
            {
                icon: "Server",
                title: "Backend & Databases",
                skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Firebase", "Redis", "WebSockets", "Socket.io", "REST APIs", "FastAPI"],
            },
            {
                icon: "Code2",
                title: "DevOps & Cloud",
                skills: ["Docker", "Git", "GitHub", "Vercel", "Netlify", "Render", "Cloudinary", "ImageKit", "Microservices"],
            },
            {
                icon: "Brain",
                title: "AI / ML (Learning)",
                skills: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLP", "Feature Engineering"],
            },
        ],
    },
    experiences: [        
        {
            title: "Web & App Development Trainer",
            company: "SMIT, Karachi",
            period: "Feb 2025 - Present",
            description: "Conducting training sessions on web and mobile app development, helping students build real-world projects. Mentored 100+ students, guiding them to successfully complete and present their applications. Developed structured course materials and interactive exercises.",
            skills: ["Teaching", "Mentorship", "Curriculum Development", "React.js", "Node.js", "React Native"],
        },
        {
            title: "Full Stack Developer",
            company: "FoxMind Tech (Remote)",
            period: "Dec 2024 - April 2026",
            description: "Designing and developing full-stack applications using the MERN stack. Integrating APIs that significantly reduced system lag and improved user experience. Optimizing database queries for quicker data retrieval and deploying applications on cloud platforms ensuring high scalability and minimal downtime.",
            skills: ["MERN Stack", "API Integration", "MongoDB", "React.js", "Node.js", "Cloud Deployment", "Docker"],
        },
        {
            title: "Frontend Intern",
            company: "UxBolt, Karachi",
            period: "Jun 2024 - Sep 2024",
            description: "Built interactive UI components using React.js, Redux, and TailwindCSS, resulting in smoother navigation and quicker load times. Integrated REST APIs for dynamic content updates and assisted in fixing bugs improving overall customer experience.",
            skills: ["React.js", "Redux", "TailwindCSS", "REST APIs", "Ant Design"],
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
            title: "Animated Website",
            description: "A fully responsive React project built with GSAP and Tailwind CSS, showcasing smooth animations and modern design.",
            images: ["/assets/Animated Website Mockup.png", "/assets/Animated Website Mobile Devices Mockup.png"],
            technologies: ["React.js", "GSAP", "Tailwind CSS"],
            links: {
                live: "https://gaming-animated-website.vercel.app/",
                github: "https://github.com/Huzaifa-Khan-Official/Animated-Website"
            }
        },
        {
            title: "Chat App",
            description: "A responsive, interactive real-time chat application built with the MERN stack, featuring real-time messaging via Socket.io and image storage with Cloudinary.",
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
            title: "Full Stack Web Development",
            description: "End-to-end development of scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). From database design to deployment — clean architecture, optimized APIs, and production-ready code.",
            icon: "Code"
        },
        {
            title: "Frontend Development",
            description: "Specialized in building intuitive, pixel-perfect UIs with React.js, Next.js, TypeScript, and TailwindCSS. Delivers fast, responsive single-page and server-side rendered applications.",
            icon: "Layout"
        },
        {
            title: "Backend & API Development",
            description: "Building robust REST APIs and server-side systems with Node.js, Express.js, and FastAPI. Experienced with PostgreSQL, MongoDB, Redis, and Supabase for scalable data architecture.",
            icon: "Server"
        },
        {
            title: "Real-time Applications",
            description: "Development of real-time features using WebSockets and Socket.io — including live chats, notifications, dashboards, and collaborative tools.",
            icon: "Zap"
        },
        {
            title: "Cloud Deployment & DevOps",
            description: "Deploying and managing applications on Vercel, Netlify, Render, and cloud platforms using Docker and CI/CD workflows. Ensuring high availability, scalability, and minimal downtime.",
            icon: "Cloud"
        },
        {
            title: "Website Development",
            description: "Development of responsive and interactive websites for individuals, businesses, or organizations. Ensures mobile-friendly and optimized performance across all devices.",
            icon: "Globe"
        },
        {
            title: "E-commerce Solutions",
            description: "Creation of custom e-commerce platforms with the MERN stack, including secure payments, shopping carts, product management, and order tracking systems.",
            icon: "ShoppingCart"
        },
        {
            title: "API Integrations",
            description: "Integration of third-party APIs (payment gateways, social auth, media storage, etc.) into web applications. Ensures secure, efficient, and well-documented data handling.",
            icon: "Link"
        },
        {
            title: "Mobile App Development",
            description: "Development of cross-platform mobile apps using React Native. Focuses on responsive UI, real-time data, smooth animations, and seamless API integrations.",
            icon: "Smartphone"
        },
        {
            title: "Maintenance & Performance Audits",
            description: "Ongoing maintenance including security patches, performance optimizations, database query tuning, and feature updates. Responsive design audits and accessibility improvements.",
            icon: "Settings"
        }
    ],
    certificates: [
        {
            title: "Web & Mobile App Development",
            issuer: "S.M.I.T (Saylani Mass I.T Training)",
            date: "July 2024",
            image: "/assets/certificates/Web & App Development SMIT Certificate.png",
        },
        {
            title: "JavaScript Essentials 1",
            issuer: "CISCO Networking Academy",
            date: "November 2024",
            image: "/assets/certificates/JavaScript_Essentials_1.png",
        },
        {
            title: "JavaScript Essentials 2",
            issuer: "CISCO Networking Academy",
            date: "November 2024",
            image: "/assets/certificates/JavaScript_Essentials_2.png",
        },
        {
            title: "Google Soft Skills Program",
            issuer: "Google",
            date: "December 2024",
            image: "/assets/certificates/google-soft-skills-program-certificate.png",
        },
        {
            title: "PCAP: Programming Essentials in Python",
            issuer: "CISCO Networking Academy & SMIT",
            date: "March 2022",
            image: "/assets/certificates/Python-Programming Essential-certificate.png",
        },
        {
            title: "Python Fundamentals Diploma",
            issuer: "Alison",
            date: "February 2023",
            image: "/assets/certificates/Python Fundamentals Diploma Certificate.png",
        },
        {
            title: "JavaScript Algorithms and Data Structures (Beta)",
            issuer: "freeCodeCamp",
            date: "August 2024",
            image: "/assets/certificates/JavaScript Algorithms and Data Structures (Beta) Certificate.png",
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "October 2023",
            image: "/assets/certificates/Responsive Web Design Certificate.png",
        },
        {
            title: "Communication & Soft Skills",
            issuer: "DigiSkills",
            date: "October 2022",
            image: "/assets/certificates/communication & soft skils certificate.png",
        },
    ],
    contact: {
        email: "huzaifakhanofficial01@gmail.com",
        phone: "+92-3322433615",
        address: "Karachi, Pakistan",
    },
    year: new Date().getFullYear(),
};