import React, { useEffect, useState } from 'react';
import { IAbout, ICertificate, IContact, IExperience, IHero, IProject, IService } from '../db/models/Profile';

export interface ProfileData {
    hero: IHero;
    about: IAbout;
    experiences: IExperience[];
    projects: IProject[];
    services: IService[];
    certificates: ICertificate[];
    contact: IContact;
}

const useProfile = () => {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
    }, [])

    return
}

export default useProfile