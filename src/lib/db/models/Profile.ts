import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export interface IHero {
    name: string;
    title: string;
    subtitle: string;
    resume: string;
    social_links: {
        github: string;
        linkedin: string;
        email: string;
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
    image: string;
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
    _id?: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId,
    hero: IHero;
    about: IAbout;
    experiences: IExperience[];
    projects: IProject[];
    services: IService[];
    certificates: ICertificate[];
    contact: IContact;
    updatedAt?: Date;
    createdAt?: Date;
}


const profileSchema = new Schema<IProfile>({
    userId: mongoose.Types.ObjectId,
    hero: {
        title: String,
        subtitle: String,
        name: String,
        resume: String,
        social_links: {
            github: String,
            linkedin: String,
            email: String
        },
    },
    about: {
        description: String,
        expertise: {
            icon: String,
            title: String,
            skills: [String]
        }
    },
    experiences: [
        {
            title: String,
            company: String,
            period: String,
            description: String,
            skills: [String]
        }
    ],
    projects: [
        {
            title: String,
            description: String,
            image: String,
            technologies: [String],
            links: {
                live: String,
                github: String
            }
        }
    ],
    services: [
        {
            title: String,
            description: String,
            icon: String
        }
    ],
    certificates: [
        {
            title: String,
            issuer: String,
            date: String,
            image: String,
            credential: String
        }
    ],
    contact: {
        email: String,
        phone: String,
        address: String
    }
}, { timestamps: true });

const Profile = models?.Profile || model<IProfile>("Profile", profileSchema);

export default Profile;