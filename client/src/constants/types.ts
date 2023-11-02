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