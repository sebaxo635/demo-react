import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/formu.css";
import axios from "axios";

const Informe = () => {
  const { id } = useParams();
  const [registro, setRegistro] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/empresa/buscar/${id}`)
      .then((response) => {
        setRegistro(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <div
        id="back"
        className="w-100 vh-100 d-flex align-items-lg-center justify-content-lg-center"
      >
        <div
          style={{ width: "50rem" }}
          className=" col-lg-12 p-3 bg-light shadow-lg h-auto  rounded-5 "
        >
          <h2 className="text-lg-center">Registro</h2>
          {registro && (
            <div>
              <p>Nombre: {registro.id}</p>
              <p>Apellido: {registro.correo}</p>
              {/* Agrega aquí el resto de los campos que deseas mostrar */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Informe;
