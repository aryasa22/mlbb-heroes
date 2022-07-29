import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import AllHeroes from "./pages/AllHeroes";
import Role from "./pages/Role";
import HeroDetail from "./pages/HeroDetail";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/mlbb-heroes/" element={<Home />} />
          <Route path="/mlbb-heroes/allheroes" element={<AllHeroes />} />
          <Route path="/mlbb-heroes/role/:name" element={<Role />} />
          <Route path="/mlbb-heroes/herodetail/:id" element={<HeroDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
