import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [experience, setExperience] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience/");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
      setLoading(false); // Stop loading once data is fetched
    });
  }, []);

  return (
    <section className="experience">
      {loading ? (
        <div className="loading-spinner">Loading...</div> // Show loading spinner
      ) : (
        <>
          <h2>{experience.title}</h2>
          <ul className="experience-list">
            <li>
              <strong>SMA Advent Waropan 2019-2021</strong>
            </li>
            <li>
              <strong>Universitas Klabat 2022-2024</strong>
            </li>
          </ul>

          <h2>{experience.title1}</h2>
          <ul className="experience-list">
            <li>
              <strong>Posisi, Perusahaan</strong>
            </li>
            <li>
              <strong>Posisi, Perusahaan</strong>
            </li>
          </ul>

          <h2>{experience.title2}</h2>
          <ul className="skills-list">
            <li>{experience.subTitle}</li>
            <li>{experience.subTitle2}</li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Experience;
