import { useState } from "react";
import "./Modal.css";
import Work from "../../assets/work1.png";

export function WorkItems({ item }) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>

        <span className="work__button" onClick={() => toggleTab(1)}>
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times services__modal-close"
            ></i>

            <div className="services__modal-img2">
              <img src={item.image} alt="" className="services__modal-img" />
            </div>

            <h3 className="services__modal-title">{item.title}</h3>
            <p className="services__modal-description">{item.description}</p>
            <div className="services__modal-services">
              <a href={item.link} className="services__modal-button">
                <i className="uil uil-link modal__button-icon button__icon--flex"></i>
                Link
              </a>
              <a href={item.github} className="services__modal-button">
                <i className="uil uil-github-alt modal__button-icon button__icon--flex"></i>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
