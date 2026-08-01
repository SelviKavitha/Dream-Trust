import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./Pages/AboutPage";
import ProgramsPage from "./Pages/ProgramsPage";
import GalleryPage from "./Pages/GalleryPage";
import JoinUsPage from "./Pages/JoinUsPage";
import PublicationsPage from "./Pages/PublicationsPage";
import DonatePage from "./Pages/DonatePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;