import { HomeContainer, OfficeContainer, WorkContainer } from "./containers";
import { Navbar, NotFound, Footer, ProjectDetails } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSanity } from "./hooks/useSanity";

function App() {
  const location = useLocation();
  const { fetchError, isLoading } = useSanity();

  return (
    <>
      {!fetchError || isLoading ? <Navbar /> : ""}
      <main className="h-full">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomeContainer />} />
          <Route path="/work" element={<WorkContainer />} />

          <Route path="/office" element={<OfficeContainer />} />
          <Route path="/work/:project" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!fetchError || isLoading ? <Footer /> : ""}
      </main>
    </>
  );
}

export default App;
