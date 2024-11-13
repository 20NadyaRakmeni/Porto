import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <div>
      <header className="header">
        <div className="profile">
          <img
            src={`data:image/jpeg;base64, ${header.image}`} // Pastikan path ini benar
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h1>{header.title}</h1>
        <p className="subtitle">{header.subTitle}</p>
        <p>{header.subTitle2}</p>
      </header>
    </div>
  );
};
export default Header;
