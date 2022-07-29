import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Role() {
  const [roleHeroes, setRoleHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "21967a7c69mshbc78d7084f62812p1f9cd0jsnb54febdc19f7",
      "X-RapidAPI-Host": "unofficial-mobile-legends.p.rapidapi.com",
    },
  };

  const fetchRoleHeroes = () => {
    fetch(
      `https://unofficial-mobile-legends.p.rapidapi.com/roles/${params.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRoleHeroes(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRoleHeroes();
  }, []);

  if (isLoading) return <p className="loading-text">Loading...</p>;

  return (
    <motion.div
      className="role-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-title">
        <h1>{params.name}s</h1>
      </div>

      <div className="hero-list">
        {roleHeroes.map((hero) => {
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
