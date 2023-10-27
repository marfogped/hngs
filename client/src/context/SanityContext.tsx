import React, { useContext, useState, ReactNode, useEffect } from 'react';
import { client } from '../api/sanityClient';

interface SectionData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
interface SectionsData {
    webpagePath?: string;
    sections: SectionData[];
}

interface SanityContextProps {
    sections: SectionsData[];
    isLoading: boolean;
}

interface SanityProviderProps {
    children: ReactNode;
}

const SanityContext = React.createContext<SanityContextProps | null>(null);

export function useSanity() {
    return useContext(SanityContext)!;
}

export const SanityProvider = ({ children } : SanityProviderProps) => {
    const [sections, setSections] = useState([])
    const [isLoading, setIsLoading] = useState(true)  

    console.log(sections)

    useEffect(() => {
        const getData = async () => {
            try {
                const query = `*[_type == 'hngsHome'] | order(orderRank)`;
                const result = await client.fetch(query);

                if(result) setSections(result)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        getData()
    }, [])


    const value: SanityContextProps = {
        sections,
        isLoading
    };

  return (
    <SanityContext.Provider value={value}>
        { children }
    </SanityContext.Provider>
  )
}