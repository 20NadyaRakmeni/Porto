import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import "../../Assets/css/header.css"; // Link to the CSS file for styling

const Header = () => {
  const [header, setHeader] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
      setLoading(false); // Stop loading once data is fetched
    });
  }, []);

  return (
    <header className="header">
      {loading ? (
        <div className="loading-spinner">Loading...</div> // Show loading spinner
      ) : (
        <>
          <div className="profile">
            <img
              src={`data:image/jpeg;base64, ${header.image}`}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h1 className="header-title">{header.title}</h1>
          <p className="header-subtitle">{header.subTitle}</p>
          <p className="header-subtitle2">{header.subTitle2}</p>
        </>
      )}
    </header>
  );
};

export default Header;
