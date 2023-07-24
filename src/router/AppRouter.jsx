import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../pages/home/Home.scss";
import NotFound from "../components/Error/NotFound";


const AppRouter = () => {
  return (
    <div className="home-bgImg-container">
      <NavBar />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
