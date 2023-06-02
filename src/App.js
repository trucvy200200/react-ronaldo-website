import { useEffect } from "react";
import Header from "./components/common/header";
// import Footer from "./components/common/Footer";
import Home from "./components/common/Home";
import About from "./components/common/About";
import Resume from "./components/resume/Resume";
// import Servies from "./components/services";
// import Projects from "./components/projects";
// import Blogs from "./components/blogs";
// import Hireme from "./components/hireme";
// import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      {/* <Servies />
      <Projects />
      <Blogs />
      <Hireme />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
