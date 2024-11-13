import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
