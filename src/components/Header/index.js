const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="profile">
          <img
            src="/profile.jpg" // Pastikan path ini benar
            alt="Profile"
            className="profile-image"
          />
          <span className="profile-name">Nama Anda</span>
        </div>
        <h1>Nama Anda</h1>
        <p className="subtitle">Posisi yang Diinginkan</p>
        <p>Email: email@anda.com | Telepon: 08123456789</p>
      </header>
    </div>
  );
};
export default Header;
