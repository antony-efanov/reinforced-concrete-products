import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <div className="app">
        <div className="hero">
          <div className="hero__text">
            <h1 className="hero__text--title">Залізобетонні вироби (ЗБВ)</h1>
            <h2 className="hero__text--secondaryTitle">
              Ми робимо бля найкращі бетонні вироби в Україні. Отвечаю, зробимо
              - охуїєш.
            </h2>
            <button className="hero__text--orderButton">Замовити</button>
          </div>
          <div className="hero__image">
            <img
              className="hero__image--itself"
              src="/assets/images/sanya.jpg"
              alt="sanya"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
