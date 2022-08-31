import { FC, useState } from "react";
import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Hero";
import { Products } from "../../components/Products";

export const Main: FC = () => {
  const [orderText, setOrderText] = useState("");

  return (
    <div className="app">
      <Hero />
      <About />
      <Products setOrderText={setOrderText} />
      <Contact orderText={orderText} />
    </div>
  );
};
