import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bubbleImage from "../assets/tech/bubble.png";
import gsap from "gsap";
import "../styles/loader.css";

function Loader() {
  const navigate = useNavigate();
  useEffect(() => {
    const loadingAnimation = gsap.timeline();
    loadingAnimation
      .fromTo(
        ".loading-page",
        { opacity: 1 },
        { opacity: 0, duration: 1.5, delay: 3.5 }
      )
      .fromTo(
        ".logo-name",
        { y: 25, opacity: 0 },
        { y: 1, opacity: 1, duration: 2, delay: 0.2 },
        "-=3"
      )
      .call(() => {
        navigate("/home");
      });

    return () => {
      loadingAnimation.kill();
    };
  }, [navigate]);

  return (
    <>
      <div className="loading-page">
        <img className="logo-name bubble" src={bubbleImage} alt="Bubble" />
        <svg
          id="svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <g>
            <path d="M480.4,676.4h78.4V558.8H284.4v117.6h78.4c0,151.5,0,0,0,0c0,173.2,140.8,313.6,313.6,313.6C849.6,990,990,849.6,990,676.6V10H872.4v666.7c0,108.1-88,195.7-196,195.7C568.2,872.4,480.4,784.4,480.4,676.4C480.4,676.4,480.4,753.8,480.4,676.4L480.4,676.4z M911.6,206V49.2h39.2V206H911.6L911.6,206z M10,304v19.6c0,108.3,87.6,196,195.8,196h39.3c21.7,0,49.2-14.1,62-32.4l69.6-99.5c24.8-35.4,65.1-35.3,89.7,0l69.4,99.5c12.5,17.9,39.8,32.4,62,32.4h39.4c108.3,0,196.1-87.8,196.1-196V304c0-119.1-96.9-215.6-215.2-215.6H225.2C106.4,88.4,10,185.2,10,304L10,304z M618,127.6c96.9,0,176,79.1,176,176.4v19.6c0,86.6-70.3,156.8-156.9,156.8h-39.4c-9.2,0-24.6-8.1-29.8-15.6l-69.4-99.5c-40.2-57.7-113.6-57.8-154-0.1l-69.6,99.5c-5.4,7.6-20.8,15.6-29.9,15.6h-39.3c-86.5,0-156.6-70.2-156.6-156.8V304c0-97.3,78.9-176.4,176-176.4H618L618,127.6z M618,166.8c75.2,0,136.8,61.3,136.8,136.6v19.5c0,64.7-52.7,117.1-117.7,117.1h-39.4c3.7,0,0.3-1.8,2.3,1.2l-69.4-99c-55.8-79.6-162.2-79.8-218.2-0.1l-69.6,99c2-2.8-1.4-1.1,2.3-1.1h-39.3c-64.8,0-117.4-52.4-117.4-117.1v-19.5c0-75.3,61.4-136.6,136.8-136.6H618L618,166.8z" />
          </g>
        </svg>
      </div>
    </>
  );
}

export default Loader;
