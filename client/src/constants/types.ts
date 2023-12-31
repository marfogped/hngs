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
  _id: string;
  name: string;
  description: string;
  location: string;
  client: string;
  year: string;
  portfolioImages: ImageObject[];
}

export interface AllProjectsInt {
  projects: AllProjectsProps[];
}

export interface AllMembersProps {
  fullName: string;
  position: string;
  image: string;
}

export interface AllMembersInt {
  members: AllMembersProps[];
}

export interface SocialMediaInt {
  socialMedia: string;
  mediaUrl: string;
}

export interface ContactBackground {
  type: string;
  background: string;
}

export interface Location {
  type: string[];
}

export interface ContactMethods {
  type: string;
}

export interface ContactSection {
  type: string;
  contactMethods?: string[];
  background?: string;
  location?: string[];
}
