import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./pages/Footer";
import Product from "./components/Product";
import Solutions from "./components/Solutions";
import Support from "./components/Support";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/itservices" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/itsolutions" element={<Solutions />} />
          <Route path="/itsupport" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/partner" element={<Partner />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
