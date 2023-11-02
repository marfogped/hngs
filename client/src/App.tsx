import { HomeContainer } from "./containers";
import { Navbar, NotFound } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/transition/Transition";
import { useSanity } from "./hooks/useSanity";

function App() {
  const { isLoading } = useSanity();
  const location = useLocation();

  return (
    <>

      {
        isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div key={location.pathname} className="h-full">
                <Transition />
                <Navbar />
                <main>
                  <Routes>
                    <Route
                      path="/"
                      element={<HomeContainer />}
                    />
                    {/* <Route
                      path="/work"
                      element={<HomeContainer sections={homeSection} />}
                    />
                    <Route
                      path="/office"
                      element={<HomeContainer sections={homeSection} />}
                    /> */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </motion.div>
            </AnimatePresence>
          </>
        )
      }

     
    </>
  );
}

export default App;
