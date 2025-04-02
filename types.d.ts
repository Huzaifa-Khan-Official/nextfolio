export interface IHero {
    name: string;
    title: string;
    subtitle: string;
    resume: string;
    social_links: {
        github: string;
        linkedin: string;
    },
}

export interface IExpertiseSection {
    icon: string;
    title: string;
    skills: string[];
}

export interface IAbout {
    _id?: mongoose.Types.ObjectId;
    description: string;
    expertise: IExpertiseSection[];
}

export interface IExperience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export interface IProject {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    links: {
        live: string;
        github: string;
    };
}

export interface IService {
    title: string;
    description: string;
    icon: string;
}

export interface ICertificate {
    title: string;
    issuer: string;
    date: string;
    image: string;
    credential?: string;
}

export interface IContact {
    email: string;
    phone: string;
    address: string;
}

export interface IProfile {
    hero: IHero;
    about: IAbout;
    experiences: IExperience[];
    projects: IProject[];
    services: IService[];
    certificates: ICertificate[];
    contact: IContact;
    year: Number;
}