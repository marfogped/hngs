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
  developer: string;
  architect: string;
  sizeAndCost: string;
  portfolioImages: ImageObject[];
}

export interface AllProjectsInt {
  projects: AllProjectsProps[];
}

export interface MembersProps {
  fullName: string;
  position: string;
  image: string;
}

export interface AllMembersProps {
  _id: string,
  members: MembersProps[]
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
