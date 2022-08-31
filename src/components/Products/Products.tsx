import { FC, useState } from "react";
import Product from "../Product/Product";

import { default as fbs } from "../../assets/images/products/fbs.png";
import { default as kiltse } from "../../assets/images/products/kiltse.png";
import { default as pali } from "../../assets/images/products/pali.png";
import { default as plyta } from "../../assets/images/products/plyta.png";
import { default as progon } from "../../assets/images/products/progon.png";
import { default as shoda } from "../../assets/images/products/shoda.png";
import { default as shodi } from "../../assets/images/products/shodi.png";
import { IProductProps } from "./types";

const Products: FC<IProductProps> = ({ setOrderText }) => {
  const products = [
    {
      name: "ФБС",
      price: "від 2000 грн",
      imgSrc: fbs,
    },
    {
      name: "Кільця",
      price: "від 2000 грн",
      imgSrc: kiltse,
    },
    {
      name: "Палі",
      price: "від 2000 грн",
      imgSrc: pali,
    },
    {
      name: "Дорожні та аеродромні плити",
      price: "від 2000 грн",
      imgSrc: plyta,
    },
    {
      name: "Прогони",
      price: "від 2000 грн",
      imgSrc: progon,
    },
    {
      name: "Сходи",
      price: "від 2000 грн",
      imgSrc: shoda,
    },
    {
      name: "Сходові марші",
      price: "від 2000 грн",
      imgSrc: shodi,
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="products">
      <div className="products__header">
        <h2 className="products__header--title">Продукція</h2>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Пошук..."
          className="products__header--search"
          type="search"
        />
      </div>
      <div className="products__products">
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((product) => {
            return (
              <Product
                setOrderText={setOrderText}
                name={product.name}
                price={product.price}
                imgSrc={product.imgSrc}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
