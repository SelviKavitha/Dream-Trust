import { BrowserRouter, HashRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutPage from "./Pages/AboutPage";
import ProgramsPage from "./Pages/ProgramsPage";
import GalleryPage from "./Pages/GalleryPage";
import JoinUsPage from "./Pages/JoinUsPage";
import PublicationsPage from "./Pages/PublicationsPage";
import DonatePage from "./Pages/DonatePage";

// import DonatePage from "./pages/DonatePage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/donate" element={<DonatePage/>} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;