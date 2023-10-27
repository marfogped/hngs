import React,{ useState, useEffect } from "react";
import { client } from "../../api/sanityClient";

import { Hero, About } from "../../components";
import { Navbar } from "../../components"

interface Section {
    type?: "hero" | "about" | "portfolio" | "contact" | "footer";
    heroImage?: string | null;
    aboutTitle?: string | null;
    aboutDescription?: string | null;
    portfolioImages?: string[];
    contactTitle?: string[];
    contactDescription?: string[];
    footerMediaLinks?: string[];
}

interface Sections {
    sections: Section[]
}

const HomeContainer: React.FC<Sections> = ({ sections }) => {
    // const [sectionsData, setSectionsData] = useState<SectionInterface | null>(null)
    // const [isLoading, setIsLoading] = useState<boolean>(true)
    // const [fetchingError, setFetchingError] = useState<boolean>(false)

    // const [heroContent, setHeroContent] = useState<SectionInterface | null>(null)
    // const [aboutContent, setAboutContent] = useState<SectionInterface | null>(null)

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const query = `*[_type == 'hngsHome']{
    //                 ...,
    //                 "heroImage": heroImage.asset->url,
    //               }|order(orderRank)`;
    //             const result = await client.fetch(query);

    //             if(result){
    //                 result?.map((section: SectionInterface) => {
    //                     if(section.type === "hero") setHeroContent(section)
    //                     if(section.type === "about") setAboutContent(section)
    //                 })
    //                 setSectionsData(result)
    //             }
    //             setIsLoading(false)
    //         } catch (error) {
    //             setFetchingError(true)
    //             setIsLoading(false)
    //             console.log(error)
    //         }
    //     }
    //     getData()
    // }, [])

    // console.log(sectionsData)
    

    return (
        // <div>
        //     {
        //         isLoading ? (
        //             <>
        //             </>
        //         ) : (
        //             <>
        //                 {
        //                     fetchingError ? (
        //                         <>
        //                         </>
        //                     ) : (
        //                         <>
        //                             <Navbar />
        //                             <main>
        //                                 <Hero heroImage={heroContent?.heroImage} />
        //                                 <About aboutTitle={aboutContent?.aboutTitle} aboutDescription={aboutContent?.aboutDescription} />
        //                             </main>
        //                         </>
        //                     )
        //                 }
        //             </>
        //         )
        //     }
        // </div>
        <div>
            That's a try
        </div>
    )
}

export default HomeContainer