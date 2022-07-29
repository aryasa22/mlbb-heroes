import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AllHeroes() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "21967a7c69mshbc78d7084f62812p1f9cd0jsnb54febdc19f7",
      "X-RapidAPI-Host": "unofficial-mobile-legends.p.rapidapi.com",
    },
  };

  const fetchAllHeroes = () => {
    fetch("https://unofficial-mobile-legends.p.rapidapi.com/heroes", options)
      .then((response) => response.json())
      .then((response) => {
        setAllHeroes(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllHeroes();
  }, []);

  if (isLoading) return <p className="loading-text">Loading...</p>;

  return (
    <motion.div
      className="all-heroes-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-title">
        <h1>All Heroes</h1>
      </div>
      <div className="hero-list">
        {allHeroes.map((hero) => {
          return (
            <Link
              to={`/mlbb-heroes/herodetail/${hero.heroid}`}
              key={hero.heroid}
              className="hero-card link"
            >
              <div className="card-img">
                <img src={hero.key} alt="" />
              </div>
              <div className="card-des">
                <p className="desc-title">Name</p>
                <p className="desc-val">{hero.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
