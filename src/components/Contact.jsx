import { useState } from "react";
import axios from "axios";
import { FaStarOfLife } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let error;

  const handleSubmit = (e) => {
    error = false;
    e.preventDefault();
    if (lastname === "" || email === "" || message === "") {
      error = true;
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/",
        data: {
          lastname_pseudo: lastname,
          firstname: firstname,
          society_name: societyName,
          email_sender: email,
          message: message,
        },
      })
        .then(
          (res) => (document.getElementById("submitRes").textContent = res.data)
        )
        .catch((err) => console.error(err.response.data.validationErrors));
      setLastname("");
      setFirstname("");
      setSocietyName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact">
      <h2 className="sectionTitle">
        Pour me contacter :<br />
        <a
          aria-label="lien linkedin"
          className="contactLink"
          href="https://www.linkedin.com/in/emilie-eliceyri"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          aria-label="adresse email"
          className="contactLink"
          href="mailto:cixie@live.fr"
          title="envoyez-moi un mail : cixie@live.fr"
        >
          <AiFillMail />
        </a>
        <a
          aria-label="numéro de téléphone"
          className="contactLink"
          href="tel:+33676678002"
          title="contactez-moi par téléphone : 06 76 67 80 02"
        >
          <BsTelephone />
        </a>
      </h2>
      <form id="contactForm" onSubmit={(e) => handleSubmit(e)} method="POST">
        FORMULAIRE EN COURS DE CONSTRUCTION, NON FONCTIONNEL POUR L'INSTANT
        <div className="inputsContainer">
          <div className="inputDiv required">
            <FaStarOfLife className="iconRequired" />
            <input
              className={error && lastname === "" ? "error" : ""}
              placeholder=" Nom ou pseudo (max 100)"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                document.getElementById("submitRes").textContent = "";
              }}
              required
              maxLength="100"
            />
          </div>
          <div className="inputDiv">
            <input
              placeholder=" Prénom (max 100)"
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                document.getElementById("submitRes").textContent = "";
              }}
              maxLength="100"
            />
          </div>
        </div>
        <div className="inputsContainer">
          <div className="inputDiv">
            <input
              placeholder=" Nom de l'entreprise (max 100)"
              type="text"
              value={societyName}
              onChange={(e) => {
                setSocietyName(e.target.value);
                document.getElementById("submitRes").textContent = "";
              }}
              maxLength="100"
            />
          </div>
          <div className="inputDiv required">
            <FaStarOfLife className="iconRequired" />
            <input
              className={error && email === "" ? "error" : ""}
              placeholder=" Adresse email  (max 100)"
              type="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                document.getElementById("submitRes").textContent = "";
              }}
              required
              maxLength="100"
            />
          </div>
        </div>
        <div className="messageDiv required">
          <FaStarOfLife className="iconRequired" />
          <input
            className={error && message === "" ? "error" : ""}
            placeholder=" Message  (max 500)"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              document.getElementById("submitRes").textContent = "";
            }}
            required
            maxLength="500"
          />
        </div>
        <button id="contactSubmit" type="submit">
          Envoyer
        </button>
        <div id="submitRes"></div>
      </form>
    </section>
  );
};

export default Contact;
