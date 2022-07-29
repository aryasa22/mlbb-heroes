import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="categories">
        <Link to={"/mlbb-heroes/allheroes"} className="category link">
          All Heroes
        </Link>
        <Link to={"/mlbb-heroes/role/Mage"} className="category link">
          Mages
        </Link>
        <Link to={"/mlbb-heroes/role/Assassin"} className="category link">
          Assassins
        </Link>
        <Link to={"/mlbb-heroes/role/Marksman"} className="category link">
          Marksmans
        </Link>
        <Link to={"/mlbb-heroes/role/Tank"} className="category link">
          Tanks
        </Link>
        <Link to={"/mlbb-heroes/role/Support"} className="category link">
          Supports
        </Link>
      </div>
    </motion.div>
  );
}
