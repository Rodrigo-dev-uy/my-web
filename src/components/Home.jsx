import "../styles/Home.css";
import Logo from "../assets/tech/3.png";
import Iam from "../assets/tech/yo1.png";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const circles = [];

  for (let x = 0; x < 6; x++) {
    circles.push(<div className="circle " key={x}></div>);
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container className="mt-4 back " fluid>
      <Row sm={3} xl={3} md={3} xxl={3}>
        <Col className="cols">
          <div
            className="perfil"
            style={{
              transform: `translateY(0) translateY(${scrollPosition}px)`,
            }}
          >
            <img className="logo" src={Logo} alt="Yo" />
            <img className="iam" src={Iam} alt="Yo" />
          </div>
        </Col>
        <Col className="cols">
          <div
            class="hello-parent"
            style={{
              transform: `translateY(-5%) translateY(${scrollPosition}px)`,
            }}
          >
            <svg
              class="hello-word"
              width="365"
              height="365"
              viewBox="0 0 365 365"
            >
              <g id="H-letter">
                <line
                  class="H-left-stroke"
                  x1="17"
                  y1="0"
                  x2="17"
                  y2="124"
                  stroke="#CC2900"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="H-mid-stroke"
                  x1="33"
                  y1="62"
                  x2="68"
                  y2="62"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="H-right-stroke"
                  x1="84"
                  y1="0"
                  x2="84"
                  y2="124"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
              </g>

              <g id="E-letter">
                <line
                  class="E-left-stroke"
                  x1="138"
                  y1="0"
                  x2="138"
                  y2="124"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="E-top-stroke"
                  x1="154"
                  y1="17"
                  x2="201"
                  y2="17"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="E-mid-stroke"
                  x1="154"
                  y1="62"
                  x2="196"
                  y2="62"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="E-bottom-stroke"
                  x1="154"
                  y1="107"
                  x2="201"
                  y2="107"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
              </g>

              <g id="L-one-letter">
                <line
                  class="L-one-long-stroke "
                  x1="17"
                  y1="153"
                  x2="17"
                  y2="277"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="L-one-short-stroke "
                  x1="33"
                  y1="260"
                  x2="77"
                  y2="260"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
              </g>

              <g id="L-two-letter">
                <line
                  class="L-two-long-stroke "
                  x1="104"
                  y1="153"
                  x2="104"
                  y2="277"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
                <line
                  class="L-two-short-stroke "
                  x1="120"
                  y1="260"
                  x2="164"
                  y2="260"
                  stroke="#000"
                  fill="none"
                  stroke-width="34"
                />
              </g>

              <g id="O-letter">
                <circle
                  class="O-stroke "
                  cx="231"
                  cy="215"
                  r="48"
                  stroke="#000"
                  fill="none"
                  stroke-width="31"
                />
              </g>

              <g id="red-dot">
                <circle
                  class="red-dot "
                  cx="325"
                  cy="260"
                  r="20"
                  fill="#e62e00"
                  stroke="none"
                />

                <line
                  x1="325"
                  y1="260"
                  x2="325"
                  y2="260"
                  stroke="#cc2900"
                  class="red-dot"
                />
              </g>
            </svg>
            <h2 className="name">WORLD</h2>
          </div>
        </Col>
        <Col className="cols">
          <div className="media">
            <ul>
              <li>
                <Link
                  to="https://github.com/Rodrigo-dev-uy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub id="git" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/rodrigo-costa-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn id="li" />
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="view"
            style={{
              transform: `translateY(-50%) translateY(${scrollPosition}px)`,
            }}
          >
            <div className="plane main">{circles}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
