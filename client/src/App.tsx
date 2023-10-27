import { Fragment } from "react"
import { HomeContainer } from "./containers"
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { useSanity } from "./context/SanityContext";


function App() {

    const { isLoading, sections } = useSanity()

    console.log(isLoading)
    console.log(sections)

    return (
        <>
            {
                isLoading ? (
                    <>
                    </>
                ) : (
                    <main>
                        <Navbar />
                        {
                            sections && sections.length ? (
                                sections.map((pages, pagesIdx) => {
                                    console.log(pages.webpagePath)
                                    
                                    return (
                                    <Fragment key={pagesIdx}>
                                        <Routes>
                                            {
                                                pages && pages.webpagePath ? ( 
                                                    <Route path={pages?.webpagePath} element={ <HomeContainer sections={pages?.sections} /> } /> 
                                                ) : ('')
                                            }
                                        </Routes>
                                    </Fragment>
                                )})
                            ) : ('')
                        }
                    </main>
                )
            }
        </>
    )
}

export default App
