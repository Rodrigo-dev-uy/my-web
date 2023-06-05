import { useNavigate } from "react-router";
import "../styles/Home.css";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <nav>
        <h2 className="logo">
          Rodrigo <span className="name">Costa</span>{" "}
        </h2>
        <ul>
          <li>
            <span className="click" onClick={() => navigate("/about")}>
              About Me
            </span>
          </li>
          <li>
            <span className="click" onClick={() => navigate("/estudios")}>
              Estudios
            </span>
          </li>
          <li>
            <span className="click" onClick={() => navigate("/contact")}>
              Contact
            </span>
          </li>
        </ul>
        <button>Github</button>
      </nav>
    </div>
  );
}

export default Home;
