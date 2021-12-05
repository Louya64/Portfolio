import { useState } from "react";
import axios from "axios";
import { FaStarOfLife } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [societyName, setSocietyName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const submitRes = document.getElementById("submitRes");

	const handleSubmit = (e) => {
		e.preventDefault();
		submitRes.innerHTML = "";
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
			// .then((res) => (submitRes.innerHTML = res.data))
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};

	return (
		<section id="contact">
			<h2 className="sectionTitle">Pour me contacter :</h2>
			<form id="contactForm" onSubmit={(e) => handleSubmit(e)} method="POST">
				<div>
					<label htmlFor="">
						<FaStarOfLife className="iconRequired" />
					</label>
					<input
						placeholder=" Nom ou pseudo"
						type="text"
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
					/>
					<input
						placeholder=" Prénom"
						type="text"
						value={firstname}
						onChange={(e) => setFirstname(e.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder=" Nom de l'entreprise"
						type="text"
						value={societyName}
						onChange={(e) => setSocietyName(e.target.value)}
					/>
					<label htmlFor="">
						<FaStarOfLife className="iconRequired" />
					</label>
					<input
						placeholder=" Adresse email (champs obligatoire)"
						type="email"
						aria-describedby="emailHelp"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="">
						<FaStarOfLife className="iconRequired" />
					</label>
					<input
						id="messageInput"
						placeholder=" Message (champs obligatoire)"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
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
