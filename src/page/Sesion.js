import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Sesion() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/login", {
        correo: correo,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setCorreo("");
    setPassword("");
  };

  return (
    <div>
      <Navbar />
      <h1>Iniciar Sesión</h1>
      <form
        className="bg-info position-absolute top-50 start-50 translate-middle border border-black p-3 rounded-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
  }

export default Sesion;
