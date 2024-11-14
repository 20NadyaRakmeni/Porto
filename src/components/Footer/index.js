import "../../Assets/css/footer.css"; // Link to the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 Nadya. Semua hak dilindungi.</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/nadyarakemi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/20NadyaRakmeni"
          target="_blank"
          rel=" noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/nadyarakemi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
