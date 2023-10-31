import { HomeContainer } from "./containers";
import { Navbar } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSanity } from "./hooks/useSanity";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/transition/Transition";

function App() {
  const {
    isLoading,
    homeSection,
    projectDescriptionSection,
    workSection,
    officeSection,
    fetchError,
  } = useSanity();
  const location = useLocation();

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
              <AnimatePresence mode="wait">
                <motion.div key={location.pathname} className="h-full">
                  <Transition />
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
                            <HomeContainer sections={homeSection} />
                          }
                        />
                      ) : (
                        ""
                      )}
                      {workSection ? (
                        <Route
                          path="/work"
                          element={<HomeContainer sections={homeSection} />}
                        />
                      ) : (
                        ""
                      )}
                      {officeSection ? (
                        <Route
                          path="/office"
                          element={<HomeContainer sections={homeSection} />}
                        />
                      ) : (
                        ""
                      )}
                    </Routes>
                  </main>
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
