import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__text--title">Залізобетонні вироби</h1>
        <h2 className="hero__text--secondaryTitle">Найкращі в Україні</h2>
        <a href="#contact">
          <button className="hero__text--orderButton genericButton">
            Замовити
          </button>
        </a>
      </div>
      <div className="hero__images">
        <div className="hero__images--long heroImage"></div>
        <div className="hero__images--small heroImage"></div>
        <div className="hero__images--small2 heroImage"></div>
      </div>
    </div>
  );
};

export default Hero;
