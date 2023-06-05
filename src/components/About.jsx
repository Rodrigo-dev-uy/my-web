import React from "react";
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";
import FigmaImage from "../assets/tech/figma.png";

function About() {
  return (
    <div id="about-section">
      <Parallax bgImage={FigmaImage} strength={500}>
        <div className="parallax-content">
          <h1>Título de la sección</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            eaque rem mollitia, quis necessitatibus accusantium natus eveniet
            deleniti laboriosam obcaecati cum blanditiis nisi quo repellendus
            ipsa ut cupiditate architecto sit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur deserunt eaque magnam
            laborum itaque corporis commodi harum ea vel repudiandae voluptates,
            dolore minima praesentium rerum molestiae ducimus illo voluptas
            nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione, cumque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facilis possimus nam fuga. Dolor, fugiat nemo blanditiis odio
            ab quasi, deserunt dolorum suscipit incidunt corrupti adipisci totam
            nam, vel omnis libero! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est id iusto quibusdam nemo eius mollitia itaque
            distinctio ea laudantium quos? Sed a enim et cumque ipsam esse
            repellat earum architecto? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ad, delectus quas quod eligendi molestias eveniet
            saepe a ut quo cupiditate voluptatum excepturi, placeat accusantium
            cum commodi? Minus blanditiis tempore natus?
          </p>
        </div>
      </Parallax>

      <Link
        activeClass="active"
        to="home-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default About;
