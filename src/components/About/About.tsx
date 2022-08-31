import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide_1 from "../../assets/images/slide_1.png";
import Slide_2 from "../../assets/images/slide_2.png";
import Slide_3 from "../../assets/images/slide_3.png";

const About: FC = () => {
  return (
    <div className="about">
      <Carousel
        className="about__carousel"
        showArrows={true}
        showStatus={false}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src={Slide_1} alt="about_image" />
        </div>
        <div>
          <img src={Slide_2} alt="about_image" />
        </div>
        <div>
          <img src={Slide_3} alt="about_image" />
        </div>
      </Carousel>
      <div className="about__text">
        <h2 className="about__text--title">Про нас</h2>
        <p className="about__text--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia
          nobis fugiat consectetur quibusdam voluptatem eveniet repellendus
          temporibus error architecto aspernatur illum tenetur libero, animi
          consequatur nostrum veniam! Fugiat, sapiente.
        </p>
      </div>
    </div>
  );
};

export default About;
