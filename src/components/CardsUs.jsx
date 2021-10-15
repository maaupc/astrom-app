import React from "react";
import "../styles/cardsUs.css";
import CardItemNosotros from "./CardItemNosotros";

const CardsUs = () => {
  return (
    <section className="animated__hover py-5">
      <h1 className="team-title">Nuestro equipo</h1>
      <hr className="elementor_divider-cards" />
      <div className="container_cards-nosotros">
        <div className="animated__cards-nosotros py-5">
          <CardItemNosotros
            src="https://i.postimg.cc/kgbBhxFG/mau-byn2.png"
            alt="integrante1"
            name="Mauricio Pérez Cabral"
            profession="Python Developer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificado por Rolling Code School."
          />
          <CardItemNosotros
            src="https://i.postimg.cc/VN95zmhc/gaby-byn2.png"
            alt="integrante2"
            name="Gabriela Pérez"
            profession="UX/UI Designer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificada por Rolling Code School."
          />
          <CardItemNosotros
            src="https://i.postimg.cc/vmwcRc3z/norali-byn.png"
            alt="integrante3"
            name="Norali Meriles"
            profession="Front-end Developer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificada por Rolling Code School."
          />
          <CardItemNosotros
            src="https://i.postimg.cc/fy6m6qMv/martin-byn.png"
            alt="integrante4"
            name="Leonardo Martin Mirabal"
            profession="C# Developer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificado por Rolling Code School."
          />
          <CardItemNosotros
            src="https://i.postimg.cc/HkCdL0xv/lucas2-byn2.png"
            alt="integrante5"
            name="Lucas Lopez"
            profession=".Net Developer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificado por Rolling Code School."
          />
          <CardItemNosotros
            src="https://i.postimg.cc/FsqYZPSw/carlos-byn.png"
            alt="integrante6"
            name="Carlos Lozada"
            profession="Java Developer"
            description="Experiencia desarrollando proyectos con stack MERN. Certificado por Rolling Code School."
          />
        </div>
      </div>
    </section>
  );
};

export default CardsUs;
