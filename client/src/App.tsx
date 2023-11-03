import { HomeContainer, OfficeContainer, WorkContainer } from "./containers";
import { Navbar, NotFound, Footer, ProjectDetails } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import Transition from "./components/transition/Transition";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} className="h-full">
          <Navbar />
          <Transition />
          <Routes 
          location={location} 
          key={location.pathname}
          >
            <Route
              index
              element={<HomeContainer />}
              />
            <Route
              path="/work"
              element={<WorkContainer />}
              />

            <Route
              path="/office"
              element={<OfficeContainer />}
            />
            <Route path="/work/:project" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default App;
