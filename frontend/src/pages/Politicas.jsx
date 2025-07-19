import { useState } from "react";
import "./Politicas.css";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";

import Cookies from "./politicas/Cookies";
import Privacidad from "./politicas/Privacidad";
import RedesSociales from "./politicas/RedesSociales";
import AvisoLegal from "./politicas/AvisoLegal";

const tabs = [
  { id: "cookies", title: "Política de Cookies" },
  { id: "privacidad", title: "Política de Privacidad" },
  { id: "redes", title: "Redes Sociales" },
  { id: "aviso", title: "Aviso Legal" },
];

const content = {
  cookies: Cookies(),
  privacidad: Privacidad(),
  redes: RedesSociales(),
  aviso: AvisoLegal(),
};

const Politicas = () => {
  const [activeTab, setActiveTab] = useState("cookies");

  return (
    <>
      <Nav />
      <div className="policy-container">
        <h2 className="">Políticas Legales</h2>

        <div className="policy-btn">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              text={tab.title}
              to=""
              className={
                tab.id === activeTab
                  ? "u--red-bg u--white "
                  : "u--white-bg u--black"
              }
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div className="">{content[activeTab]}</div>
      </div>
    </>
  );
};

export default Politicas;
