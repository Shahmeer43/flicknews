import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { RemoveTrailingSlash } from "./Components/RemoveTrailingSlash";

function App() {
  return (
    <>
      <RemoveTrailingSlash />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
