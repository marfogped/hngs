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

export interface AllProjectsProps {
    name: string;
    description: string,
    location: string,
    portfolioImages: string[]
}

export interface AllProjectsInt {
    projects: AllProjectsProps[]
}

  