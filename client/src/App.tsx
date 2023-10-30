import { HomeContainer } from "./containers";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { useSanity } from "./context/SanityContext";

function App() {
  const {
    isLoading,
    homeSection,
    projectDescriptionSection,
    workSection,
    officeSection,
    fetchError,
  } = useSanity();

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          {fetchError ? (
            <div>something went wrong</div>
          ) : (
            <>
              <Navbar />
              <main>
                <Routes>
                  {homeSection ? (
                    <Route
                      path="/"
                      element={<HomeContainer sections={homeSection} />}
                    />
                  ) : (
                    ""
                  )}
                  {projectDescriptionSection ? (
                    <Route
                      path="/project-description"
                      element={
                        <HomeContainer sections={projectDescriptionSection} />
                      }
                    />
                  ) : (
                    ""
                  )}
                  {workSection ? (
                    <Route
                      path="/work"
                      element={<HomeContainer sections={workSection} />}
                    />
                  ) : (
                    ""
                  )}
                  {officeSection ? (
                    <Route
                      path="/office"
                      element={<HomeContainer sections={officeSection} />}
                    />
                  ) : (
                    ""
                  )}
                </Routes>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
