import React from "react";
import classes from "./Clinic.module.css";
// import Button from "./UI/Button";
import { HiOfficeBuilding } from "react-icons/hi";
import SliderClinic from "./UI/SliderClinic/SliderClinic";

function Clinic() {
  return (
    <section className={classes["section-clinic"]}>
      <div className={classes.clinic}>
        <h1 className={classes["clinic-heading"]}>
          {" "}
          <HiOfficeBuilding />
          <span className={classes["heading-text"]}>Conheça meu espaço</span>
        </h1>
        <div className={classes["clinic-container"]}>
          <div className={classes["clinic-text-box"]}>
            <h2 className={classes["heading-highlight"]}>
              Psiquiatra em Rio Preto - SP
            </h2>
            <p className={classes["clinic-description"]}>
              Meu nome é Thiago Queiroz Brandão, me formei em Medicina pela
              Universidade Federal de Uberlândia (UFU) e concluí a residência
              médica em Psiquiatria pela Universidade Federal de Goiás (UFG).
              Desde antes do início dos meus estudos em medicina, sempre tive
              apreço pelo estudo das áreas humanas, como filosofia, história e
              sociologia. Durante a faculdade de medicina, me aproximei da
              especialidade médica mais relacionada a tais temas: a Psiquiatria.
              Então fiz minha residência médica na área e sou a cada dia mais
              apaixonado por ela. Ter a oportunidade de ajudar pessoas em
              sofrimento mental me move a estudar mais a cada dia e me manter
              atualizado. Tenho experiência em emergências psiquiátricas e
              ambulatórios.
            </p>
          </div>
          <div className={classes["clinic-img-box"]}>
            {/* <img
              src={aboutImg}
              alt="Foto do Dr. Thiago"
              className={classes["about-img"]}
            ></img> */}
            <SliderClinic />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clinic;
