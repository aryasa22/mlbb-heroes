import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Draggable } from "react-draggable";

export default function HeroDetail() {
  const [heroDetail, setHeroDetail] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const params = useParams();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "21967a7c69mshbc78d7084f62812p1f9cd0jsnb54febdc19f7",
      "X-RapidAPI-Host": "unofficial-mobile-legends.p.rapidapi.com",
    },
  };

  const fetchHeroDetail = () => {
    fetch(
      `https://unofficial-mobile-legends.p.rapidapi.com/heroes/${params.id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHeroDetail(response.data);
        setSkills(response.data.skill.skill);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchHeroDetail();
  }, []);

  const skillClickHandler = (title, text) => {
    setModalContent([title, text]);
    setIsModalOpen(true);
  };

  if (isLoading) return <p className="loading-text">Loading...</p>;

  return (
    <motion.div
      className="detail-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="detail-card">
        <div className="detail-card-img">
          <img src={heroDetail.cover_picture} alt="HeroImage" />
        </div>
        <div className="detail-card-desc">
          <div className="detail-card-heading">
            <h1 className="detail-hero-name">{heroDetail.name}</h1>
            <p className="detail-hero-role">{heroDetail.type}</p>
          </div>

          <div className="detail-card-info">
            <h2>Skills</h2>
            <div className="skill-icons">
              {skills.length !== 0 &&
                skills.map((skill) => {
                  return (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 1200 }}
                      key={skill.name}
                      onClick={() => {
                        skillClickHandler(skill.name, skill.des);
                      }}
                    >
                      <img src={skill.icon} alt="" />
                    </motion.button>
                  );
                })}
            </div>
            <h3>Best Mate</h3>
            {heroDetail.counters && (
              <p className="counters-name">{heroDetail.counters.best.name}</p>
            )}
            <h3>Counters</h3>
            {heroDetail.counters && (
              <p className="counters-name">
                {heroDetail.counters.counters.name}
              </p>
            )}
            <h3>Countered By</h3>
            {heroDetail.counters && (
              <p className="counters-name">
                {heroDetail.counters.countered.name}
              </p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, x: "-50%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key="modal"
        >
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </button>

          <h4 className="modal-title">{modalContent[0]}</h4>
          <p
            className="modal-text"
            dangerouslySetInnerHTML={{ __html: modalContent[1] }}
          ></p>
        </motion.div>
      )}
    </motion.div>
  );
}
