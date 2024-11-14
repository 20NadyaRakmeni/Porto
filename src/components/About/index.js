import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import "../../Assets/css/about.css"; // Tambahkan file CSS untuk styling

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">{about.title}</h2>
          <p className="about-subtitle">{about.subTitle}</p>
        </div>
        <div className="about-image">
          <img
            src={`data:image/jpeg;base64, ${about.image}`}
            alt="About Us"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
