import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export interface IHero {
    name: string;
    title: string;
    subtitle: string;
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

export interface IProfile {
    _id?: mongoose.Types.ObjectId;
    hero: IHero;
    about: IAbout;
    experiences: IExperience[];
    projects: IProject[];
}