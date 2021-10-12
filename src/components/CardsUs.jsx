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
            src="https://images.pexels.com/photos/3131819/pexels-photo-3131819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="integrante1"
            name="Bhairab Patra"
            profession="UX/UI Designer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
          <CardItemNosotros
            src="https://images.pexels.com/photos/4856247/pexels-photo-4856247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="integrante2"
            name="Bhairab Patra"
            profession="UX/UI Designer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
          <CardItemNosotros
            src="https://miro.medium.com/max/1366/0*fGUK9MVBTekjdAGF.jpg"
            alt="integrante3"
            name="Bhairab Patra"
            profession="Java Developer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
          <CardItemNosotros
            src="https://images.pexels.com/photos/3131819/pexels-photo-3131819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="integrante4"
            name="Bhairab Patra"
            profession="UX/UI Designer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
          <CardItemNosotros
            src="https://images.pexels.com/photos/4856247/pexels-photo-4856247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="integrante5"
            name="Bhairab Patra"
            profession="UX/UI Designer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
          <CardItemNosotros
            src="https://miro.medium.com/max/1366/0*fGUK9MVBTekjdAGF.jpg"
            alt="integrante6"
            name="Bhairab Patra"
            profession="UX/UI Designer"
            description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
          />
        </div>
      </div>
    </section>
  );
};

export default CardsUs;
