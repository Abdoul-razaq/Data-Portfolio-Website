import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Certificates } from "./components/sections/Certificates";
import ProjectDetail from "./routes/project.$slug";
import { ScrollToTop } from "./components/sections/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <div className="relative min-h-screen text-white bg-[#0a0f1c] overflow-x-hidden">
              <Navbar />

              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
              </main>

              <Footer />
            </div>
          }
        />

        {/* Project Detail Page */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;