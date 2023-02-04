import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deleteItem} from "../redux/actions/clientsAction"
import {  useNavigate, Link } from 'react-router-dom';







function Tabla2({id,apellidoM,apellidoP,nombre,calle,telefono,colonia,numero}) {
    console.log("desde tabla2", id)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function handleDelete(id){
        console.log(id)
        alert("borrado",)
        dispatch(deleteItem(id))
        navigate(-1)
    }

    
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>APELLIDO PATERNO</th>
          <th>APELLIDO MATERNO</th>
          <th>CALLE</th>
          <th>NUMERO</th>
          <th>COLONIA</th>
          <th>TELEFONO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{nombre}</td>
          <td>{apellidoP}</td>
          <td>{apellidoM}</td>
          <td>{calle}</td>
          <td>{numero}</td>
          <td>{colonia}</td>
          <td>{telefono}</td>
          <td><span onClick={()=>handleDelete(id)}>
          <i class="bi bi-trash"></i>
            </span>
            <span >
              <Link to={"/actualizar/"+id}>
               <i class="bi bi-gear"></i>
            </Link>
            </span>
         </td>

        </tr>
       
        
      </tbody>
    </Table>
    
  
    </>
  );
}

export default Tabla2;