import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../assets/hero-transparent.png";
import Button from "./UI/Button";

function Hero() {
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes["hero-text"]}>
          <h1 className={classes["hero-heading"]}>
            Dr. Thiago Queiroz Brandão
          </h1>
          <p className={classes["hero-description"]}>
            Atendimentos em Psiquiatria em São José do Rio Preto – SP. Médico
            pela Universidade Federal de Uberlândia e Psiquiatra pela
            Universidade Federal de Goiás.
            <p className={classes["hero-description"]}>
              CRM SP 221494 / RQE 92504
            </p>
          </p>
          <Button>Agendar Consulta</Button>
          {/* <Button variant="dark" className={classes.btnXl}>
            Agendar Consulta
          </Button>{" "} */}
        </div>
        <div className={classes["hero-img-box"]}>
          <img
            src={heroImg}
            alt="Foto do Dr. Thiago"
            className={classes["hero-img"]}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
