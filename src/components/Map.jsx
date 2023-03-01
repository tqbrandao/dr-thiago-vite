import React from "react";
import classes from "./Map.module.css";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

function Map() {
  return (
    <section className={classes["section-map"]}>
      <div className={classes.map}>
        <h1 className={classes[".map-heading"]}>
          <HiChatBubbleOvalLeftEllipsis />
          <span className={classes["heading-text"]}>Contato</span>
        </h1>
        {/* <p className={classes.mapDescription}>
          A Psiquiatria é a especialidade da medicina responsável pelo
          acompanhamento dos Transtornos Mentais. Nós, médicos psiquiatras,
          passamos por anos de treinamento intensivo para que sejamos capazes de
          diagnosticar e tratar de forma adequada pessoas que necessitem.
        </p>
        <p className={classes.mapDescription}>
          Pessoalmente, acredito numa psiquiatria aprofundada, na qual quero
          conhecer os pacientes a fundo, para além de sintomas e doenças, e
          ajudá-los da melhor maneira possível, seja com orientações, indicação
          de psicoterapia, medicações, quando indicadas, e tratamento
          multidisciplinar.
        </p> */}
        <div className={classes.contact}>
          <div className={classes["map-container"]}>
            <h1 className={classes["map-header"]}>Localização:</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.028079110174!2d-49.38877828876647!3d-20.830572580689427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb33952917ec5%3A0x2b2f70fb0c449c27!2sDr.%20Thiago%20Queiroz%20Brand%C3%A3o%20-%20M%C3%A9dico%20Psiquiatra!5e0!3m2!1spt-BR!2sbr!4v1673400989124!5m2!1spt-BR!2sbr"
              width="100%"
              height="70%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={classes["info-container"]}>
            <h1 className={classes["info-header"]}>Informações:</h1>
            <div className={classes["info-inner-container"]}>
              <p className={classes["info-paragraph"]}>
                <HiMapPin className={classes[".map-pin"]} />
                Multi Clínica – Av. Romeu Strazzi, 1445, Bairro Jardim Walkíria.
                São José do Rio Preto – São Paulo.
              </p>
              <p className={classes["info-paragraph"]}>
                <HiPhone />
                (17) 9 9618-9285
              </p>
              <p className={classes["info-paragraph"]}>
                <HiMail />
                thiago_qb@hotmail.com
              </p>
            </div>
          </div>
        </div>

        {/* <ElfsightWidget widgetID="8a5c04ee-aa77-4e51-adc0-dea016d7ec21" /> */}
      </div>
    </section>
  );
}

export default Map;
