import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./css/formu.css";

const Registros = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/empresa/buscar")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div id="back">
        <DataTable
          value={data}
          className="card "
          showGridlines
          paginator
          rows={5}
          tableStyle={{ minWidth: "50rem" }}
        >
          
          <Column field="id" header="Id" />
          <Column field="primer_nombre" sortable header="Nombre" />
          <Column field="segundo_nombre" header="Apellido" />
          <Column field="correo" header="correo" />
          <Column field="rut_empresa" header="Rut" />
          <Column field="telefono" header="Telefino" />
          <Column
            body={(rowData) => (
              <Link to={`/Registros/${rowData.id}`}>Detalles</Link>
            )}
          />
        </DataTable>
      </div>
    </>
  );
};

export default Registros;
