export interface HomeSections {
    type?: "hero" | "about" | "portfolio" | "contact" | "footer";
    heroImage?: string | null;
    aboutTitle?: string | null;
    aboutDescription?: string | null;
    portfolioImages?: string[];
    contactTitle?: string[];
    contactDescription?: string[];
    footerMediaLinks?: string[];
}

interface ImageObject {
    imageUrl: string;
}

export interface AllProjectsProps {
    name: string;
    description: string,
    location: string,
    portfolioImages: ImageObject[]
}

export interface AllProjectsInt {
    projects: AllProjectsProps[]
}

export interface AllMembersProps{
    fullName: string,
    position: string,
    image: string,
}

export interface AllMembersInt{
    members: AllMembersProps[]
}

export interface SocialMediaInt {
    socialMedia: string,
    mediaUrl: string,
}