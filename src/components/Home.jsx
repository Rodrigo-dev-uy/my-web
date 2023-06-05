import { gsap } from "gsap";
import React, { useEffect } from "react";
import "../styles/Home.css";
import Logo from "../assets/tech/3.png";
import Iam from "../assets/tech/yo1.png";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Yo" />

      <div class="hello-parent">
        <svg class="hello-word" width="365" height="365" viewBox="0 0 365 365">
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
              class="L-one-long-stroke"
              x1="17"
              y1="153"
              x2="17"
              y2="277"
              stroke="#000"
              fill="none"
              stroke-width="34"
            />
            <line
              class="L-one-short-stroke"
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
              class="L-two-long-stroke"
              x1="104"
              y1="153"
              x2="104"
              y2="277"
              stroke="#000"
              fill="none"
              stroke-width="34"
            />
            <line
              class="L-two-short-stroke"
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
              class="O-stroke"
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
              class="red-dot"
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
      </div>
      <img className="iam" src={Iam} alt="Yo" />
      <h2 className="name2">WORLD</h2>
      <Link
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Scroll to About
      </Link>
    </div>
  );
}

export default Home;