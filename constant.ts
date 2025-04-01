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
                skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap"],
            },
            {
                icon: "Server",
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
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
            title: "Chat Web (Chatty)",
            description: "A real-time chat app built with MERN stack and Socket.io.",
            image: "/images/chatty.png",
            technologies: ["React", "Node", "Express", "MongoDB", "Socket.io"],
            links: {
                live: "https://chat-app-rq4w.onrender.com/",
                github: "https://github.com/Huzaifa-Khan-Official/Chatty",
            },
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
            title: "Google Soft Skills Program",
            issuer: "Google",
            date: "Dec 2024",
            image: "/images/google-cert.png",
        },
    ],
    contact: {
        email: "huzaifakhanofficial01@gmail.com",
        phone: "+92-3322433615",
        address: "Metroville, Karachi, Pakistan",
    },
    year: new Date().getFullYear(),
};