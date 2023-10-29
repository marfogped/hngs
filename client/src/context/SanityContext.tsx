import React, { useContext, useState, ReactNode, useEffect } from "react";
import { client } from "../api/sanityClient";

interface SectionData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface SanityContextProps {
  homeSection: SectionData[];
  workSection: SectionData[];
  officeSection: SectionData[];
  projectDescriptionSection: SectionData[];
  isLoading: boolean;
}

interface SanityProviderProps {
  children: ReactNode;
}

const SanityContext = React.createContext<SanityContextProps | null>(null);

export function useSanity() {
  return useContext(SanityContext)!;
}

export const SanityProvider = ({ children }: SanityProviderProps) => {
  const [homeSection, setHomeSection] = useState([]);
  const [workSection, setWorkSection] = useState([]);
  const [officeSection, setOfficeSection] = useState([]);
  const [projectDescriptionSection, setProjectDescriptionSection] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const homeQuery = `*[_type == 'hngsHome'] | order(orderRank)`;
        const homeResult = await client.fetch(homeQuery);

        const workQuery = `*[_type == 'hngsWork'] | order(orderRank)`;
        const workResult = await client.fetch(workQuery);

        const officeQuery = `*[_type == 'hngsOffice'] | order(orderRank)`;
        const officeResult = await client.fetch(officeQuery);

        const projectDescriptionQuery = `*[_type == 'hngsProjectDescription'] | order(orderRank)`;
        const projectDescResult = await client.fetch(projectDescriptionQuery);

        if (homeResult) setHomeSection(homeResult);
        if (workResult) setWorkSection(workResult);
        if (officeResult) setOfficeSection(officeResult);
        if (projectDescResult) setProjectDescriptionSection(projectDescResult);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getData();
  }, []);

  const value: SanityContextProps = {
    homeSection,
    workSection,
    officeSection,
    projectDescriptionSection,
    isLoading,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
};
