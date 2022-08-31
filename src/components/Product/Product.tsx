import { FC } from "react";

import { IProductProps } from "./types";

const Product: FC<IProductProps> = ({ name, price, imgSrc, setOrderText }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="product__info">
        <h3 className="product__info--name">{name}</h3>
        <p className="product__info--price">{price}</p>
        <div className="infoButtons">
          <a href="#contact">
            <button
              onClick={() =>
                setOrderText(`Цікавить товар «${name}», перетелефонуйте мені.`)
              }
              className="product__info--button genericButton"
            >
              Замовити
            </button>
          </a>
          <a className="product__info--details" href="#">
            Детальніше
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
