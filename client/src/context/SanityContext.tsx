import React, { useState, ReactNode, useEffect } from "react";
import { client } from "../api/sanityClient";
import { HomeSections, AllProjectsProps, AllMembersProps, SocialMediaInt } from "../constants/types";

interface SectionData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface SanityContextProps {
  homeSection: SectionData[];
  workSection: SectionData[];
  officeSection: SectionData[];
  allProjects: AllProjectsProps[];
  currentProject: AllProjectsProps;
  allMembers: AllMembersProps[];
  socialMedia: SocialMediaInt[];
  getProjectByName: (arg0: string | undefined) => Promise<void>;
  setCurrentProject: (arg: AllProjectsProps) => void;
  getAllProjects: () => Promise<void>;
  getAllMembers: () => Promise<void>;
  getWorkPage: () => Promise<void>;
  getOfficePage: () => Promise<void>;
  getSocialMedia: () => Promise<void>;
  getHomePage: () => Promise<HomeSections[]>;
  isLoading: boolean;
  fetchError: boolean;
}

interface SanityProviderProps {
  children: ReactNode;
}

export const SanityContext = React.createContext<SanityContextProps | null>(
  null
);

export const SanityProvider = ({ children }: SanityProviderProps) => {
  const [homeSection, setHomeSection] = useState<HomeSections[]>([]);
  const [workSection, setWorkSection] = useState([]);
  const [officeSection, setOfficeSection] = useState([]);
  const [allProjects, setAllProjects] = useState([])
  const [allMembers, setAllMembers] = useState([])
  const [socialMedia, setSocialMedia] = useState([])
  const [currentProject, setCurrentProject] = useState<AllProjectsProps>({_id: '', client: '', year: '', name: '', description: '', location: '', portfolioImages: []})

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<boolean>(false);

  const getHomePage = async () => {
    try {
      const homeQuery = `*[_type == 'hngsHome']{
        ...,
        "portfolio": portfolio[]->{
          "_id": _id,
          name, 
          description,
          location,
          "portfolioImages": portfolioImages[]{
            "imageUrl": asset->url
          },
        },
        'heroImage': heroImage.asset->url
      } | order(orderRank)`;
      const homeResult = await client.fetch(homeQuery);
      if (homeResult) setHomeSection(homeResult);
      setIsLoading(false);

      return homeResult
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getHomePage();
    getSocialMedia();
  }, [])
  

  const getAllProjects = async () => {
    setIsLoading(true);
    try {
      const projectsQuery = `*[_type == 'hngsProjects']{
        ...,
        "_id": _id,
        "portfolioImages": portfolioImages[]{
           "imageUrl": asset->url
        },
       }| order(orderRank)`;
      const projectsResult = await client.fetch(projectsQuery);
      if(projectsResult) setAllProjects(projectsResult);

      setIsLoading(false);
      console.log(projectsResult)
      return projectsResult;
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error)
    }
  }

  const getProjectByName = async (projectName: string | undefined) => {
    setIsLoading(true);
    try {
      const projectsQuery = `*[_type == 'hngsProjects']{
        ...,
        "portfolioImages": portfolioImages[]{
           "imageUrl": asset->url
        },
       } | order(orderRank)`;
      const projectResult = await client.fetch(projectsQuery);
      
      const filteredProject = projectResult.find(
       (project: AllProjectsProps) => project.name.toLowerCase() === projectName?.toLowerCase()
      );
      
      if (filteredProject) {
        setCurrentProject(filteredProject);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error);
    }
  };

  const getAllMembers = async () => {
    setIsLoading(true);
    try {
      const membersQuery = `*[_type == 'hngsMembers']{
        ...,
        "image": image.asset->url
      } | order(orderRank)`;
      const membersResult = await client.fetch(membersQuery);
      if(membersResult) setAllMembers(membersResult);
      
      setIsLoading(false);
      return membersResult;
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error)
    }
  }
  
  const getSocialMedia = async () => {
    try {
      const socialMediaQuery = `*[_type == 'hngsSocialMedia'] | order(orderRank)`;
      const socialMediaResult = await client.fetch(socialMediaQuery);
      if(socialMediaResult) setSocialMedia(socialMediaResult);
      
    } catch (error) {
      console.log(error)
    }
  }

  const getWorkPage = async () => {
    setIsLoading(true);
    try {
      const workQuery = `*[_type == 'hngsWork']{
        ...,
        'heroImage': heroImage.asset->url
      } | order(orderRank)`;
      const workResult = await client.fetch(workQuery);
      if (workResult) setWorkSection(workResult);
      setIsLoading(false);

      return workResult;
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error)
    }
  }

  const getOfficePage = async () => {
    setIsLoading(true);
    try {
      const officeQuery = `*[_type == 'hngsOffice']{
        ...,
        'heroImage': heroImage.asset->url
      } | order(orderRank)`;
      const officeResult = await client.fetch(officeQuery);
      if (officeResult) setOfficeSection(officeResult);
      setIsLoading(false);

      return officeResult;
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.log(error)
    }
  } 

  const value: SanityContextProps = {
    homeSection,
    workSection,
    officeSection,
    allMembers,
    allProjects,
    socialMedia,
    currentProject,
    setCurrentProject,
    getProjectByName,
    getAllProjects,
    getAllMembers,
    getWorkPage,
    getOfficePage,
    getHomePage,
    getSocialMedia,
    isLoading,
    fetchError,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
};
